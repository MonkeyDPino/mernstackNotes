//* Creación de enrutadores
const {Router} = require('express');
const router = Router();


//? exporto los metodos de las rutas
const { getNotes, createNote ,getNote , deleteNote ,updateNote} = require('../controllers/notes.controller')



//cada que visiten la ruta /api/notes
router.route('/')
    .get(getNotes)
    .post(createNote);

//id se vuelve un parametro en el req y se ve req.params.id
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)
    
module.exports = router;