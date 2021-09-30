const {Schema, model} = require('mongoose');

//! Definir la estructura de los usuarios

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        //Limpiar el string
        trim: true,
        //debe ser unico en la base de datos
        unique: true,
    }

},{
    // Guarda la fecha de creación y Actualización
    timestamps:true
});


//? Cuando crea el modelo se crea internamente la coleccion
module.exports = model("User",userSchema);

