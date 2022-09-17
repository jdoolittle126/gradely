using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Gradely.DataAccess.DataAccess;
using Gradely.DataAccess.Models;
using Gradely.Web.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using RestSharp.Portable;
using Gradely.Web.Auth.Interfaces;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {
        private readonly IAuth0Client _client;
        private readonly GradelyContext _context;

        public OrganizationsController(GradelyContext context, IAuth0Client client)
        {
            _context = context;
            _client = client;
        }

        // GET: api/Organizations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organization>>> GetOrganizations()
        {
            return await _context
                .Organizations
                .Include(o => o.Users)
                .Include(o => o.TermSchedules)
                .Include(o => o.Templates)
                .ToListAsync();
        }

        // GET: api/Organizations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Organization>> GetOrganization(int id)
        {
            var organization = await _context.Organizations.FindAsync(id);

            if (organization == null)
            {
                return NotFound();
            }

            return organization;
        }

        [HttpGet("{id}/Users")]
        [Authorize("users:view")]
        public async Task<List<Auth0UserResponse>> GetUsers(int id)
        {

            var test = User.Identities;

            var userIdList = _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefault(o => o.Id == id)
                ?.Users
                .Where(u => !u.IsTenantAdmin)
                .Select(u => u.AuthIdentifier)
                .ToList();

            List<Auth0UserResponse> userList = new();

            foreach (var userId in userIdList)
            {
                var user = await _client.GetUser(userId);
                userList.Add(user);
            }

            return userList;
        }

        [HttpPost("{id}/Users")]
        [Authorize("users:create")]
        public async Task<IActionResult> CreateUserInOrganization(int id, CreateUserRequest createUserRequest)
        {

            var role = createUserRequest.Role switch
            {
                1 => RoleType.Admin,
                _ => RoleType.Teacher
            };

            var user = await _client.CreateUser(new Auth0UserRequest()
            {
                Email = createUserRequest.Email,
                FirstName = createUserRequest.FirstName,
                LastName = createUserRequest.LastName,
                Password = createUserRequest.Password1,
                Connection = "Username-Password-Authentication",
                MetaData = new Auth0UserAppMetaData()
                {
                    OrganizationId = id
                }
            }, role);

            var newUser = new User
            {
                IsTenantAdmin = false,
                AuthIdentifier = user.Id
            };

            _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefault(o => o.Id == id)
                ?.Users
                .Add(newUser);

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // POST: Create Organization and Admin User
        [HttpPost]
        public async Task<IActionResult> PostOrganization(RegistrationRequest registrationRequest)
        {

            var organization = new Organization()
            {
                Name = registrationRequest.OrganizationName,
                Address1 = registrationRequest.OrganizationAddress1,
                Address2 = registrationRequest.OrganizationAddress2,
                City = registrationRequest.OrganizationCity,
                ZipCode = registrationRequest.OrganizationZipCode,
                Phone = registrationRequest.OrganizationPhone
            };

            _context.Organizations.Add(organization);

            await _context.SaveChangesAsync();


            var user = await _client.CreateUser(new Auth0UserRequest()
            {
                Email = registrationRequest.Email,
                FirstName = registrationRequest.FirstName,
                LastName = registrationRequest.LastName,
                Password = registrationRequest.Password1,
                Connection = "Username-Password-Authentication",
                MetaData = new Auth0UserAppMetaData()
                {
                    OrganizationId = organization.Id
                }
            }, RoleType.TenantAdmin);


            var adminUser = new User
            {
                IsTenantAdmin = true,
                AuthIdentifier = user.Id
            };

            organization.Users.Add(adminUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}
