using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class PersonMapper : Profile
    {
        public PersonMapper() 
        {
            CreateMap<PersonAuthDTO, Person>();
        }
    }
}
