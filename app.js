//Modulos
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const User = require('./models/usuarioModel');

const app = express();//Instancia de express

//Configuraciones de middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


//Error 500, error Intencional
app.get("/error", (req , res) => {
    throw new Error("Error 500 - Intencional");  
});

//Middleware para errores
app.use((err , req , res , next) => {
    console.log(err.stack);
    res.status(500).render("error", { error: err.message, });    
});

// Configurar carpeta de archivos que estan en public
app.use(express.static(path.join(__dirname, "public")));

//Configurar handlebars (hbs)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

//Definir Ruta
app.get("/", (req , res) => {
    res.render("index");
});

app.get("/contact", (req , res) => {
    res.render("contact");
});

app.get("/about", (req , res) => {
    res.render("about");
});

app.get("/registrate", (req , res) => {
    res.render("registrate");
});

app.post("/registrate", (req , res) => {

    const { nombre, email, password, edad, provincia, telefono, sucursales, pago} = req.body;

    const persona = {
        nombre,
        email,
        password,
        edad,
        provincia,
        telefono,
        sucursales,
        pago
    }
    console.log(persona);

    const newUser = new User(persona);
    newUser.save()

    res.json(persona);
})

//Error 404
app.get("/*", (req , res) => {
    res.status(404).render("error", 
        { error: "Pagina en construccion - ERROR 404" }
    );
});

module.exports = app;
