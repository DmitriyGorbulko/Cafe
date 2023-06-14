using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class DishMapper : Profile
    {
        public DishMapper()
        {
            CreateMap<Dish, DishGetDTO>()
                .ForMember(x => x.Id, opt => opt.MapFrom(y => y.Id))
                .ForMember(x => x.Description, opt => opt.MapFrom(y => y.Description))
                .ForMember(x => x.Ingredients, opt => opt.MapFrom(y => y.Ingredients))
                .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
                .ForMember(x => x.Img, opt => opt.MapFrom(y => !string.IsNullOrEmpty(y.Img)? y.Img :"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"))
                .ForMember(x => x.CategoryName, opt => opt.MapFrom(y => y.CategoryDishId != null ? y.CategoryDish.Title : "N/A"))
                .ForAllOtherMembers(x => x.Ignore());

            CreateMap<DishAddDTO, Dish>()
                .ForMember(x => x.Description, opt => opt.MapFrom(y => y.Description))
                .ForMember(x => x.Img, opt => opt.MapFrom(y => !string.IsNullOrEmpty(y.Img)? y.Img : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"))
                .ForMember(x => x.Recipe, opt => opt.MapFrom(y => y.Recipe))
                .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
                .ForMember(x => x.CategoryDishId, opt => opt.MapFrom(y => y.CAtegoryDishId))
                .ForAllOtherMembers(x => x.Ignore());

            CreateMap<DishUpdateDTO, Dish>()
                .ForMember(x => x.Description, opt => opt.MapFrom(y => y.Description))
                .ForMember(x => x.Recipe, opt => opt.MapFrom(y => y.Recipe))
                .ForMember(x => x.Img, opt => opt.MapFrom(y => !string.IsNullOrEmpty(y.Img)? y.Img : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"))
                .ForAllOtherMembers(x => x.Ignore());
        }
    }
}
