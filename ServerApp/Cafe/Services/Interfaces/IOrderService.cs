using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface IOrderService
    {
        Task<Order> Get(int id);
        Task<IEnumerable<Order>> GetAll();
        Task<Order> Create(Order order);
        Task<Order> Update(Order order);
        Task Delete(int id);
    }
}
