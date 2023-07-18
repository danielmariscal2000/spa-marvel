const express = require('express');
const app = express();
require("dotenv").config();
const { PORT } = process.env;
// Importar el enrutador de las rutas
const routes = require('./routes/index.routes');

// Configurar el middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Establecer cabeceras CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Usar el enrutador como middleware
app.use('/', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
