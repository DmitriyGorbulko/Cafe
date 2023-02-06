using AutoMapper;
using Cafe.DTO;
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
        private readonly IMapper _mapper;

        public DishService(IDishRepository dishRepository, IMapper mapper)
        {
            _dishRepository = dishRepository;
            _mapper = mapper;
        }

        public async Task<Dish> Create(DishAddDTO dishDTO)
        {
            var dish = _mapper.Map<Dish>(dishDTO);
            return await _dishRepository.Create(dish);
        }

        public async Task Delete(int id)
        {
            await _dishRepository.Delete(id);
        }

        public async Task<DishGetDTO> Get(int id)
        {
            var dish = await _dishRepository.Get(id);
            return _mapper.Map<DishGetDTO>(dish);
        }

        public async Task<IEnumerable<Dish>> GetAll()
        {
            return await _dishRepository.GetAll();
        }

        public async Task<IEnumerable<DishGetDTO>> GetDishByCategoryId(int id)
        {
            var dishList = await _dishRepository.GetDishByCategoryId(id);
            return _mapper.Map<IEnumerable<DishGetDTO>>(dishList);
        }

        public async Task<Dish> Update(DishUpdateDTO dishDTO)
        {
            var dish = _mapper.Map<Dish>(dishDTO);
            return await _dishRepository.Update(dish);
        }
    }
}
