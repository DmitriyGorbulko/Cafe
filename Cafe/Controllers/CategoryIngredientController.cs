using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/category_ingredient")]
    [ApiController]
    public class CategoryIngredientController : ControllerBase
    {
        private readonly ICategoryIngredientService _categoryIngredientService;

        public CategoryIngredientController(ICategoryIngredientService categoryIngredientService)
        {
            _categoryIngredientService = categoryIngredientService;
        }

        [HttpPost]
        [Route("/create_category_ingredient")]
        public async Task<ActionResult<CategoryIngredient>> Create(CategoryIngredient categoryIngredient)
        {
            return Ok(await _categoryIngredientService.Create(categoryIngredient));
        }

        [HttpGet]
        [Route("/get_category_ingredient")]
        public async Task<ActionResult<CategoryIngredient>> Get(int id)
        {
            return Ok(await _categoryIngredientService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_category_ingredients")]
        public async Task<ActionResult<IEnumerable<CategoryIngredient>>> GetAll()
        {
            return Ok(await _categoryIngredientService.GetAll());
        }

        [HttpPut]
        [Route("/update_category_ingredient")]
        public async Task<ActionResult<CategoryIngredient>> Update(CategoryIngredient categoryIngredient)
        {
            return Ok(await _categoryIngredientService.Update(categoryIngredient));
        }

        [HttpDelete]
        [Route("/delete_category_ingredient")]
        public async Task Delete(int id)
        {
            await _categoryIngredientService.Delete(id);
        }
    }
}
