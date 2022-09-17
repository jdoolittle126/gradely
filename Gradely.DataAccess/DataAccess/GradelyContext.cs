using Gradely.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Gradely.DataAccess.DataAccess
{
    public class GradelyContext : DbContext
    {

        public GradelyContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Class> Classes { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Template> Templates { get; set; }
        public DbSet<Term> Terms { get; set; }
        public DbSet<TermSchedule> TermsSchedules { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
