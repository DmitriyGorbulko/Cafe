using Cafe.Entity;
using Cafe.Services.Implements;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        [Route(nameof(Create))]
        public async Task<ActionResult<Order>> Create(Order order)
        {
            return Ok(await _orderService.Create(order));
        }

        [HttpGet]
        [Route(nameof(Get) + "/{id}")]
        public async Task<ActionResult<Order>> Get([FromRoute]int id)
        {
            return Ok(await _orderService.Get(id));
        }

        [HttpGet]
        [Route(nameof(GetAll))]
        public async Task<ActionResult<IEnumerable<Order>>> GetAll()
        {
            return Ok(await _orderService.GetAll());
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult<Order>> Update(Order order)
        {
            return Ok(await _orderService.Update(order));
        }

        [HttpDelete]
        [Route(nameof(Delete) + "/{id}")]
        public async Task Delete([FromRoute]int id)
        {
            await _orderService.Delete(id);
        }
    }
}
