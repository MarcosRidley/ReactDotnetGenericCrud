using GenericFullstackApp.Models.Entities;
using GenericFullstackApp.Models.RequestDTO.Company;
using GenericFullstackApp.Server.Controllers.Base;
using GenericFullstackApp.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GenericFullstackApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : RootController<Company, CompanyService, CompanyGetDto, CompanyCreateDTO, CompanyUpdateDTO>
    {
        public CompanyController(CompanyService service) : base(service)
        {
        }
    }
}
