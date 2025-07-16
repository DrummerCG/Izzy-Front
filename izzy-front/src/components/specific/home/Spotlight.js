import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../../styles/home/Spotlight.css";

const Spotlight = () => {
  return (
    <>
      <h1 className="my-4">Novedades</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.Gvheg6Yf22NQFqyojQMc_wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Nuevo Curso de JavaScript" />
              <Card.Body>
                <Card.Title className="text-center cardtitle">Bienvenidos a IzyAcademy</Card.Title>
                <Card.Text>Explora las últimas características de JavaScript y mejora tus habilidades. Descubre el futuro de la web, encuentra la solución a tus necesidades de desarrollo.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row className="g-4 justify-content-center">
              <Col xs={12} sm={6} lg={6}>
                <Card>
                  <Card.Img variant="top" src="https://image.freepik.com/foto-gratis/hermosa-chica-usando-computadora-portatil-sonriendo_85574-14086.jpg" alt="Curso de React" />
                  <Card.Body>
                    <Card.Title className="text-center cardtitle">Curso de React</Card.Title>
                    <Card.Text>Aprende a desarrollar construyendo aplicaciones web modernas con React.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={6}>
                <Card>
                  <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.okj1B-orwKuIZ4ujQNBPFQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Curso de Node.js" />
                  <Card.Body>
                    <Card.Title className="cardtitle text-center">Curso de Node.js</Card.Title>
                    <Card.Text>Desarrolla aplicaciones del lado del servidor con Node.js.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={6}>
                <Card>
                  <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/chica-libro_1157-5451.jpg" alt="Curso de Python" />
                  <Card.Body>
                    <Card.Title className="text-center cardtitle">Curso de Python</Card.Title>
                    <Card.Text>Domina Python y sus aplicaciones en ciencia de datos y desarrollo web.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={6}>
                <Card>
                  <Card.Img variant="top" src="https://katekyo-peacenet.com/column/wp-content/uploads/2022/10/image1.jpg" alt="Curso de DevOps" />
                  <Card.Body>
                    <Card.Title className="text-center cardtitle">Curso de DevOps</Card.Title>
                    <Card.Text>Aprende las mejores prácticas de DevOps para mejorar la colaboración entre equipos.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Spotlight;