using Cafe.DTO;
using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ITypeTableService
    {
        Task<TypeTableGetDTO> Get(int id);
        Task<IEnumerable<TypeTable>> GetAll();
        Task<TypeTable> Create(TypeTableAddDTO typeTableAddDTO);
        Task<TypeTable> Update(TypeTableUpdateDTO typeTableUpdateDTO);
        Task Delete(int id);
    }
}
