// import express 
const express = require('express');
// import blogposts router
// const postsRouter = require('./routers/posts');
// setup 
const app = express();
const port = 3000;
//definizione della rotta home
app.get('/', (req,res)=>{
    res.send('Server del mio blog')
})
// start server
app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
})
