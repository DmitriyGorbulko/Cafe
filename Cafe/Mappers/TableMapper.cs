using AutoMapper;
using Cafe.DTO;
using Cafe.Entity;

namespace Cafe.Mappers
{
    public class TableMapper : Profile
    {
        public TableMapper()
        {
            CreateMap<Table, TableGetDTO>();
            CreateMap<TableAddDTO, Table>();
            CreateMap<TableUpdateDTO, Table>();
        }        
    }
}
