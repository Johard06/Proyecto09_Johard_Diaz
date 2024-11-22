const mongoose = require('mongoose');
/* const dotenv = require('dotenv');

dotenv.config();*/

//mongoose.connect('mongodb://localhost:27017/proyecto_integrador');

/*const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

console.log('=================================');
console.log('MONGO_LOCAL:' , MONGO_LOCAL);
console.log('MONGO_ATLAS:' , MONGO_ATLAS);
console.log('================================='); */

//conexion a la base de datos
const conexion = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log('Conexion a la base de datos exitosa');
        } catch (error) {
            console.log('Error en la conexion a la base de datos');
        }
}

module.exports = conexion;




