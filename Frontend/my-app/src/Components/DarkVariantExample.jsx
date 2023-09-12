/*import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarruselComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/carrusel');
        if (!response.ok) {
          throw new Error('Error fetching carousel images');
        }
        
       
  const data = await response.json();
  
        // Construir la URL completa para las imágenes
        const serverUrl = 'http://localhost:8080'; // Cambia esto si tu URL base es diferente
        const imagesWithFullUrl = data.map((image) => ({
          ...image,
          imageUrl: `${serverUrl}/${image.imageUrl}`,
        }));
  
        setImages(imagesWithFullUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.imageUrl} // Asegúrate de que la propiedad sea imageUrl (o la que corresponda)
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h5>{image.description}</h5>
            <p>{image.title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselComponent;*/
