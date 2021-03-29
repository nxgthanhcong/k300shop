using DataAcess.Implementions;
using DataAcess.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DataAcess
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbTransaction _transaction;
        private IDbConnection _connection;
        private bool _disposed;
        private IAPIRepository _aPIRepository;

        public UnitOfWork()
        {
            _connection = new SqlConnection("Data Source=DESKTOP-B62BO1H\\SQLEXPRESS;Initial Catalog=K300;Integrated Security=True");
            _connection.Open();
            _transaction = _connection.BeginTransaction();
            _disposed = false;
        }

        public IAPIRepository aPIRepository
        {
            get
            {
                if(_aPIRepository == null)
                {
                    _aPIRepository = new APIRepository(_transaction);
                }
                return _aPIRepository;
            }
        }

        public void ResetRepositories()
        {
            _aPIRepository = null;
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }
            catch
            {
                _transaction.Rollback();
                throw;
            }
            finally
            {
                _connection.Dispose();
                _connection.Close();
                _transaction.Dispose();
                ResetRepositories();
            }
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (_transaction != null)
                {
                    _transaction.Dispose();
                    _transaction = null;
                }

                if (_connection != null)
                {
                    _connection.Dispose();
                    _connection = null;
                }

                _disposed = true;
            }
        }
    }
}
