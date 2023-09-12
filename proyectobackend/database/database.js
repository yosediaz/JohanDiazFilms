//database.js
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Base de datos conectada`);
  } catch (error) {
    console.error(`Error al conectar a la base de datos:`, error);
    throw new Error(`Error al conectar a la base de datos`);
  }
};

module.exports = dbConnection;
