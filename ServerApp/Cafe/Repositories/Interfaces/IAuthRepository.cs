using Cafe.Entity;
using System.Threading.Tasks;

namespace Cafe.Repositories.Interfaces
{
    public interface IAuthRepository
    {
        Task<bool> Register(Person person, string password);
        Task<string> Login(string email, string password);
        
    }
}
