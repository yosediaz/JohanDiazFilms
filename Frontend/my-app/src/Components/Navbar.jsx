import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NavBarExample = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        className="navBg"
        collapseOnSelect
        expand="lg"
        bg="gray"
        variant="gray"
      >
        <Container id="containerBarra">
          {/* Logo y enlace a la página principal */}
          <Navbar.Brand as={Link} to="/">
            <img src="./img/LogoFilms.png" width="90" alt="Logo" />
          </Navbar.Brand>

          {/* Botón para colapsar el menú en dispositivos móviles */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />

          {/* Menú desplegable */}
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Mueve el componente Nav a la derecha */}
            <Nav className="ml-auto">
              {/* Enlaces de navegación */}
              <div id="links">
                <Nav.Link id="lista" as={Link} to="/Inicio">
                  <span>Inicio</span>
                </Nav.Link>
                <Nav.Link id="lista" as={Link} to="/Videos">
                  <span>Videos</span>
                </Nav.Link>
                <Nav.Link id="lista" as={Link} to="/Fotos">
                  <span>Fotos</span>
                </Nav.Link>
                
              </div>

              <div className="redes">
              
               <a href="https://www.instagram.com/johandiazfilms/"> <img src="./img/logoinstagram.jpg" alt="Instagram" width="45" id="iconos"/> </a> 
         
               <a href="https://www.youtube.com/@johandiazfilms"> <img src="./img/logoyoutube.jpg" width="45" alt="Logo" id="iconos"/> </a>

               <a href="https://www.whatsapp.com/catalog/14026763971/?app_absent=0"> <img src="./img/logowhatsapp.jpg" width="45" alt="Logo"id="iconos"/> </a>
          
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido de la página */}
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default NavBarExample;