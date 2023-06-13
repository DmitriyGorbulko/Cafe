using Cafe.DTO;
using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class DishController : ControllerBase
    {
        private readonly IDishService _dishService;

        public DishController(IDishService dishService)
        {
            _dishService = dishService;
        }

        [HttpPost]
        [Route("/create_dish")]
        public async Task<ActionResult<Dish>> Create(DishAddDTO dish)
        {
            return Ok(await _dishService.Create(dish));
        }

        [HttpGet]
        [Route("/get_dish")]
        public async Task<ActionResult<DishGetDTO>> Get(int id)
        {
            return Ok(await _dishService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_dishes")]
        public async Task<ActionResult<IEnumerable<Dish>>> GetAll()
        {
            return Ok(await _dishService.GetAll());
        }

        [HttpGet("get_dish_by_category_id/{id}")]
        public async Task<ActionResult<IEnumerable<DishGetDTO>>> GetDishByCategoryId(int id)
        {
            return Ok(await _dishService.GetDishByCategoryId(id));
        }

        [HttpPut]
        [Route("/update_dish")]
        public async Task<ActionResult<Dish>> Update(DishUpdateDTO dish)
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

