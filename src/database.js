const mongoose = require('mongoose');

//me conecto a la variable de entono o sino a la base de test
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest'

mongoose.connect(URI, {
    useNewUrlParser: true
});

//me conecto a la base
const connection = mongoose.connection;

//mensaje cuando se logre conectar
connection.once("open", () =>{
    console.log("DB is connected")
})