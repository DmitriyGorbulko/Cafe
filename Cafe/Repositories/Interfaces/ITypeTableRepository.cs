using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface ITypeTableRepository
    {
        Task<TypeTable> Get(int id);
        Task<IEnumerable<TypeTable>> GetAll();
        Task<TypeTable> Create(TypeTable typeTable);
        Task<TypeTable> Update(TypeTable typeTable);
        Task Delete(int id);
    }
}
