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
                .ThenInclude(s => s.Grades)
                .Include(u => u.Classes)
                .ThenInclude(c => c.TermSchedule)
                .FirstOrDefaultAsync(u => u.AuthIdentifier == caller.Id);

            return user.Classes;
        }

        [HttpPost]
        [Authorize]
        public async Task<Class> CreateRoster(Class classs)
        {
            var caller = await _client.GetCaller(User);

            var term = await _context.TermsSchedules
                .Include(t => t.Terms)
                .FirstOrDefaultAsync(o => o.Id == classs.TermSchedule.Id);

            var user = await _context.Users
                .Include(u => u.Classes)
                .ThenInclude(c => c.Students)
                .ThenInclude(s => s.Grades)
                .Include(u => u.Classes)
                .ThenInclude(c => c.TermSchedule)
                .FirstOrDefaultAsync(u => u.AuthIdentifier == caller.Id);

            classs.TermSchedule = term;
            user.Classes.Add(classs);
            await _context.SaveChangesAsync();
            return classs;
        }


        [HttpGet("{id}")]
        [Authorize]
        public async Task<List<Grade>> GetGrades(int id)
        {
            var student = await _context.Students
                .Include(u => u.Grades)
                .FirstOrDefaultAsync(s => s.Id == id);

            return student.Grades;
        }

        [HttpPost("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateGrades(int id, List<Grade> grades)
        {
            var stud = await _context.Students
                .Include(s => s.Grades)
                .FirstOrDefaultAsync(s => s.Id == id);

            foreach (var grade in grades)
            {
                var g = stud.Grades.FirstOrDefault(g => g.BoundTo == grade.BoundTo);

                if (g is null)
                {
                    stud.Grades.Add(grade);
                }
                else
                {
                    g.Value = grade.Value;
                }
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}
