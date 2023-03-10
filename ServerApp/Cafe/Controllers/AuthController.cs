using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost]
        [Route("/register")]
        public async Task<IActionResult> Register(PersonAuthDTO request)
        {
            var response = await _authRepository.Register(
                    new Person { Email = request.Email }, request.Password);
            if (!response)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }

        [HttpPost]
        [Route("/login")]
        public async Task<IActionResult> Login(PersonAuthDTO request)
        {
            var response = await _authRepository.Login(
                request.Email, request.Password);
            if (!response)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }
    }
}
