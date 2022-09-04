using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gradely.DataAccess.Models
{
    public class Template
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(256)]
        public string Name { get; set; }
        public User CreatedBy { get; set; }
        public User? ModifiedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Data { get; set; }

    }
}
