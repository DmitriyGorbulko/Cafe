using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("order_dish")]
    public class OrderDish
    {
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
