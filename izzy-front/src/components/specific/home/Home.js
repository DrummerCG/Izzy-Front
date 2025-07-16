import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Spotlight from './Spotlight';
import Partners from './Partners';
import Register from './Register';

const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <Row >
        <Spotlight />
      </Row>
      <Row>
        <Partners />
      </Row>
      <Row>
        <Register />
      </Row>
    </Container>
  );
}

export default Home;