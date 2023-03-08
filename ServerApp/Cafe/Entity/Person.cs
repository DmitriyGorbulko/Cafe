using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cafe.Entity
{
    [Table("person")]
    public class Person
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("first_name")]
        public string? FirstName { get; set; }

        [Column("last_name")]
        public string? LastName { get; set; }

        [Column("password_hash")]
        public byte[] PasswordHash { get; set; }

        [Column("password_salt")]
        public byte[] PasswordSalt { get; set; }

        [Column("age")]
        public int? Age { get; set; }

        [ForeignKey(nameof(Role))]
        [Column("role_id")]
        public int? RoleId { get; set; }
        public virtual Role? Role { get; set; }
    }
}
