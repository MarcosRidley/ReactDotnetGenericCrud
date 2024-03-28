using GenericFullstackApp.Models.Entities;
using GenericFullstackApp.Server.Configuration;
using GenericFullstackApp.Server.Repositories.Base;

namespace GenericFullstackApp.Server.Repositories
{
    public class CompanyRepository : RootRepository<Company>
    {
        public CompanyRepository(MyDbContext context) : base(context)
        {
        }
    }
}
