using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface IRepositoryBase <T> where T : class
    {
        Task<T> Get(int id);
        Task<IEnumerable<T>> GetAll();
        Task<T> Create(T entity);
        Task<T> Update(T entity);
        Task Delete(int id);
    }
}
