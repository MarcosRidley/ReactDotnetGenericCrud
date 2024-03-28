namespace GenericFullstackApp.Server.Repositories.Interface
{
    public interface IRepository<T>
    {
        Task<T> GetAsync(Guid guid);
        Task<IEnumerable<T>> GetAllAsync();
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task SaveChangesAsync();
    }
}
