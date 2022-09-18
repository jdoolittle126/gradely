using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gradely.DataAccess.DataAccess;
using Gradely.DataAccess.Models;
using Gradely.Web.Auth;
using Gradely.Web.Auth.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RostersController : ControllerBase
    {
        private readonly GradelyContext _context;
        private readonly IAuth0Client _client;

        public RostersController(GradelyContext context, IAuth0Client client)
        {
            _context = context;
            _client = client;
        }

        [HttpGet]
        [Authorize]
        public async Task<List<Class>> GetRosters()
        {
            var caller = await _client.GetCaller(User);

            var user = await _context.Users
                .Include(u => u.Classes)
                .ThenInclude(c => c.Students)
                .Include(u => u.Classes)
                .ThenInclude(c => c.TermSchedule)
                .FirstOrDefaultAsync(u => u.AuthIdentifier == caller.Id);

            return user.Classes;
        }


    }
}
