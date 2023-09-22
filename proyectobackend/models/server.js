//Models/server.js
const express = require("express");
const cors = require("cors"); 
const dbConnection = require('../database/database');




class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = "/api/usuarios";
    this.mathPath = "/api/math";
    this.authPath = "/api/auth";
    this.photosPath = "/api/photos";
    this.videosPath = "/api/videos";
    this.zonaPath = "/api/zona";
    this.carruselPath = "/api/Carrusel";
    
    

    this.middlewares();
    this.routes();
    this.conectarDB();
  }

  async conectarDB(){
    await dbConnection('usuarios');
    await dbConnection('photos');
    await dbConnection('videos');
    await dbConnection('zona');
    await dbConnection('Carrusel')
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json()); 

    
    this.app.use('/imagenes', express.static('public/Imagenes'));

  }

  routes() {
    this.app.use(this.usuariosPath,require('../routes/usuarios'));
    this.app.use(this.mathPath, require('../routes/maths'));
    this.app.use(this.authPath, require('../routes/usuarios'));
    this.app.use(this.photosPath, require('../routes/photos'));
    this.app.use(this.videosPath, require('../routes/videos'));
    this.app.use(this.zonaPath, require('../routes/zona'));
    this.app.use(this.carruselPath, require('../routes/carrusel'));
   
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);

    });

    this.app.get('/',(_,res)=>{
      res.send('Conexión exitosa')
  });
  }
  
}



module.exports = Server;

