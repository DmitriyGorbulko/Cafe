using Cafe.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface ITableRepository
    {
        Task<Table> Get(int id);
        Task<IEnumerable<Table>> GetAll();
        Task<Table> Create(Table table);
        Task<Table> Update(Table table);
        Task Delete(int id);
    }
}
