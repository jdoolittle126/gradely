using System;
using System.Diagnostics;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;
using Gradely.Web.Auth.Interfaces;
using NuGet.Protocol;
using RestSharp;

namespace Gradely.Web.Auth
{
    class Auth0Client : IAuth0Client, IDisposable
    {
        
        private readonly RestClient _client;
        public Auth0Client(string tenant, string country, string clientId, string clientSecret)
        {

            string url = $"https://{tenant}.{country}.auth0.com";
            var options = new RestClientOptions($"{url}/api/v2");

            _client = new RestClient(options)
            {
                Authenticator = new Auth0Authenticator(url, clientId, clientSecret)
            };
        }

        public async Task<Auth0User> CreateUser(Auth0UserRequest user, RoleType role = RoleType.Teacher)
        {

            var request = new RestRequest("users", Method.Post)
                .AddStringBody(JsonSerializer.Serialize(user), DataFormat.Json);

            var response = await _client.PostAsync<Auth0User>(request);

            // Hardcoded for now...
            var roleId = role switch
            {
                RoleType.Admin => "rol_2SMRpn78DC1udax6",
                RoleType.TenantAdmin => "rol_eLIFfKvoeSDQfZff",
                _ => "rol_lZpmERDChP9Ojg3n"
            };

            if (response is null)
            {
                // do something
            }

            Console.WriteLine($"TESTING: {response.Id}");

            // FIX
            request = new RestRequest("users/{id}/roles", Method.Post)
                .AddUrlSegment("id", response.Id)
                .AddStringBody($"{{\"roles\": [\"{roleId}\"]}}", DataFormat.Json);

            await _client.PostAsync(request);

            return response;
        }

        public async Task<Auth0UserResponse> GetUser(string id)
        {
            var request = new RestRequest("users/{id}", Method.Get)
                .AddUrlSegment("id", id)
                .AddQueryParameter("fields", "family_name,given_name,email,app_metadata,user_id");

            var response = await _client.GetAsync<Auth0UserResponse>(request);

            return response;
        }

        public async Task<Auth0UserResponse> GetCaller(ClaimsPrincipal principal)
        {
            var claim = principal.FindFirst(ClaimTypes.NameIdentifier);
            if (claim?.Value is null)
            {
                // something
            }

            return await GetUser(claim?.Value);
        }

        public void Dispose()
        {
            _client?.Dispose();
            GC.SuppressFinalize(this);
        }

    }
}
