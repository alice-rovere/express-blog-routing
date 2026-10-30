// Create, Update e Delete
//import
const express = require('express');
const router = express.Router();
const connection = require('../data/db')

//index
router.get('/', (req,res)=> {
res.send('Lista dei posts')
})
//show
router.get('/:id', (req,res)=> {
res.send(`Dettaglio del post con id ${req.params.id}`)
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
router.delete('/:id', (req,res)=> {
res.send(`Eliminazione del post con id ${req.params.id}`)
})

//export
module.exports = router;