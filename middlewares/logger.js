const fs = require('fs');
function logger (req, res, next) {
const log = `${new Date().toLocaleString()} [${req.method}] ${req.originalUrl} \n`;
// console.log(log);
fs.appendFile('acces.log', log, err=> {if (err)console.log("could not log")})
next();
}

module.exports = logger;