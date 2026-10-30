// Create, Update e Delete
//import
const express = require('express');
const router = express.Router();
const connection = require('../data/db')

//index
router.get('/', (req,res, next)=> {
    const sql = "SELECT * FROM posts"
    connection.query(sql, (err,results)=>{
        if(err) return next(err);
        res.json(results);
    });
// res.send('Lista dei posts')
})


//show
router.get('/:id', (req,res, next)=> {
    const id = req.params.id;
    const sql = `SELECT * FROM posts WHERE id=?`;
    connection.query(sql, [id], (err,results)=>{
        if(err) return next(err);
        if(results.length===0){
            return res.status(404).json({error:'pizza not found'});
        }
        res.json(results[0]);
    })

// res.send(`Dettaglio del post con id ${req.params.id}`)
})



//store
router.post('/', (req,res)=> {
res.send(`Creazione del nuovo post`)
})




//update
router.put('/:id', (req,res)=> {
res.send(`Modifica integrale del post con id ${req.params.id}`)
})




//modify
router.patch('/:id', (req,res)=> {
res.send(`Modifica parziale del post con id ${req.params.id}`)
})




//destroy
router.delete('/:id', (req,res, next)=> {
    const id = req.params.id;
    const sql = `DELETE FROM posts WHERE id=?`;
    connection.query(sql, [id], (err,results)=>{
        if(err) return next(err);
        if(results.affectedRows===0){
            return res.status(404).json({error:'pizza not found'});
        }
        // console.log(results)
        res.sendStatus(204);
    })



// res.send(`Eliminazione del post con id ${req.params.id}`)
})




//export
module.exports = router;