﻿using Cafe.Entity;
using Cafe.Services.Implements;
using Cafe.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cafe.Controllers
{
    public class CategoryDishController : ControllerBase
    {
        private readonly ICategoryDishService _categoryDishService;

        public CategoryDishController(ICategoryDishService categoryDishService)
        {
            _categoryDishService = categoryDishService;
        }


        [HttpPost]
        [Route("/create_category_ingredient")]
        public async Task<ActionResult<CategoryDish>> Create(CategoryDish categoryDish)
        {
            return Ok(await _categoryDishService.Create(categoryDish));
        }

        [HttpGet]
        [Route("/get_category_ingredient")]
        public async Task<ActionResult<CategoryDish>> Get(int id)
        {
            return Ok(await _categoryDishService.Get(id));
        }

        [HttpGet]
        [Route("/get_all_category_ingredients")]
        public async Task<ActionResult<IEnumerable<CategoryDish>>> GetAll()
        {
            return Ok(await _categoryDishService.GetAll());
        }

        [HttpPut]
        [Route("/update_category_ingredient")]
        public async Task<ActionResult<CategoryDish>> Update(CategoryDish categoryDish)
        {
            return Ok(await _categoryDishService.Update(categoryDish));
        }

        [HttpDelete]
        [Route("/delete_category_ingredient")]
        public async Task Delete(int id)
        {
            await _categoryDishService.Delete(id);
        }
    }
}
