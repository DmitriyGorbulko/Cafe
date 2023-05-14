using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/ingredient")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        [HttpPost]
        [Route("/create_ingredient")]
        public async Task<ActionResult<Ingredient>> Create(IngredientAddDTO ingredient)
        {
            return Ok(await _ingredientService.Create(ingredient));
        }

        [HttpGet]
        [Route("/get_ingredient")]
        public async Task<ActionResult<IngredientGetDTO>> Get(int id)
        {
            return Ok(await _ingredientService.Get(id));
        }

        [HttpGet]
        [Route("/get_ingredients")]
        public async Task<ActionResult<IngredientGetDTO>> GetAll()
        {
            return Ok(await _ingredientService.GetAll());
        }

        [HttpGet]
        [Route("/get_ingredients_by_category_ingredient_id")]
        public async Task<ActionResult<IngredientGetDTO>> GetIngredientsByCategoryIngredientId(int id)
        {
            return Ok(await _ingredientService.GetIngredientsByCategoryIngredientId(id));
        }

        [HttpPut]
        [Route("/update_ingredient")]
        public async Task<ActionResult<Ingredient>> Update(IngredientUpdateDTO ingredientUpdateDTO)
        {
            return Ok(await _ingredientService.Update(ingredientUpdateDTO));
        }

        [HttpDelete]
        [Route("/delete_ingredient")]
        public async Task Delete(int id)
        {
            await _ingredientService.Delete(id);
        }
    }
}
