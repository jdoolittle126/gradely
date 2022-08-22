using Gradely.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        //db connection stuff

        [HttpPost]
        [Route("Registration")] //might not be necessary
        public string Registration(Registration registration)
        {
            string results = "";
            /* try
             * {
             *     cmd = new SqlCommand("go store shit");
             *     cmd.Parameters.AddWithValue("@ID", registration.ID);
             *     //etc.
             * 
             *     connection.Open();
             *     int record = cmd.ExecuteNonQuery();
             *     connection.Close();
             * 
             *     if(record > 0)
             *     {
             *         results = "User added.";
             *     }
             *     else
             *     {
             *         results = "Error.";
             *     }
             * }
             * catch(Exception e)
             * {
             *     results = e.Message;
             * }
             */
            return results;
        }
    }
}
