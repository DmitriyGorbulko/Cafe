using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface IDishRepository : IRepositoryBase<Dish>
    {
        Task<IEnumerable<Dish>> GetDishByCategoryId (int id);
    }
}
