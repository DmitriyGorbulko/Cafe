using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Cafe.Migrations
{
    public partial class init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ingredient_to_dish",
                table: "ingredient_to_dish");

            migrationBuilder.DropIndex(
                name: "IX_ingredient_to_dish_dish_id",
                table: "ingredient_to_dish");

            migrationBuilder.DropColumn(
                name: "id",
                table: "ingredient_to_dish");

            migrationBuilder.AddColumn<string>(
                name: "recipe",
                table: "dish",
                type: "text",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ingredient_to_dish",
                table: "ingredient_to_dish",
                columns: new[] { "dish_id", "ingredient_id" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ingredient_to_dish",
                table: "ingredient_to_dish");

            migrationBuilder.DropColumn(
                name: "recipe",
                table: "dish");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "ingredient_to_dish",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ingredient_to_dish",
                table: "ingredient_to_dish",
                column: "id");

            migrationBuilder.CreateIndex(
                name: "IX_ingredient_to_dish_dish_id",
                table: "ingredient_to_dish",
                column: "dish_id");
        }
    }
}
