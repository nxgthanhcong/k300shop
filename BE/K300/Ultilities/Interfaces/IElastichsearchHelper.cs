using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Ultilities.Implementions
{
    public interface IElastichsearchHelper
    {
        void UpErrorToElasticSeearch(Exception ex, object obj, [CallerMemberName] string callerName = "");
    }
}
