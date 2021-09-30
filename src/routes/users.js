//* Creación de enrutadores
const {Router} = require('express');
const router = Router();


//? exporto los metodos de las rutas
const {getUsers,createUser,deleteUser} = require('../controllers/users.controllers')


//cada que visiten la ruta /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .delete(deleteUser)

module.exports = router;