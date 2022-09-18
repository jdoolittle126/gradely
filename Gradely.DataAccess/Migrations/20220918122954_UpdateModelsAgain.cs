using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gradely.DataAccess.Migrations
{
    public partial class UpdateModelsAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Templates_Users_CreatedById",
                table: "Templates");

            migrationBuilder.DropForeignKey(
                name: "FK_Templates_Users_ModifiedById",
                table: "Templates");

            migrationBuilder.DropIndex(
                name: "IX_Templates_CreatedById",
                table: "Templates");

            migrationBuilder.DropIndex(
                name: "IX_Templates_ModifiedById",
                table: "Templates");

            migrationBuilder.DropColumn(
                name: "CreatedById",
                table: "Templates");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Templates");

            migrationBuilder.DropColumn(
                name: "ModifiedById",
                table: "Templates");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Templates");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatedById",
                table: "Templates",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Templates",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "ModifiedById",
                table: "Templates",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Templates",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Templates_CreatedById",
                table: "Templates",
                column: "CreatedById");

            migrationBuilder.CreateIndex(
                name: "IX_Templates_ModifiedById",
                table: "Templates",
                column: "ModifiedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Templates_Users_CreatedById",
                table: "Templates",
                column: "CreatedById",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Templates_Users_ModifiedById",
                table: "Templates",
                column: "ModifiedById",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
