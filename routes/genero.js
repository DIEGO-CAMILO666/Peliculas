const { Router } = require('express')
const{crearGenero} = require('../controllers/genero')

const router = Router()

/**
 * crear genero
 */
router.post('/',crearGenero)
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
    crearGenero
}

module.exports = router