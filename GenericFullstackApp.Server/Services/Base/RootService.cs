using AutoMapper;
using GenericFullstackApp.Models.Entities.Base;
using GenericFullstackApp.Server.Repositories.Interface;
using GenericFullstackApp.Server.Services.Interface;

namespace GenericFullstackApp.Server.Services.Base
{
    public abstract class RootService<TEntity, TGetDto, TCreateDto, TUpdateDto> : IService<TEntity, TGetDto, TCreateDto, TUpdateDto>
        where TEntity : BaseEntity
        where TGetDto : class
        where TCreateDto : class
        where TUpdateDto : class
    {
        protected readonly IMapper _mapper;
        protected readonly IRepository<TEntity> _repository;

        protected RootService(IRepository<TEntity> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public virtual async Task<IEnumerable<TGetDto>> GetAll()
        {
            IEnumerable<TEntity> entities = await _repository.GetAllAsync();
            return entities.Select(entity => _mapper.Map<TGetDto>(entity));
        }

        public virtual async Task<TGetDto> GetById(Guid guid)
        {
            TEntity entity = await _repository.GetAsync(guid) ?? throw new KeyNotFoundException("Entidade não encontrada para este ID");
            return _mapper.Map<TGetDto>(entity);
        }

        public virtual async Task<TGetDto> Create(TCreateDto dto)
        {
            TEntity entity = _mapper.Map<TEntity>(dto);
            await _repository.AddAsync(entity);
            await _repository.SaveChangesAsync();
            return _mapper.Map<TGetDto>(entity);
        }

        public virtual async Task<TGetDto> Update(Guid guid, TUpdateDto dto)
        {
            TEntity entity = await _repository.GetAsync(guid) ?? throw new KeyNotFoundException("Entidade não encontrada para este ID");

            _mapper.Map(dto, entity); 
            await _repository.SaveChangesAsync();
            return _mapper.Map<TGetDto>(entity);
        }

        public virtual async Task Delete(Guid guid)
        {
            TEntity entity = await _repository.GetAsync(guid) ?? throw new KeyNotFoundException("Entidade não encontrada para este ID");

            await _repository.DeleteAsync(entity);
            await _repository.SaveChangesAsync();
        }
    }
}
