using GenericFullstackApp.Models.Entities.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.Entities
{
    public class User : BaseEntity
    {
        [Required,MaxLength(30, ErrorMessage = "Username cannot exceed 30 characters")]
        public string UserName { get; set; }
        public string Password { get; set; }
        [EmailAddress]
        [Required, MaxLength(120)]
        public string Email { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public Company Company { get; set; }
    }
}
