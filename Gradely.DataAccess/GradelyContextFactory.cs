using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gradely.DataAccess.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Gradely.DataAccess
{
    public class GradelyContextFactory : IDesignTimeDbContextFactory<GradelyContext>
    {
        public GradelyContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<GradelyContext>();
            // TODO Move to config, add args parser for env!
            optionsBuilder.UseSqlServer(
                "Data Source=JON-DESKTOP;Initial Catalog=GRADELY_DEV;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

            return new GradelyContext(optionsBuilder.Options);
        }
    }
}
