using System.Threading.Tasks;
using RestSharp;
using RestSharp.Authenticators;

namespace Gradely.Web.Auth
{
    public class Auth0Authenticator : AuthenticatorBase
    {
        readonly string _baseUrl;
        readonly string _clientId;
        readonly string _clientSecret;

        public Auth0Authenticator(string baseUrl, string clientId, string clientSecret) : base("")
        {
            _baseUrl = baseUrl;
            _clientId = clientId;
            _clientSecret = clientSecret;
        }

        protected override async ValueTask<Parameter> GetAuthenticationParameter(string accessToken)
        {
            var token = string.IsNullOrEmpty(Token) ? await GetManagementToken() : Token;
            return new HeaderParameter(KnownHeaders.Authorization, token);
        }

        private async Task<string> GetManagementToken()
        {
            var options = new RestClientOptions(_baseUrl);
            using var client = new RestClient(options)
            {
                Authenticator = new HttpBasicAuthenticator(_clientId, _clientSecret)
            };

            var request = new RestRequest("oauth/token")
                .AddParameter("grant_type", "client_credentials");

            var response = await client.PostAsync<TokenResponse>(request);
            return $"{response!.TokenType} {response!.AccessToken}";
        }
    }
}
