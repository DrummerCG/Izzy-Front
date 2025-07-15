import React from 'react';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/header/Header.css';
import UserOptions from '../user/UserOptions';

const Header = () => {
  return (
    <Navbar className="headerContainer" expand="lg">
        <div id ='brandContainer' className='brandContainer d-flex align-items-center'>
            <Image src="/images/logo_actualizado IZY.png" className="d-inline-block align-top" alt="Izzy Logo" />
        </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex flex-column flex-lg-row align-items-center">
            <Nav.Item className='navItem'>
              <Link to='/'>
                 Inicio
              </Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Link to='/learning-paths'>
                 Rutas de Aprendizaje
              </Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Link to='/courses'>
                 Cursos
              </Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Link to='/about'>
                 Quienes Somos
              </Link>
            </Nav.Item>
        </Nav>
        <UserOptions />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
