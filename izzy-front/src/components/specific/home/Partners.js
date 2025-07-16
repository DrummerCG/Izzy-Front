import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../../styles/home/Partners.css';

const Partners = () => {
  const partnerImages = [
    { src: "/images/CertiProf LOGO.jpg", alt: "Aliado 1", height: '80px' },
    { src: "/images/Logo Arcitura.png", alt: "Aliado 2", height: '60px' },
    { src: "/images/FORMARTE LOGO.png", alt: "Aliado 3", height: '50px' },
    { src: "/images/Credly LOGO.jpg", alt: "Aliado 4", height: '50px' },
    { src: "/images/DigitalSchoolco.webp", alt: "Aliado 5", height: '40px' },
    { src: "/images/SCRU STUDY LOGO.jpg", alt: "Aliado 6", height: '50px' },
    { src: "/images/Intersoftware LOGO.jpg", alt: "Aliado 7", height: '50px' },
    { src: "/images/Brightest LOGO.png", alt: "Aliado 8", height: '70px' },
    { src: "/images/SENA LOGO.png", alt: "Aliado 9", height: '70px' },    
  ];


  return (
    <Container className="my-5 py-5">
      <h1 className="partners-title text-center mb-3">Aliados</h1>
      <p className="text-center">Nuestros entrenamientos, procesos formativos y certificaciones cuentan con el respaldo de empresas que confían en nosotros</p>

      <Row className="justify-content-center align-items-center mt-4">
        {partnerImages.map((partner, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center align-items-center mb-3">
            <Image src={partner.src} alt={partner.alt} className="partner-logo" style={{ height: partner.height, width: 'auto' }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;