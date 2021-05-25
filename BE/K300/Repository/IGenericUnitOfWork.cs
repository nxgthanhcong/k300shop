using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public interface IGenericUnitOfWork<T> : IDisposable
    {
        IGenericRepository<T> GenericRepository { get; }
        IBrandRepository BrandRepository { get; }
        void Commit();
    }
}
