const {  Schema, model} = require('mongoose')

const MediaSchema = Schema({
    //Atributos
    serial:{
        type: String,
        required: [true,'serial requerido'],
        unique: [true,'media ya existe']
    },
    titulo:{
        type: String,
        required: [true,'Titulo requerido']
    },
    sinopsis:{
        type:String, 
    },
    url: {
        type: String
        
    },
    imagen: {
        type: String
    },
    fechaCreacion:{
        type: Date, 
        default: new Date()
    },
    fechaActualizacion:{
        type: Date, 
        default: new Date()
    },
    añoEstreno:{
        type: Date, 
        default: new Date()
    },
    //Atributos de schema 
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
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productor: {
        type: Schema.Types.ObjectId,
        ref: 'Productor',
        required: true
    },

    
})

module.exports = model('Media',MediaSchema)