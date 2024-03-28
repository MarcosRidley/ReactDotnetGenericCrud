using GenericFullstackApp.Models.Entities.Base;
using GenericFullstackApp.Server.Configuration;
using GenericFullstackApp.Server.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace GenericFullstackApp.Server.Repositories.Base
{
    public abstract class RootRepository<TEntity> : IRepository<TEntity>
        where TEntity : BaseEntity
    {
        private readonly MyDbContext _context;

        protected RootRepository(MyDbContext context)
        {
            _context = context;
        }

        public async Task<TEntity> GetAsync(Guid guid)
        {
            return await _context.Set<TEntity>().Where(entity => entity.Guid == guid).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public async Task AddAsync(TEntity entity)
        {
            await _context.AddAsync(entity);
        }

        public async Task UpdateAsync(TEntity entity)
        {
            _context.Update(entity);
        }

        public async Task DeleteAsync(TEntity entity)
        {
            _context.Remove(entity);
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
