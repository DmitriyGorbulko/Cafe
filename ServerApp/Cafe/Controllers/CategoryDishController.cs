using Cafe.DTO;
using Cafe.Entity;
using Cafe.Services.Implements;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CategoryDishController : ControllerBase
    {
        private readonly ICategoryDishService _categoryDishService;

        public CategoryDishController(ICategoryDishService categoryDishService)
        {
            _categoryDishService = categoryDishService;
        }


        [HttpPost]
        [Route(nameof(Create))]
        public async Task<ActionResult<CategoryDish>> Create(CategoryDishAddDTO categoryDish)
        {
            return Ok(await _categoryDishService.Create(categoryDish));
        }

        [HttpGet]
        [Route(nameof(Get) + "/{id}")]
        public async Task<ActionResult<CategoryDishGetDTO>> Get([FromRoute]int id)
        {
            return Ok(await _categoryDishService.Get(id));
        }

        [HttpGet]
        [Authorize]
        [Route(nameof(GetAll))]
        public async Task<ActionResult<IEnumerable<CategoryDishGetDTO>>> GetAll()
        {
            return Ok(await _categoryDishService.GetAll());
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult<CategoryDish>> Update(CategoryDish categoryDish)
        {
            return Ok(await _categoryDishService.Update(categoryDish));
        }

        [HttpDelete]
        [Route(nameof(Delete))]
        public async Task Delete(int id)
        {
            await _categoryDishService.Delete(id);
        }
    }
}
