using Cafe.DTO;
using Cafe.Entity;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    [Route("api/table")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly ITableService _tableService;

        public TableController(ITableService tableService)
        {
            _tableService = tableService;
        }

        [HttpPost]
        [Route("/create_table")]
        public async Task<ActionResult<Table>> Create(Table table)
        {
            return Ok(await _tableService.Create(table));
        }

        [HttpGet]
        [Route("/get_table")]
        public async Task<ActionResult<Table>> Get(int id)
        {
            return Ok(await _tableService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_tables")]
        public async Task<ActionResult<IEnumerable<Table>>> GetAll()
        {
            return Ok(await _tableService.GetAll());
        }

        [HttpPut]
        [Route("/update_table")]
        public async Task<ActionResult<Table>> Update(Table table)
        {
            return Ok(await _tableService.Update(table));
        }

        [HttpDelete]
        [Route("/delete_table")]
        public async Task Delete(int id)
        {
            await _tableService.Delete(id);
        }
    }
}
