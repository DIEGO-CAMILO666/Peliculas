const Genero = require('../modelos/genero')
const { request, response } = require("express")

/**
 * crear genero
 */
 const crearGenero =  async(req = request, res = response) => {
   // console.log(req.body)

    const {nombre,descripcion} = req.body
    try {
        const generoDB = await Genero.findOne({ nombre })
        if(generoDB){
            return res.status(400).json({mjs: 'ya existe el genero'})
        }
    
        //select * from generos where nombre=?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
        return res.status(201).json(genero)
    } catch (error) {
      console.log(error)  
      return res.status(500).json({msj:error})
    }
    
 }
/**
 * consultar todos los generos
 */
const getGeneros =  async(req = request, res = response) => {
 
     
     try {
         const {estado} = req.query
         const generos = await Genero.find({ estado })
         
         return res.json(generos)
     } catch (error) {
       console.log(error)  
       return res.status(500).json({msj:error})
     }
     
  }
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

