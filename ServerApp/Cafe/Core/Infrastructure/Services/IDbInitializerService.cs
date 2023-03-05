using System.Threading.Tasks;

namespace Cafe.Core.Infrastructure.Services
{
    public interface IDbInitializerService
    {
        Task InitializeAsync();
    }
}
