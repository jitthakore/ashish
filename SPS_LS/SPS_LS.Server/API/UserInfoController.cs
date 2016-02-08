using DBConn;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LightSwitchApplication.API
{
    public class UserInfoController : ApiController
    {
        // GET api/<controller>
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}

        public object Get()
        {

            string currentUser = "";

            using (ServerApplicationContext ctx = ServerApplicationContext.CreateContext())
                currentUser = ctx.Application.User.Name;

            object objReturn = null;
            clsData cd = new clsData();
            DataSet ds = new DataSet();


            ds = cd.GetDataSet("SELECT *  FROM tushar where userid='testuser'");

            objReturn = (object)ds.Tables[0];
            return objReturn;
        }
    }
}