//variables de entorno
require("dotenv").config();

//requiero el server y la base de datos
const app = require('./app');
require('./database')

//me conecto al server
async function main() {  
    await app.listen(app.get("port"))
    console.log("Server on port 4000")
}


main();
