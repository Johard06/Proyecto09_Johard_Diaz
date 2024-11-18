const dotenv = require('dotenv');
dotenv.config();//Variable de entorno

//Se importo las configuraciones desde el archivo app
const app = require('./app');

//Importar la variable de entorno
const PORT = process.env.PORT;

//levantar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);  
});
