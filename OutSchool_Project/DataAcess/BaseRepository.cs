using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;
using Dapper;

namespace DataAcess
{
    public abstract class BaseRepository
    {
        private readonly IDbConnection _connection;
        private readonly IDbTransaction _transaction;
        private readonly int _timeOut;
        public BaseRepository(IDbTransaction transaction)
        {
            _transaction = transaction;
            _connection = transaction.Connection;
            _timeOut = 300; //second
        }

        public async Task<IEnumerable<T>> QueryAsync<T>(string storeName, dynamic objectParam)
        {
            return await _connection.QueryAsync<T>(storeName, (object)objectParam, _transaction, _timeOut, CommandType.StoredProcedure);
        }

        public async Task<int> ExcuteAsync(string storeName, dynamic objectParam)
        {
            return await _connection.ExecuteAsync(storeName, (object)objectParam, _transaction, _timeOut, CommandType.StoredProcedure);
        }
    }
}
