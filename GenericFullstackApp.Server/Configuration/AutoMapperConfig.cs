using AutoMapper;
using GenericFullstackApp.Models.Entities;
using GenericFullstackApp.Models.RequestDTO.Company;

namespace GenericFullstackApp.Server.Configuration
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            #region Company
            CreateMap<Company, CompanyGetDto>();
            CreateMap<CompanyCreateDTO, Company>();
            CreateMap<CompanyUpdateDTO, Company>();
            #endregion
        }
    }
}
