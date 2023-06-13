using Cafe.DTO;
using Cafe.Entity;
using Cafe.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost]
        [Route(nameof(Register))]
        public async Task<IActionResult> Register([FromBody]PersonAuthDTO request)
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
        [Route(nameof(Login))]
        public async Task<IActionResult> Login([FromBody] PersonAuthDTO request)
        {
            var response = await _authRepository.Login(
                request.Email, request.Password);
            if (response == "false")
            {
                return BadRequest(response);
            }
            return Ok(response);
        }
    }
}
