import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "../../../styles/home/Register.css"; 

const Register = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const isButtonDisabled = !(termsAccepted && policyAccepted);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isButtonDisabled) {
      return; // No hacer nada si el botón está deshabilitado
    }

    // Aquí iría la lógica para procesar el registro
    console.log("Formulario enviado con éxito");
    // Puedes resetear el formulario o redirigir al usuario si es necesario
  };
  
  return (
    <Container className="my-5">
      {/* The Row now aligns items to the center for better vertical alignment */}
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="d-flex justify-content-end align-items-center">
          <Image
            src="/images/Izy form register.png" 
            alt="Ilustración de registro"
            fluid
            style={{ maxWidth: '576px', marginRight: '100px' }}
          />
        </Col>
        {/* The form column is justified to the start to appear next to the image */}
        <Col md={6} className="d-flex align-items-center justify-content-start">
          <div className="register-container">
            <h1 className="register-title">Regístrate</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tus apellidos" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Confirma tu contraseña" />
              </Form.Group>

               {/* Checkboxes controlados ahora actualizan el estado */}
              <Form.Check
                type="checkbox"
                label="Acepto los términos y condiciones"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mb-3"
              />
              <Form.Check
                type="checkbox"
                label="Acepto política y tratamiento de datos"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                className="mb-3"
              />

              <Button
                variant="primary"
                type="submit"
                disabled={isButtonDisabled}
                className={isButtonDisabled ? "disabled-button" : ""}
              >
                Registrarse
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
