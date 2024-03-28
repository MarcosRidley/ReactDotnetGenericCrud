using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.RequestDTO.Company
{
    public class CompanyGetDto
    {
        public Guid Guid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
