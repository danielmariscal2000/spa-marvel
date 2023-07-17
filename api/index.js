const express = require('express');
const app = express();

// Importar el enrutador de las rutas
const routes = require('./routes/index.routes');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Usar el enrutador como middleware
app.use('/', routes);

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
