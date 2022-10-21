using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("dish")]
    public class Dish
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("description")]
        public string Description { get; set; }

        [ForeignKey(nameof(CategoryDish))]
        [Column("category_dish_id")]
        public int CategoryDishId { get; set; }
        public virtual CategoryDish? CategoryDish { get; set; } 
    }
}
