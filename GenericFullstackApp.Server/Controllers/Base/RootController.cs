using GenericFullstackApp.Server.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace GenericFullstackApp.Server.Controllers.Base
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public abstract class RootController<TEntity, TService, TGetDto, TCreateDto, TUpdateDto> : ControllerBase
    where TEntity : class
    where TService : IService<TEntity, TGetDto, TCreateDto, TUpdateDto>
    where TGetDto : class
    where TCreateDto : class
    where TUpdateDto : class
    {
        protected readonly TService _service;

        protected RootController(TService service)
        {
            _service = service;
        }

        // GET: api/[controller]
        [HttpGet]
        public virtual async Task<ActionResult<IEnumerable<TGetDto>>> GetAll()
        {
            try
            {

                IEnumerable<TGetDto> entities = await _service.GetAll();
                return Ok(entities);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // GET: api/[controller]/{id}
        [HttpGet("{guid}")]
        public virtual async Task<ActionResult<TGetDto>> GetById(Guid guid)
        {
            try
            {
                var entity = await _service.GetById(guid);
                return Ok(entity);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // POST: api/[controller]
        [HttpPost]
        public virtual async Task<ActionResult<TGetDto>> Create(TCreateDto entity)
        {
            try
            {
                await _service.Create(entity);
                return Ok(entity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // PUT: api/[controller]/{id}
        [HttpPut("{guid}")]
        public virtual async Task<IActionResult> Update(Guid guid, TUpdateDto entity)
        {
            try
            {
                var updatedEntity = await _service.Update(guid, entity);
                return Ok(updatedEntity);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // DELETE: api/[controller]/{id}
        [HttpDelete("{guid}")]
        public virtual async Task<IActionResult> Delete(Guid guid)
        {
            try
            {
                await _service.Delete(guid);

                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }

}
