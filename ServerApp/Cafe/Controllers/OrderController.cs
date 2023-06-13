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
        [Route("/create_order")]
        public async Task<ActionResult<Order>> Create(Order order)
        {
            return Ok(await _orderService.Create(order));
        }

        [HttpGet]
        [Route("/get_order")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            return Ok(await _orderService.Get(id));
        }

        [HttpGet]
        [Route("/get_orders")]
        public async Task<ActionResult<IEnumerable<Order>>> GetAll()
        {
            return Ok(await _orderService.GetAll());
        }

        [HttpPut]
        [Route("/update_order")]
        public async Task<ActionResult<Order>> Update(Order order)
        {
            return Ok(await _orderService.Update(order));
        }

        [HttpDelete]
        [Route("/delete_order")]
        public async Task Delete(int id)
        {
            await _orderService.Delete(id);
        }
    }
}
