using Microsoft.Extensions.Configuration;
using Repository.Implementions;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Repository
{
    public class UnitOfWork<T> : IUnitOfWork<T>
    {
        private IDbTransaction _dbTransaction;
        private IDbConnection _dbConnection;
        private bool _disposed;
        private IBrandRepository _brandRepository;
        private IGenericRepository<T> _genericRepository;

        public UnitOfWork(string connectionString)
        {
            _dbConnection = new SqlConnection(connectionString);
            _dbConnection.Open();
            _dbTransaction = _dbConnection.BeginTransaction();
            _disposed = false;
        }
        public IBrandRepository BrandRepository
        {
            get
            {
                if(_brandRepository == null)
                {
                    _brandRepository = new BrandRepository(_dbTransaction);
                }
                return _brandRepository;
            }
        }
        public IGenericRepository<T> GenericRepository
        {
            get
            {
                if (_genericRepository == null)
                {
                    _genericRepository = new GenericRepository<T>(_dbTransaction);
                }
                return _genericRepository;
            }
        }
        private void ResetRepositories()
        {
            _brandRepository = null;
        }
        public void Commit()
        {
            try
            {
                _dbTransaction.Commit();
            }
            catch
            {
                _dbTransaction.Rollback();
                throw;
            }
            finally
            {
                _dbConnection.Dispose();
                _dbConnection.Close();
                _dbTransaction.Dispose();
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
                if (_dbTransaction != null)
                {
                    _dbTransaction.Dispose();
                    _dbTransaction = null;
                }

                if (_dbConnection != null)
                {
                    _dbConnection.Dispose();
                    _dbConnection = null;
                }

                _disposed = true;
            }
        }
    }
}
