import React from 'react';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/header/Header.css';
import UserOptions from '../user/UserOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar className="headerContainer parallax flex-column" expand="lg" variant="dark">
      <div id='navigationContainer' className='text-start w-100'>
        <div className='d-flex align-items-center'>
          <div id='brandContainer' className='brandContainer d-flex align-items-center'>
            <Image src="/images/logo_actualizado IZY.png" className="logo-img d-inline-block" alt="Izzy Logo" />
          </div>
          <div id='navigationOptions' className="d-flex align-items-center flex-grow-1 justify-content-end navigation-options">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='sm-12'/>
            <Navbar.Collapse id="basic-navbar-nav" className='sm-12'>
              <Nav className="me-auto d-flex flex-column flex-lg-row align-items-center">
                <Nav.Item className='navItem'>
                  <Link className='title link' to='/'>
                    Inicio
                  </Link>
                </Nav.Item>
                <NavDropdown title="Rutas de Formación" id="learning-paths-dropdown" className='navItem title link'>
                  <NavDropdown.Item as={Link} to="/learning-paths/data-scientist">Científico de datos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/learning-paths/dotnet">Ruta de formación en .Net</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/learning-paths/automation">Ruta de formación en automatización</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cursos" id="courses-dropdown" className='navItem title link'>
                  <NavDropdown.Item as={Link} to="/courses/web-apps">Aplicaciones web</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/courses/web-api">Web API</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/courses/secure-apps">Aplicaciones seguras.</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className='navItem'>
                  <Link className='title link' to='/about'>
                    Quiénes Somos
                  </Link>
                </Nav.Item>
              </Nav>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} className="link me-2" />
                <UserOptions />
                <div className="vertical-separator" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="link" style={{ cursor: 'pointer' }} />
              </div>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
      <div id='bannerContainer' className='w-100 -center align-items-center text-center'>
        <h1 style={{ marginTop: '80px', marginBottom: '40px', fontFamily: 'Nunito, sans-serif', 'fontSize': '50px', 'fontWeight': 'bold'}}>Continúa tu formación con IzyAcademy</h1>
        <p style={{ marginTop: '10px', marginBottom: '200px', fontFamily: 'Open Sans, sans-serif', 'fontSize': '16px' }}>Te ofrecemos una experiencia de aprendizaje basada en la formación por proyectos,<br /> apoyada en recursos interactivos para que tu aprendizaje sea efectivo.</p>
      </div>
    </Navbar>
  );
}

export default Header;