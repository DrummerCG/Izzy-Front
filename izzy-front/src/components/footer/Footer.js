import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../styles/footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container text-white pt-5 pb-4">
      <Container id='footerListsContainer'>
        <Row className="text-start">
          <Col md>
            <h6 className="footer-title">Contáctanos</h6>
            <ul id='contactUsList' className="footer-list">
              <li>WhatsApp: +300 255 02 65</li>
              <li>Email: comercial@qvision.us</li>
              <li>Comunícate con nosotros</li>
            </ul>
          </Col>
          <Col md>
            <h6 className="footer-title">Categorías de cursos</h6>
            <ul id='categoriesList' className="footer-list">
              <li>Desarrollo</li>
              <li>Metodología de Pruebas</li>
              <li>Pruebas Funcionales</li>
              <li>Pruebas No Funcionales</li>
              <li>DevOps</li>
              <li>Cloud</li>
              <li>Automatización</li>
            </ul>
          </Col>
          <Col md>
            <h6 className="footer-title">Certificaciones</h6>
            <ul id='certificationsList' className="footer-list">
              <li>Scrum Master</li>
              <li>Scrum Product Owner</li>
              <li>Scrum Developer</li>
              <li>Agile Coach</li>
              <li>Design Thinking</li>
              <li>Kanban</li>
              <li>OKR</li>
              <li>DevOps</li>
            </ul>
          </Col>
          <Col md >
            <h6 className="footer-title">Q-Vision Technologies</h6>
            <ul id='qVisionList' className="footer-list">
              <li>Desarrollo de Software</li>
              <li>Aseguramiento de Calidad</li>
              <li>Automatización de Procesos</li>
              <li>Con RPA</li>
              <li>IT Staffing</li>
              <li>Cesión Inteligente de Datos</li>
            </ul>
          </Col>
          <Col md>
            <h6 className="footer-title">Soporte</h6>
            Si tienes inconvenientes o dudas, contáctanos al correo izyacademy@qvision.us
          </Col>
        </Row>
      </Container>
      <Container>
        <hr className="footer-divider" />
      </Container>
      <Row className="align-items-center py-3">
        <Col md className="text-center text-md-start mb-3 mb-md-0">
          <img src="/images/logo_actualizado IZY.png" alt="IzyAcademy Logo" style={{ height: '40px', position: 'relative', left: '30px' }} />
        </Col>
        <Col md className="text-center mb-3 mb-md-0">
          <p className="footer-text mb-0"><b>Términos y Condiciones - Política Tratamiento de Datos</b></p>
        </Col>
        <Col md className="text-center text-md-end" style={{ position: 'relative', right: '300px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link me-3">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link me-3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link me-3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Col>
      </Row>
      <div id='copyrightContainer' className="text-center p-3" >
        © {new Date().getFullYear()} IzyAcademy Marca Registrada By Qvision Technologies.
      </div>
    </footer>
  );
}

export default Footer;
