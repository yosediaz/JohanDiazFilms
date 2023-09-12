import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado

function MapComponent() {
  const [mapImage, setMapImage] = useState(null);

  useEffect(() => {
    const fetchMapImage = async () => {
      try {
        const response = await axios.get('/api/zona/mapa'); // Reemplaza '/api/zona/mapa' con la URL correcta de tu backend
        if (response.status === 200) {
          setMapImage(URL.createObjectURL(new Blob([response.data])));
        } else {
          console.error('Error al cargar la imagen del mapa');
        }
      } catch (error) {
        console.error('Error al cargar la imagen del mapa:', error);
      }
    };

    fetchMapImage();
  }, []);

  return (
    <div>
      <h1>Mapa de Nebraska, Estados Unidos</h1>
      {mapImage ? (
        <img src={mapImage} alt="Mapa de Nebraska" />
      ) : (
        <p>Cargando el mapa...</p>
      )}
    </div>
  );
}

export default MapComponent;
