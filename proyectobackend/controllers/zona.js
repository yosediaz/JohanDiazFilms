// controllers/zona.js
const axios = require('axios');


const verificarZona = async (req, res) => {
  const { address } = req.body;

  try {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    const response = await axios.get(apiUrl);

    if (response.data.results.length === 0) {
      // No se pudo encontrar la ubicación
      return res.status(400).json({ mensaje: 'No se pudo encontrar la ubicación.' });
    }

    const { lat, lng } = response.data.results[0].geometry.location;

    const estaEnZona = verificarUbicacionEnZona(lat, lng);

    if (estaEnZona) {
      return res.json({ mensaje: 'La ubicación está dentro de la zona delimitada.' });
    } else {
      return res.json({ mensaje: 'La ubicación está fuera de la zona delimitada.' });
    }
  } catch (error) {
    console.error('Error al verificar la zona:', error);
    return res.status(500).json({ mensaje: 'Error al verificar la zona', error: error.message });
  }
};



const verificarUbicacionEnZona = (latitude, longitude) => {
  // Coordenadas de la zona delimitada
  const zonaLatitude = 41.257160;
  const zonaLongitude = -95.995102;

  // Lógica para verificar si la ubicación está dentro de la zona
  const distancia = calcularDistancia(latitude, longitude, zonaLatitude, zonaLongitude);
  const umbralDistancia = 10; // por ejemplo, 10 kilómetros
  const estaEnZona = distancia < umbralDistancia;

  return estaEnZona;
};

const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  // Lógica para calcular la distancia entre dos coordenadas
  const distancia = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2));
  return distancia;
};

module.exports = {
  verificarZona,
};

