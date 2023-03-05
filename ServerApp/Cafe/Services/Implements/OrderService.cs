using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderService;

        public OrderService(IOrderRepository orderService)
        {
            _orderService = orderService;
        }

        public async Task<Order> Create(Order order)
        {
            return await _orderService.Create(order);
        }

        public async Task Delete(int id)
        {
            await _orderService.Delete(id);
        }

        public async Task<Order> Get(int id)
        {
            return await (_orderService.Get(id));
        }

        public async Task<IEnumerable<Order>> GetAll()
        {
            return await _orderService.GetAll();
        }

        public async Task<Order> Update(Order order)
        {
            return await _orderService.Update(order);
        }
    }
}
