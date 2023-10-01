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

    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    }
})

module.exports = model('Tipo',tipoSchema)