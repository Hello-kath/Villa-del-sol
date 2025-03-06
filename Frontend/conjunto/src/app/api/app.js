const express = require('express');
const app = express()
const cors = require('cors');
const { sequelize } = require('./models'); // Importar sequelize desde models/index.js
require('dotenv').config()
app.use(express.json());

const PORT = process.env.PORT || 3000; // variable de entorno para el puerto

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Dominio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true, // Permitir credenciales (cookies, etc.)
}));


//importar rutas
const apartamentoRoutes = require('./rutas/Admi/ApartamentoRutas')
const propietarioRoutes = require('./rutas/Propietario/RegistrarseRutas')
const iniciarSesionRoutes = require('./rutas/InicioSesion/inicioSesionRutas.js')
const RegistrarResidente = require('./rutas/Residente/RegistroRutas.js')
const RegistrarAdmi = require('./rutas/Admi/RegistroRutas.js')
const Visitante = require('./rutas/Visitas/VisitaRutas')

//Rutas Admi
app.use('/api', apartamentoRoutes); 
app.use('/api/registro', RegistrarAdmi); 

//Rutas propietario
app.use('/api/propietarios', propietarioRoutes);

//iniciar Sesion
app.use('/api/iniciarSesion', iniciarSesionRoutes);

//Registrar un residente
app.use('/api/registrar', RegistrarResidente);

//Registrar de visitante
app.use('/api/visita', Visitante);

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });


//inicializar el puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
