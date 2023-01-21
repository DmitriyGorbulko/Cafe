using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/dish")]
    [ApiController]
    public class DishController : ControllerBase
    {
        private readonly IDishService _dishService;

        public DishController(IDishService dishService)
        {
            _dishService = dishService;
        }

        [HttpPost]
        [Route("/create_dish")]
        public async Task<ActionResult<Dish>> Create(Dish dish)
        {
            return Ok(await _dishService.Create(dish));
        }

        [HttpGet]
        [Route("/get_dish")]
        public async Task<ActionResult<Dish>> Get(int id)
        {
            return Ok(await _dishService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_dishes")]
        public async Task<ActionResult<IEnumerable<Dish>>> GetAll()
        {
            return Ok(await _dishService.GetAll());
        }

        [HttpGet]
        [Route("/get_dish_by_category_id")]
        public async Task<ActionResult<IEnumerable<Dish>>> GetDishByCategoryId(int id)
        {
            return Ok(await _dishService.GetDishByCategoryId(id));
        }

        [HttpPut]
        [Route("/update_dish")]
        public async Task<ActionResult<CategoryIngredient>> Update(Dish dish)
        {
            return Ok(await _dishService.Update(dish));
        }

        [HttpDelete]
        [Route("/delete_dish")]
        public async Task Delete(int id)
        {
            await _dishService.Delete(id);
        }
    }
}

