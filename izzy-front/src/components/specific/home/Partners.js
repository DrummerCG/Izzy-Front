import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../../styles/home/Partners.css';

const Partners = () => {
  const partnerLogos = new Array(5).fill('/images/logo_actualizado IZY.png');

  return (
    <Container className="my-5 py-5">
      <h1 className="partners-title text-center mb-3">Aliados</h1>
      <p className="text-center">Nuestros entrenamientos, procesos formativos y certificaciones cuentan con el respaldo de empresas que confían en nosotros</p>
      <div className="d-flex justify-content-around align-items-center mt-4">
            <Image src="/images/CertiProf LOGO.jpg" alt="Aliado 1" className="partner-logo" style={{ height: '80px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/Logo Arcitura.png" alt="Aliado 2" className="partner-logo" style={{ height: '60px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/FORMARTE LOGO.png" alt="Aliado 3" className="partner-logo" style={{ height: '50px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/Credly LOGO.jpg" alt="Aliado 4" className="partner-logo" style={{ height: '50px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/DigitalSchoolco.webp" alt="Aliado 5" className="partner-logo" style={{ height: '40px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/SCRU STUDY LOGO.jpg" alt="Aliado 6" className="partner-logo" style={{ height: '50px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/Intersoftware LOGO.jpg" alt="Aliado 7" className="partner-logo" style={{ height: '50px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/Brightest LOGO.png" alt="Aliado 8" className="partner-logo" style={{ height: '70px', width: 'auto', margin: '0 6px' }} />
            <Image src="/images/SENA LOGO.png" alt="Aliado 9" className="partner-logo" style={{ height: '70px', width: 'auto', margin: '0 6px' }} />
        </div>
      <Row className="justify-content-center align-items-center">
        {partnerLogos.map((logo, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="text-center mb-4 mb-md-0">
            <Image src={logo} alt={`Aliado ${index + 1}`} fluid style={{ maxHeight: '40px', filter: 'grayscale(100%)', opacity: 0.6 }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
