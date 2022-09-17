using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gradely.DataAccess.Models
{
    public class Organization
    {
        public int Id { get; set; }
        [Required] [MaxLength(256)]
        public string Name { get; set; } = "";
        [MaxLength(256)]
        public string Address1 { get; set; } = "";
        [MaxLength(256)]
        public string Address2 { get; set; } = "";
        [MaxLength(256)]
        public string City { get; set; } = "";
        [MaxLength(256)]
        public string State { get; set; } = "";
        [MaxLength(12)]
        public string ZipCode { get; set; } = "";
        [MaxLength(25)]
        [Column(TypeName = "varchar(25)")]
        public string Phone { get; set; } = "";
        public List<User> Users { get; set; } = new List<User>();
        public List<Template> Templates { get; set; } = new List<Template>();
        public List<TermSchedule> TermSchedules { get; set; } = new List<TermSchedule>();

    }
}
