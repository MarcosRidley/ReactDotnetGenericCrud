using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.RequestDTO.Company
{
    public class CompanyUpdateDTO
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "A company name is required"), MaxLength(30, ErrorMessage = "Company name cannot exceed 30 characters"), MinLength(2, ErrorMessage = "The company name must be at least 2 characters long.")]
        public string Name { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "A company description is necessary"), MinLength(5, ErrorMessage = "The company description should have at least 5 characters.")]
        public string Description { get; set; }
    }
}
