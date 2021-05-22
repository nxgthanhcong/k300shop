using Models;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IGenericRepository<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<int> UpdateBrand(Brand brand);
        Task<int> AddBrand(Brand brand);
        Task<IEnumerable<T>> SearchBrand(Brand brand);
    }
}
