using Cafe.DTO;
using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TypeTableController : ControllerBase
    {
        private readonly ITypeTableService _typeTableService;

        public TypeTableController(ITypeTableService typeTableService)
        {
            _typeTableService = typeTableService;
        }
        
        [HttpPost]
        [Route("/create_type_table")]
        public async Task<ActionResult<TypeTable>> Create(TypeTableAddDTO typeTableAddDTO)
        {
            return Ok(await _typeTableService.Create(typeTableAddDTO));
        }

        [HttpGet]
        [Route("/get_type_table")]
        public async Task<ActionResult<TypeTableGetDTO>> Get(int id)
        {
            return Ok(await _typeTableService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_types_table")]
        public async Task<ActionResult<IEnumerable<TypeTableGetDTO>>> GetAll()
        {
            return Ok(await _typeTableService.GetAll());
        }

        [HttpPut]
        [Route("/update_type_table")]
        public async Task<ActionResult<TypeTable>> Update(TypeTableUpdateDTO typeTableUpateDTO)
        {
            return Ok(await _typeTableService.Update(typeTableUpateDTO));
        }

        [HttpDelete]
        [Route("/delete_type_table")]
        public async Task Delete(int id)
        {
            await _typeTableService.Delete(id);
        }

        
    }
}
