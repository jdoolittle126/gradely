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
        [Required]
        [MaxLength(256)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(256)]
        public string LastName { get; set; }
        [MaxLength(256)]
        public string Email { get; set; }
        [MaxLength(1028)]
        public string PasswordHashed { get; set; }
        [MaxLength(1028)]
        public string PasswordSalt { get; set; }
        public DateTime LastLoginDate { get; set; }
        [MaxLength(256)]
        public string ExternalIdentifyProvider { get; set; }
        [MaxLength(1028)]
        public string ExternalIdentityToken { get; set; }
        public bool IsTenantAdmin { get; set; }
        public List<Privilege> Privileges { get; set; } = new List<Privilege>();
        public List<Class> Classes { get; set; } = new List<Class>();

    }
}
