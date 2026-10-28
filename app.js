// import express 
const express = require('express');

// import blogposts router
const postsRouter = require('./routers/posts');
// import middleware 
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

// setup 
const app = express();
const port = 3000;
// collegamento a cartella public per assets statici
app.use(express.static('public'));
//collegamento a middleware logger globale
app.use(logger)


//definizione della rotta home
app.get('/', (req,res)=>{
    console.log(lorem)
    res.send('Server del mio blog')
})

//collegamento a postsRouter
app.use('/posts', postsRouter);
//error handler da chiamare DOPO la definizione delle rotte!
app.use(errorHandler);
app.use(notFound)
// start server
app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
})
