//app.js
const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/database');
const usuariosRouter = require('./routes/usuarios');
const photosRouter = require('./routes/photos');  
const videosRouter = require('./routes/videos');  
const zonaRouter = require('./routes/zona');
const carruselRouter = require('./routes/carrusel');

require('dotenv').config();

async function startServer() {
  await dbConnection();
  
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRouter);
app.use('/api/photos', photosRouter); 
app.use('/api/videos', videosRouter);  
app.use('/api/zona', zonaRouter);
app.use('/api/carrusel', carruselRouter);



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

}

startServer();



 