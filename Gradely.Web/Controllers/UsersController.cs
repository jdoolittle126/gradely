using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Gradely.DataAccess.DataAccess;
using Gradely.DataAccess.Models;
using Gradely.Web.Auth;
using Gradely.Web.Auth.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GradelyContext _context;
        private readonly IAuth0Client _client;

        public UsersController(GradelyContext context, IAuth0Client client)
        {
            _context = context;
            _client = client;
        }


        [HttpGet]
        [Authorize("users:view")]
        public async Task<List<Auth0UserListResponse>> GetUsers()
        {
            var caller = await _client.GetCaller(User);

            var userIdList = _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId)
                ?.Users
                .Where(u => !u.IsTenantAdmin && u.AuthIdentifier != caller.Id)
                .Select(u => u.AuthIdentifier)
                .ToList();

            

            List<Auth0UserListResponse> userList = new();

            foreach (var userId in userIdList)
            {
                var user = await _client.GetUser(userId);

                // TODO Get Role
                userList.Add(new Auth0UserListResponse()
                {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Id = user.Id,
                    Role = "Workin' on it!"
                });
            }

            return userList;
        }


        [HttpPost]
        [Authorize("users:create")]
        public async Task<List<Auth0UserListResponse>> CreateUser(CreateUserRequest createUserRequest)
        {

            var caller = await _client.GetCaller(User);

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
                    OrganizationId = caller.MetaData.OrganizationId
                }
            }, role);

            var newUser = new User
            {
                IsTenantAdmin = false,
                AuthIdentifier = user.Id
            };

            _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId)
                ?.Users
                .Add(newUser);

            await _context.SaveChangesAsync();
            return await GetUsers();
        }

        [HttpPut]
        [Authorize("users:edit")]
        public async Task<List<Auth0UserListResponse>> EditUser(CreateUserRequest createUserRequest)
        {

            var caller = await _client.GetCaller(User);

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
                    OrganizationId = caller.MetaData.OrganizationId
                }
            }, role);

            var newUser = new User
            {
                IsTenantAdmin = false,
                AuthIdentifier = user.Id
            };

            _context.Organizations
                .Include(o => o.Users)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId)
                ?.Users
                .Add(newUser);

            await _context.SaveChangesAsync();
            return await GetUsers();
        }

    }
}
