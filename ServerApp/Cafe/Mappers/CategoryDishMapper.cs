using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class CategoryDishMapper : Profile
    {
        public CategoryDishMapper() 
        {
            CreateMap<CategoryDish, CategoryDishGetDTO>();
            CreateMap<CategoryDishAddDTO, CategoryDish>();
            CreateMap<CategoryDishUpdateDTO, CategoryDish>()
                .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
                .ForAllMembers(x => x.Ignore());
        }
    }
}
