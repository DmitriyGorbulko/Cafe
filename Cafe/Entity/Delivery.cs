using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("delivery")]
    public class Delivery
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("address")]
        public string Address { get; set; }

        [ForeignKey(nameof(Dish))]
        [Column("dish_id")]
        public int DishId { get; set; }
        public virtual Dish? Dish { get; set; }
    }
}
