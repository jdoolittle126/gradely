using Gradely.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace Gradely.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        //db connection stuff

        [HttpGet]
        [Route("Login")] //might not be necessary
        public string Login(Login login)
        {
            string results = "";
            /* try
             * {
             *     cmd = new SqlCommand("go get shit");
             *     cmd.Parameters.AddWithValue("@username", login.username);
             *     cmd.Parameters.AddWithValue("@password", login.password);
             * 
             *     connection.Open();
             *     int record = cmd.ExecuteNonQuery();
             *     connection.Close();
             * 
             *     if(record > 0)
             *     {
             *         results = "Valid Credentials";
             *     }
             *     else
             *     {
             *         results = "Invalid Credentials";
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
