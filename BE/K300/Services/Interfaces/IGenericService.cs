using Models;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IGenericService<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<int> UpdateBrand(Brand brand);
        Task<int> AddBrand(Brand brand);
        Task<IEnumerable<T>> SearchBrand(Brand brand);
    }
}
