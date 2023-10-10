const { Router } = require('express')
const{crearGenero} = require('../controllers/genero')
const{getGeneros} = require('../controllers/genero')

const router = Router()

/**
 * crear genero
 */
router.post('/',crearGenero)
/**
 * consultar todos los generos
 */
router.get('/',getGeneros)
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
    crearGenero,getGeneros
}


module.exports = router