using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("indredient")]
    public class Ingredient
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("description")]
        public string Description { get; set; }

        [ForeignKey(nameof(CategoryIngredient))]
        [Column("category_ingredient_id")]
        public int CategoryIngredientId { get; set; }
        public virtual CategoryIngredient? CategoryIngredient { get; set; }
    }
}
