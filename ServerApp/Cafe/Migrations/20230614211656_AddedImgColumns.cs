using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cafe.Migrations
{
    public partial class AddedImgColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "img",
                table: "dish",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "img",
                table: "category_dish",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "img",
                table: "dish");

            migrationBuilder.DropColumn(
                name: "img",
                table: "category_dish");
        }
    }
}
