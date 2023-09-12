import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Maps = () => {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (window.google) {
        // Función para inicializar el mapa
        const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.500000, lng:  -100.000000 }, // Coordenadas iniciales
        zoom: 12, // Nivel de zoom inicial
      });
      
      // Agregar marcador en la ubicación
      new window.google.maps.Marker({
        position: { lat: 41.257160, lng: -95.995102 },
        map: map,
      });
    };
    
    // Llamar a la función de inicialización del mapa
    initMap();
}
}, []); // El segundo argumento vacío asegura que se ejecute solo una vez después de montar el componente

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/zona/verificar-zona', { address });
      setMessage(response.data.mensaje);
    } catch (error) {
      console.error('Error al consultar la zona:', error);
      setMessage('Error al consultar la zona');
    }
  };

  return (

    <div className='zona'>

      <div >
  
        <h6 className='verificarzona'>Verifica si el lugar a realizar tu evento está dentro de nuestra área de trabajo</h6>
        <form onSubmit={handleSubmit}>
          <label>
            Dirección o Localidad:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button type="submit">Consultar Zona</button>
        </form>
        <div>
          {message && <p>{message}</p>}
        </div>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
    
    </div>

    

  );
};

export default Maps;






