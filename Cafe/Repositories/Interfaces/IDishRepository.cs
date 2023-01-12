using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface IDishRepository
    {
        Task< Dish> Get(int id);
        Task<IEnumerable<Dish>> GetAll();
        Task<Dish> Create(Dish dish);
        Task<Dish> Update(Dish dish);
        Task Delete(int id);
        Task<IEnumerable<Dish>> GetDishByCategoryId (int id);
    }
}
