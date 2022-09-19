using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gradely.DataAccess.DataAccess;
using Gradely.DataAccess.Models;
using Gradely.Web.Auth.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TemplateController : ControllerBase
    {

        private readonly GradelyContext _context;
        private readonly IAuth0Client _client;

        public TemplateController(GradelyContext context, IAuth0Client client)
        {
            _context = context;
            _client = client;
        }

        [HttpGet]
        [Authorize]
        public async Task<List<Template>> GetTemplates()
        {
            var caller = await _client.GetCaller(User);

            var org = _context.Organizations
                .Include(o => o.Templates)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            return org.Templates;
        }

        [HttpPost]
        [Authorize]
        public async Task<Template> CreateTemplates(Template template)
        {
            var caller = await _client.GetCaller(User);

            var org = _context.Organizations
                .Include(o => o.Templates)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            org.Templates.Add(template);
            await _context.SaveChangesAsync();

            return template;
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateTemplates(Template template)
        {
            var caller = await _client.GetCaller(User);

            Console.WriteLine(template);
            Console.WriteLine(template.Name);
            Console.WriteLine(template.Data);

            var org = _context.Organizations
                .Include(o => o.Templates)
                .FirstOrDefault(o => o.Id == caller.MetaData.OrganizationId);

            var tempy = org.Templates.SingleOrDefault(t => t.Id == template.Id);

            if (tempy != null)
            {
                tempy.Data = template.Data;
                tempy.Name = template.Name;
                await _context.SaveChangesAsync();
            }

            return NoContent();
        }




    }
}
