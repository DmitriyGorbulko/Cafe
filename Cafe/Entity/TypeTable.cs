using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("type_table")]
    public class TypeTable
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("count_person")]
        public int CountPerson{ get; set; }
    }
}
