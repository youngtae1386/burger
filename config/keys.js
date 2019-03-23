console.log('keys is loaded');

exports.AccessMysql = {
    host: 'localhost',
    user: 'root',
    password:'Qwer!234',
    database: 'burgers_db'
};


console.log((exports.AccessMysql = {
    host: 'localhost',
    user: 'root',
    password:'Qwer!234',
    database: 'burgers_db'
 }));
