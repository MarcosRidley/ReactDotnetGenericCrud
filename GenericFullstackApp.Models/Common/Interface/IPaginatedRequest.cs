using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericFullstackApp.Models.Common.Interface
{
    public interface IPaginatedRequest
    {
        int PageIndex { get; set; }
        int PageSize { get; set; }
    }
}
