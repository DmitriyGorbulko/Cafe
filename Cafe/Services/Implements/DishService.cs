using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Cafe.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Services.Implements
{
    public class DishService : IDishService
    {
        private readonly IDishRepository _dishRepository;

        public DishService(IDishRepository dishRepository)
        {
            _dishRepository = dishRepository;
        }

        public async Task<Dish> Create(Dish dish)
        {
            return await _dishRepository.Create(dish);
        }

        public async Task Delete(int id)
        {
            await _dishRepository.Delete(id);
        }

        public async Task<Dish> Get(int id)
        {
            return await _dishRepository.Get(id);
        }

        public async Task<IEnumerable<Dish>> GetAll()
        {
            return await _dishRepository.GetAll();
        }

        public async Task<Dish> Update(Dish dish)
        {
            return await _dishRepository.Update(dish);
        }
    }
}
