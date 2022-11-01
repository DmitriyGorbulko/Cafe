using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("order")]
    public class Order
    {
        [Column("id")]
        public int Id { get; set; }

        [ForeignKey(nameof(Table))]
        [Column("table_id")]
        public int TableId { get; set; }
        public virtual Table? Table { get; set; }

        [ForeignKey(nameof(Dish))]
        [Column("dish_id")]
        public int DishId { get; set; }
        public virtual Dish? Dish { get; set; }

        [Column("count_person")]
        public int CountPerson { get; set; }

        [ForeignKey(nameof(Person))]
        [Column("person_id")]
        public int PersonId { get; set; }
        public virtual Person? Person { get; set; }
    }
}
