using Cafe.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface IDishService
    {
        Task<Dish> Create(Dish dish);

        Task<Dish> Get(int id);

        Task<IEnumerable<Dish>> GetAll();

        Task<Dish> Update(Dish dish);

        Task Delete(int id);

        Task<IEnumerable<Dish>> GetDishByCategoryId(int id);
    }
}
