using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("ingredient_to_dish")]
    public class IngredientDish
    {
        [ForeignKey(nameof(Ingredient))]
        [Column("ingredient_id")]
        public int IngredientId { get; set; }
        public virtual Ingredient? Ingredient { get; set; }

        [ForeignKey(nameof(Dish))]
        [Column("dish_id")]
        public int DishId{ get; set; }
        public virtual Dish? Dish { get; set; }
    }
}
