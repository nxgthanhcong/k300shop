using Dapper;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using static Dapper.SqlMapper;

namespace Repository
{
    public class BaseRepository
    {
        //properties
        private readonly IDbConnection _dbConnection;
        private readonly IDbTransaction _dbTransaction;
        private readonly int _timeOut = 3600;
        //Construc func
        public BaseRepository(IDbTransaction dbTransaction)
        {
            _dbTransaction = dbTransaction;
            _dbConnection = _dbTransaction.Connection;
        }
        //Query
        public async Task<IEnumerable<O>> QueryAsync<O>(string storeName, dynamic objectParam)
        {
            return await _dbConnection.QueryAsync<O>(storeName,
                param: (object)objectParam,
                commandType: CommandType.StoredProcedure,
                transaction: _dbTransaction,
                commandTimeout: _timeOut);
        }
        //QyeryMultiple
        public async Task<GridReader> QueryMultipleAsync(string storeName, dynamic objectParam)
        {
            return await _dbConnection.QueryMultipleAsync(storeName,
                param: (object)objectParam, commandType:
                CommandType.StoredProcedure,
                transaction: _dbTransaction,
                commandTimeout: _timeOut);
        }
        //ExcuteAsync
        public async Task<int> ExecuteAsync(string storeName, dynamic objectParam)
        {
            return await _dbConnection.ExecuteAsync(storeName,
                param: (object)objectParam,
                commandType: CommandType.StoredProcedure,
                transaction: _dbTransaction,
                commandTimeout: _timeOut);
        }
    }
}
