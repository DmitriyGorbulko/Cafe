using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CategoryIngredientController : ControllerBase
    {
        private readonly ICategoryIngredientService _categoryIngredientService;

        public CategoryIngredientController(ICategoryIngredientService categoryIngredientService)
        {
            _categoryIngredientService = categoryIngredientService;
        }

        [HttpPost]
        [Route(nameof(Create))]
        public async Task<ActionResult<CategoryIngredient>> Create(CategoryIngredient categoryIngredient)
        {
            return Ok(await _categoryIngredientService.Create(categoryIngredient));
        }

        [HttpGet]
        [Route(nameof(Get) + "/{id}")]
        public async Task<ActionResult<CategoryIngredient>> Get(int id)
        {
            return Ok(await _categoryIngredientService.Get(id));
        }

        [HttpGet]
        [Route(nameof(GetAll))]
        public async Task<ActionResult<IEnumerable<CategoryIngredient>>> GetAll()
        {
            return Ok(await _categoryIngredientService.GetAll());
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult<CategoryIngredient>> Update(CategoryIngredient categoryIngredient)
        {
            return Ok(await _categoryIngredientService.Update(categoryIngredient));
        }

        [HttpDelete]
        [Route(nameof(Delete))]
        public async Task Delete(int id)
        {
            await _categoryIngredientService.Delete(id);
        }
    }
}
