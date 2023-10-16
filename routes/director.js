const { Router } = require('express')
const{crearDirector, getDirectores} = require('../controllers/director')

const router = Router()

/**
 * crear genero
 */
router.post('/',crearDirector)
/**
 * consultar todos los generos
 */

/**
 * consultar un genero por su ID
 */

/**
 * Actualizar genero
 */
/**
 * Borrar genero
 */

module.exports = {
    crearDirector
}

module.exports = router