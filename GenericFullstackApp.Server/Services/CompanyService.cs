using AutoMapper;
using GenericFullstackApp.Models.Entities;
using GenericFullstackApp.Models.RequestDTO.Company;
using GenericFullstackApp.Server.Repositories.Interface;
using GenericFullstackApp.Server.Services.Base;

namespace GenericFullstackApp.Server.Services
{
    public class CompanyService : RootService<Company, CompanyGetDto, CompanyCreateDTO, CompanyUpdateDTO>
    {
        public CompanyService(IRepository<Company> repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}
