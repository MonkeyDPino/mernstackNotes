const {Schema, model} = require('mongoose');

//! Definir la estructura de las notas
const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    //* Fecha que guarda por defecto la fecha actual
    date:{
        type: Date,
        default: Date.now
    }
},{
    // Guarda la fecha de creación y Actualización
    timestamps:true
});

//? Cuando crea el modelo se crea internamente la coleccion
module.exports = model("Note",noteSchema);