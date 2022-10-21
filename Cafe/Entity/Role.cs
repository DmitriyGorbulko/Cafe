using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("role")]
    public class Role
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        
        [Column("Title")]       
        public string Title { get; set; }
    }
}
