const Director = require('../modelos/director')
const { request, response } = require("express")

/**
 * crear Director
 */
 const crearDirector =  async(req = request, res = response) => {
   // console.log(req.body)

    const {nombre} = req.body
    try {
        const directorDB = await Director.findOne({ nombre })
        if(directorDB){
            return res.status(400).json({mjs: 'ya existe el director'})
        }
    
        //select * from director where nombre=?
        
        const datos = {
            nombre
        }
    
        const director = new Director(datos)
    
        await director.save()
        return res.status(201).json(director)
    } catch (error) {
      console.log(error)  
      return res.status(500).json({msj:error})
    }
    
 }
/**
 * consultar todos los directores
 */

/**
 * consultar un director por su ID
 */

/**
 * Actualizar director
 */
/**
 * Borrar director
 */

module.exports = {
    crearDirector
}