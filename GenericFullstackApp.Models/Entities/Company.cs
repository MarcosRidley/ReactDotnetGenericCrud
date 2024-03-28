using GenericFullstackApp.Models.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.Entities
{
    public class Company : BaseEntity
    {
        [Required, MaxLength(30, ErrorMessage = "Company name cannot exceed 30 characters"), MinLength(2, ErrorMessage = "A company name is required")]
        public string Name { get; set; }
        [Required, MinLength(5, ErrorMessage = "A company description is necessary")]
        public string Description { get; set; }
        public ICollection<User> Users { get; set; }

    }
}
