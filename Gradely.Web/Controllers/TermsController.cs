using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Gradely.DataAccess.DataAccess;
using Gradely.DataAccess.Models;
using Gradely.Web.Auth.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TermsController : ControllerBase
    {

        private readonly GradelyContext _context;
        private readonly IAuth0Client _client;

        public TermsController(GradelyContext context, IAuth0Client client)
        {
            _context = context;
            _client = client;
        }


        [HttpGet]
        [Authorize]
        public async Task<List<TermSchedule>> GetTerms()
        {
            var caller = await _client.GetCaller(User);

            var org = _context.Organizations
                .Include(o => o.Users)
                .Include(o => o.TermSchedules)
                .ThenInclude(t => t.Terms)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            return org.TermSchedules;
        }


        [HttpGet("{id}")]
        [Authorize]
        public async Task<TermSchedule> GetTerm(int id)
        {

            var caller = await _client.GetCaller(User);

            var org = _context.Organizations
                .Include(o => o.TermSchedules)
                .ThenInclude(t => t.Terms)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            return org.TermSchedules.FirstOrDefault(x => x.Id == id);

        }




        [HttpPost]
        [Authorize]
        public async Task<List<TermSchedule>> CreateTerm(TermSchedule schedule)
        {

            var caller = await _client.GetCaller(User);

            var org = _context.Organizations
                .Include(o => o.Users)
                .Include(o => o.TermSchedules)
                .ThenInclude(t => t.Terms)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            org.TermSchedules.Add(schedule);
            await _context.SaveChangesAsync();
            return org.TermSchedules;
        }


    }
}
