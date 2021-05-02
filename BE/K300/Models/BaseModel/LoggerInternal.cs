using System;
using System.Collections.Generic;
using System.Text;

namespace Models.BaseModel
{
    public class LoggerInternal
    {
        public string TypeLog { get; set; }
        public string Package { get; set; }
        public string ClassName { get; set; }
        public string ErrorMethod { get; set; }
        public string Parameters { get; set; }
        public string ErrorMessage { get; set; }
        public DateTime DateTime { get; set; }
    }
}
