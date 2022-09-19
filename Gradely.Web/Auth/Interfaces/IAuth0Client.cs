using System.Security.Claims;
using System.Threading.Tasks;

namespace Gradely.Web.Auth.Interfaces
{
    public interface IAuth0Client
    {
        Task<Auth0UserResponse> GetUser(string id);
        Task<Auth0User> CreateUser(Auth0UserRequest user, RoleType role);
        Task<Auth0UserResponse> GetCaller(ClaimsPrincipal principal);
    }
}
