const {  Schema, model} = require('mongoose')

const ProductorSchema = Schema({

    nombre:{
        type:String,
        required: [True,' Dato requerido'],
        minlength:1
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion:{
        type: Date, 
        default: new Date(),
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date(),
    },
    slogan:{
        type: String,
        required:true
    },
    descripcion:{
        type: String

    }

})

module.exports = model('Prodcutor',ProductorSchema)

