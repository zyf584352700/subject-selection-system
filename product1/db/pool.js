require('babel-polyfill');
var mysql = require('mysql');
var pool = global.pool;
if(!pool){
  pool = mysql.createPool({
    // host:'101.132.47.132',
    port:3306,
    database:'exam',
    user:'root',
    password:'root'
  }); 
  global.pool = pool;
}
//获取链接
function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(!err){
        resolve(conn);
      }else{
        reject(err);
      }
    })
  })
}
//执行sql
function execute(sql){
  return new Promise(function(resolve,reject){
    var connection;
    getConnection().then(function(conn){
      connection =conn;
      conn.query(sql,function(err,result){
        if(!err){      
          resolve(result);
        }else{  
          reject(err);
        }
      });
    }).catch(function(err){
      reject(err);
    }).finally(function(){
      if(connection){
        connection.release();             
      }
    });
  })
}
module.exports　= {
  getConnection,
  execute,
};