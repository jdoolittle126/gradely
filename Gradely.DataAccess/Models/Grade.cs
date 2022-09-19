using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gradely.DataAccess.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public string BoundTo { get; set; }
        public string Value { get; set; }
    }
}
