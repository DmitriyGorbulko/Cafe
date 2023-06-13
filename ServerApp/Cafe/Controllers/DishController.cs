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
        [Route(nameof(Create))]
        public async Task<ActionResult<Dish>> Create(DishAddDTO dish)
        {
            return Ok(await _dishService.Create(dish));
        }

        [HttpGet]
        [Route(nameof(Get)+ "/{id}")]
        public async Task<ActionResult<DishGetDTO>> Get([FromRoute]int id)
        {
            return Ok(await _dishService.Get(id));
        }

        [HttpGet]
        [Route(nameof(GetAll))]
        public async Task<ActionResult<IEnumerable<Dish>>> GetAll()
        {
            return Ok(await _dishService.GetAll());
        }

        [HttpGet(nameof(GetDishByCategoryId) +"/{id}")]
        public async Task<ActionResult<IEnumerable<DishGetDTO>>> GetDishByCategoryId(int id)
        {
            return Ok(await _dishService.GetDishByCategoryId(id));
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult<Dish>> Update(DishUpdateDTO dish)
        {
            return Ok(await _dishService.Update(dish));
        }

        [HttpDelete]
        [Route(nameof(Delete) + "/{id}")]
        public async Task Delete(int id)
        {
            await _dishService.Delete(id);
        }
    }
}

