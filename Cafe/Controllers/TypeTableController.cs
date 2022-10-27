using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/type_table")]
    [ApiController]
    public class TypeTableController : ControllerBase
    {
        private readonly ITypeTableService _typeTableService;

        public TypeTableController(ITypeTableService typeTableService)
        {
            _typeTableService = typeTableService;
        }

        [HttpGet]
        [Route("/get_type_table")]
        public async Task<ActionResult<TypeTable>> Get(int id)
        {
            return Ok(await _typeTableService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_types_table")]
        public async Task<ActionResult<IEnumerable<TypeTable>>> GetAll()
        {
            return Ok(await _typeTableService.GetAll());
        }

        [HttpDelete]
        [Route("/delete_type_table")]
        public async Task Delete(int id)
        {
            await _typeTableService.Delete(id);
        }

        [HttpPost]
        [Route("/create_type_table")]
        public async Task<ActionResult<TypeTable>> Create(TypeTable typeTable)
        {
            return Ok(await _typeTableService.Create(typeTable));
        }
    }
}
