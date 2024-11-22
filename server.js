const dotenv = require('dotenv');
dotenv.config();//Variable de entorno

//Se importo las configuraciones desde el archivo app
const app = require('./app');

//Importar la variable de entorno
const PORT = process.env.PORT;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

//conectar a la base de datos
const conexion = require('./conexion/conexion');
//conexion();
conexion(MONGO_LOCAL);


//levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);  
});
