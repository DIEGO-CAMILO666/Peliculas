const {  Schema, model} = require('mongoose')

const MediaSchema = Schema({
    serial:{
        type: String,
        required: [true,'serial requerido'],
        unique: [true,'media ya existe']
    },
    titulo:{
        type: String,
        required: [true,'Titulo requerido']
    },
    nombre:{
        type:String,
        required: [true,' Nombre de tipo requerido'],
        minlength:1
    },

   
    url: {
        type: String
        
    },
    imagen: {
        type: String
        
    },
     genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },

    
})

module.exports = model('Media',MediaSchema)