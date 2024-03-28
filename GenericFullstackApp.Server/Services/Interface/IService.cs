namespace GenericFullstackApp.Server.Services.Interface
{
    public interface IService<TEntity, TGetDto, TCreateDto, TUpdateDto>
    {
        Task<IEnumerable<TGetDto>> GetAll();
        Task<TGetDto> GetById(Guid guid);
        Task<TGetDto> Create(TCreateDto entity);
        Task<TGetDto> Update(Guid guid, TUpdateDto entity);
        Task Delete(Guid guid);
    }
}
