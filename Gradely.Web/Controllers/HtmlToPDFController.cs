using Microsoft.AspNetCore.Mvc;
using SelectPdf;

namespace Gradely.Web.Controllers
{
    public class HtmlToPDFController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GeneratePDF(string html)
        {
            HtmlToPdf htp = new HtmlToPdf();
            PdfDocument pdfDoc = htp.ConvertHtmlString(html);
            byte[] pdf = pdfDoc.Save();
            pdfDoc.Close();

            return File(pdf, "application/pdf", "ReportCard.pdf");
        }
    }
}
