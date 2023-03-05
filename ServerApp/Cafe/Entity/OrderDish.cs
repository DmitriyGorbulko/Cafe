using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("order_dish")]
    public class OrderDish
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [ForeignKey(nameof(Order))]
        [Column("order_id")]
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }

        [ForeignKey(nameof(Dish))]
        [Column("dish_id")]
        public int DishId { get; set; }
        public virtual Dish Dish { get; set; }
    }
}
