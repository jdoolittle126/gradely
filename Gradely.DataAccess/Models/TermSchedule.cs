using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gradely.DataAccess.Models
{
    public class TermSchedule
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(256)]
        public string Name { get; set; }
        public List<Term> Terms { get; set; } = new List<Term>();

    }
}
