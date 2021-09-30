const express = require('express');

const cors = require('cors');

//Server
const app = express();

//!settings configurar el server


//tomar la variable de entorno como puerto y si no existe toma 4000
app.set("port", process.env.PORT || 4000);



//!middlewares  definir funciones antes de llegar a las rutas
app.use(cors());

//poder recibir formatos json
app.use(express.json());



//!routes


//definir las rutas a las que puede ingresar el frontend

//* conectar los usos de las rutas con los enrutadores
app.use("/api/users", require('./routes/users'))
app.use("/api/notes", require('./routes/notes'))




module.exports = app;



