using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gradely.DataAccess.Migrations
{
    public partial class FixingSomeStuffff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Grades_Terms_TermId",
                table: "Grades");

            migrationBuilder.DropIndex(
                name: "IX_Grades_TermId",
                table: "Grades");

            migrationBuilder.DropColumn(
                name: "TermId",
                table: "Grades");

            migrationBuilder.AlterColumn<string>(
                name: "BoundTo",
                table: "Grades",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "BoundTo",
                table: "Grades",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "TermId",
                table: "Grades",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Grades_TermId",
                table: "Grades",
                column: "TermId");

            migrationBuilder.AddForeignKey(
                name: "FK_Grades_Terms_TermId",
                table: "Grades",
                column: "TermId",
                principalTable: "Terms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
