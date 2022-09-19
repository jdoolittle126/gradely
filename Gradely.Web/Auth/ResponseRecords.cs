using System.Text.Json.Serialization;

namespace Gradely.Web.Auth
{
    public enum RoleType
    {
        TenantAdmin,
        Admin,
        Teacher
    }


    public record Auth0UserListResponse
    {
        public string Id { get; set; }
        public string Email { get; init; }
        public string FirstName { get; init; }
        public string LastName { get; init; }
        public string Role { get; init; }
    }

    public record Auth0UserResponse
    {
        [JsonPropertyName("user_id")]
        public string Id { get; set; }
        [JsonPropertyName("email")]
        public string Email { get; init; }
        [JsonPropertyName("given_name")]
        public string FirstName { get; init; }
        [JsonPropertyName("family_name")]
        public string LastName { get; init; }
        [JsonPropertyName("app_metadata")]
        public Auth0UserAppMetaData MetaData { get; init; }
    }

    public record Auth0UserAppMetaData
    {
        public int OrganizationId { get; set; }
    }

    public record Auth0UserRequest
    {
        [JsonPropertyName("email")]
        public string Email { get; init; }
        [JsonPropertyName("given_name")]
        public string FirstName { get; init; }
        [JsonPropertyName("family_name")]
        public string LastName { get; init; }
        [JsonPropertyName("password")]
        public string Password { get; init; }
        [JsonPropertyName("connection")]
        public string Connection {get; init; }
        [JsonPropertyName("app_metadata")]
        public Auth0UserAppMetaData MetaData { get; init; }
    }

    public record Auth0User
    {
        [JsonPropertyName("user_id")]
        public string Id { get; init; }
        [JsonPropertyName("email")]
        public string Email { get; init; }
        [JsonPropertyName("given_name")]
        public string FirstName { get; init; }
        [JsonPropertyName("family_name")]
        public string LastName { get; init; }
        [JsonPropertyName("password")]
        public string Password { get; init; }
        [JsonPropertyName("connection")]
        public string Connection = "Username-Password-Authentication";
    }

    public record TokenResponse
    {
        [JsonPropertyName("access_token")]
        public string AccessToken { get; init; }
        [JsonPropertyName("expires_in")]
        public int ExpiresIn { get; init; }
        [JsonPropertyName("scope")]
        public string Scope { get; init; }
        [JsonPropertyName("token_type")]
        public string TokenType { get; init; }
    }
    public record CreateUserRequest
    {
        [JsonPropertyName("first_name")]
        public string FirstName { get; init; }
        [JsonPropertyName("last_name")]
        public string LastName { get; init; }
        [JsonPropertyName("email")]
        public string Email { get; init; }
        [JsonPropertyName("password1")]
        public string Password1 { get; init; }
        [JsonPropertyName("password2")]
        public string Password2 { get; init; }
        [JsonPropertyName("role")]
        public int Role { get; init; }
    }


    public record RegistrationRequest
    {
        [JsonPropertyName("organization_name")]
        public string OrganizationName { get; init; }
        [JsonPropertyName("organization_address1")]
        public string OrganizationAddress1 { get; init; }
        [JsonPropertyName("organization_address2")]
        public string OrganizationAddress2 { get; init; }
        [JsonPropertyName("organization_city")]
        public string OrganizationCity { get; init; }
        [JsonPropertyName("organization_state")]
        public string OrganizationState { get; init; }
        [JsonPropertyName("organization_zipcode")]
        public string OrganizationZipCode { get; init; }
        [JsonPropertyName("organization_phone")]
        public string OrganizationPhone { get; init; }

        [JsonPropertyName("first_name")]
        public string FirstName { get; init; }
        [JsonPropertyName("last_name")]
        public string LastName { get; init; }
        [JsonPropertyName("email")]
        public string Email { get; init; }
        [JsonPropertyName("password1")]
        public string Password1 { get; init; }
        [JsonPropertyName("password2")]
        public string Password2 { get; init; }
    }
}
