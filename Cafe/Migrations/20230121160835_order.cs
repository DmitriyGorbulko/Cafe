using Microsoft.EntityFrameworkCore.Migrations;

namespace Cafe.Migrations
{
    public partial class order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_order_dish_dish_id",
                table: "order");

            migrationBuilder.DropForeignKey(
                name: "FK_order_person_person_id",
                table: "order");

            migrationBuilder.DropIndex(
                name: "IX_order_dish_id",
                table: "order");

            migrationBuilder.DropColumn(
                name: "dish_id",
                table: "order");

            migrationBuilder.AlterColumn<int>(
                name: "person_id",
                table: "order",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddForeignKey(
                name: "FK_order_person_person_id",
                table: "order",
                column: "person_id",
                principalTable: "person",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_order_person_person_id",
                table: "order");

            migrationBuilder.AlterColumn<int>(
                name: "person_id",
                table: "order",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "dish_id",
                table: "order",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_order_dish_id",
                table: "order",
                column: "dish_id");

            migrationBuilder.AddForeignKey(
                name: "FK_order_dish_dish_id",
                table: "order",
                column: "dish_id",
                principalTable: "dish",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_order_person_person_id",
                table: "order",
                column: "person_id",
                principalTable: "person",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
