using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OutSchool_Project
{
    public class BaseReponse<T> where T : class
    {
        public T Data { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
        public string ErrorCode { get; set; }

        public BaseReponse(T data)
        {
            Data = data;
            Success = true;
            Message = "Success";
            ErrorCode = "1";
        }
        public BaseReponse(string error, string message)
        {
            Data = null;
            Success = false;
            Message = message;
            ErrorCode = error;
        }
    }
}
