using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("table")]
    public class Table
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [ForeignKey(nameof(TypeTable))]
        [Column("type_table")]
        public int TypeId { get; set; }
        public virtual TypeTable? TypeTable { get; set; }
    }
}
