const {  Schema, model} = require('mongoose')

const tipoSchema = Schema({

    nombre:{
        type:String,
        required: [True,' Nombre de tipo requerido'],
        minlength:1
    },
    fechaCreacion:{
        type: Date, 
        default: new Date(),
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date(),
    },
    descripcion:{
        type: String

    }

})

module.exports = model('tipo',tipoSchema)

