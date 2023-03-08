using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cafe.Migrations
{
    public partial class auth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_person_role_role_id",
                table: "person");

            migrationBuilder.AlterColumn<int>(
                name: "role_id",
                table: "person",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "age",
                table: "person",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "person",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "password_hash",
                table: "person",
                type: "bytea",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "password_salt",
                table: "person",
                type: "bytea",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "order_dish",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_person_role_role_id",
                table: "person",
                column: "role_id",
                principalTable: "role",
                principalColumn: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_person_role_role_id",
                table: "person");

            migrationBuilder.DropColumn(
                name: "email",
                table: "person");

            migrationBuilder.DropColumn(
                name: "password_hash",
                table: "person");

            migrationBuilder.DropColumn(
                name: "password_salt",
                table: "person");

            migrationBuilder.DropColumn(
                name: "id",
                table: "order_dish");

            migrationBuilder.AlterColumn<int>(
                name: "role_id",
                table: "person",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "age",
                table: "person",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_person_role_role_id",
                table: "person",
                column: "role_id",
                principalTable: "role",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
