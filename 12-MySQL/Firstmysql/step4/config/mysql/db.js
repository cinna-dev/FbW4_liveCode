const mysql = require('mysql');
const util = require('util');

const con = mysql.createPool({
  host: 'localhost',
  user: 'demo', //root
  password: 'Test1234#', //root password
  database: 'www',
});

//This function test the connection to the database
con.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  }
  if (connection) {
    connection.release();
  }

  return;
});

con.query = util.promisify(con.query);

module.exports = con;
