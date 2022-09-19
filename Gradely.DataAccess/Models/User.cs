using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gradely.DataAccess.Models
{
    public class User
    {
        public int Id { get; set; }
        public string AuthIdentifier { get; set; }
        public bool IsTenantAdmin { get; set; }
        public List<Class> Classes { get; set; } = new List<Class>();

    }
}
