const mysql = require('mysql2');

function connectToDatabase() {
  // create a new MySQL connection
  const connection = mysql.createConnection({
    host: '',
    port: 27674,
    user: 'avnadmin',
    password: '',
    database: 'BPE'
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

  return connection;
}
const connection = connectToDatabase();
module.exports = connection;
