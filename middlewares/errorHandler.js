function errorHandler(err, req ,res, next) {
res.status(500);
res.json({
    error : err.message,
    message: "Riprovare più tardi"
})
}
module.exports = errorHandler;


// Se viene generato un errore server side, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.