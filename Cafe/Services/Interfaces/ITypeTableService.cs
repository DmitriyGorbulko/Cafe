using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Services.Interfaces
{
    public interface ITypeTableService
    {
        Task<TypeTable> Get(int id);
        Task<IEnumerable<TypeTable>> GetAll();
        Task<TypeTable> Create(TypeTable typeTable);
        Task<TypeTable> Update(TypeTable typeTable);
        Task Delete(int id);
    }
}
