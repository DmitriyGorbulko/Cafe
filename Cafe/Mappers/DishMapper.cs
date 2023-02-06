using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class DishMapper : Profile
    {
        public DishMapper()
        {
            CreateMap<Dish, DishGetDTO>();
            CreateMap<DishAddDTO, Dish>();
            CreateMap<DishUpdateDTO, Dish>();
        }
    }
}
