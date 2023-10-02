const Genero = require('../modelos/genero')
const { request, response } = require("express")

/**
 * crear genero
 */
 const crearGenero = (req = request, res = response) => {
    console.log(req.body)

    const {nombre,descripcion}= req.body
    console.log(nombre)
    console.log(descripcion)
 }
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