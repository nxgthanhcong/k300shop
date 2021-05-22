using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public interface IUnitOfWork<T> : IDisposable
    {
        IGenericRepository<T> GenericRepository { get; }
        void Commit();
    }
}
