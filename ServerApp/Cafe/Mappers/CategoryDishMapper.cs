using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class CategoryDishMapper : Profile
    {
        public CategoryDishMapper() 
        {
            CreateMap<CategoryDish, CategoryDishGetDTO>()
                .ForMember(x => x.Id, opt => opt.MapFrom(y => y.Id))
                .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
                .ForMember(x => x.Img, opt => opt.MapFrom(y => "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"))
                .ForAllOtherMembers(x => x.Ignore());
            
            CreateMap<CategoryDishAddDTO, CategoryDish>();
            CreateMap<CategoryDishUpdateDTO, CategoryDish>()
                .ForMember(x => x.Title, opt => opt.MapFrom(y => y.Title))
                .ForAllOtherMembers(x => x.Ignore());
        }
    }
}
