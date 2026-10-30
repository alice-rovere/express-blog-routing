const mysql= require('mysql2');

// CONSOLE.LOG PER TEST 
console.log("TEST CREDENZIALI .ENV:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASS,
      database:process.env.DB_NAME,

});

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password:process.env.DB_USER_PASS,
    database:process.env.DB_NAME,
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to database blog_app")
});

module.exports = connection;