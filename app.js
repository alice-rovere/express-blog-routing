// import express 
const express = require('express');

// import blogposts router
const postsRouter = require('./routers/posts');
const logger = require('./middlewares/logger');
// setup 
const app = express();
const port = 3000;
// collegamtno a cartella public per assets statici
app.use(express.static('public'));
app.use(logger)

//definizione della rotta home
app.get('/', (req,res)=>{
    res.send('Server del mio blog')
})

//collegamento a postsRouter
app.use('/posts', postsRouter);

// start server
app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
})
