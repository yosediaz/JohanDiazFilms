import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (

    <div className='carousel'>
        <Carousel >
        <Carousel.Item interval={1000}>
        <img src="./img/carrusel1.jpg" alt="Logo" />
            <Carousel.Caption>
            <h3>Videos Profesionales</h3>
            <p>Cuentanos tu proyecto y lo hacemos realidad.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src="./img/carrusel3.jpg" alt="Logo" />
            <Carousel.Caption>
            <h3>Capturamos cada momento</h3>
            <p>
            Tu día será especial para toda la vida.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src="./img/carrusel4.jpg" alt="Logo" />
            <Carousel.Caption>
            <h3>Videos Comerciales</h3>
            <p>
                Tenemos los mejores efectos.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src="./img/carrusel5.jpg" alt="Logo" />
            <Carousel.Caption>
            <h3>Videos Musicales</h3>
            <p>
                Has tus sueños realidad.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src="./img/boda.png" alt="Logo" />
            <Carousel.Caption>
            <h3>Fotos  y Videos</h3>
            <p>
                Para todos los eventos.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    </div>
  );
}

export default IndividualIntervalsExample;