import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios"; // Importar axios
import Loading from "../../animations/Loading"; // Asegúrate de que la ruta sea correcta
import "../../../styles/home/Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Validaciones
  const isFirstNameValid = firstName.trim().length > 0;
  const isLastNameValid = lastName.trim().length > 0;
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 8;
  const doPasswordsMatch = password === confirmPassword;

  const isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    doPasswordsMatch &&
    termsAccepted &&
    policyAccepted;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); 

    if (!isFormValid) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log('Registro exitoso:', response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error de conexión o registro fallido.');
      console.error('Error de registro:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end align-items-center mb-4 mb-md-0">
          <Image src="/images/Izy form register.png" alt="Ilustración de registro" fluid style={{ maxWidth: '400px' }} />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
          <div className="register-container">
            <h1 className="register-title">Regístrate</h1>
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div className="text-center text-danger mb-3">{error}</div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      isInvalid={firstName.length > 0 && !isFirstNameValid}
                    />
                    <Form.Control.Feedback type="invalid">
                      El nombre no puede estar vacío.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tus apellidos"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      isInvalid={lastName.length > 0 && !isLastNameValid}
                    />
                    <Form.Control.Feedback type="invalid">
                      El apellido no puede estar vacío.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={email.length > 0 && !isEmailValid}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa un correo electrónico válido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={password.length > 0 && !isPasswordValid}
                  />
                  <Form.Control.Feedback type="invalid">
                    La contraseña debe tener al menos 8 caracteres.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isInvalid={confirmPassword.length > 0 && !doPasswordsMatch}
                  />
                  <Form.Control.Feedback type="invalid">
                    Las contraseñas no coinciden.
                  </Form.Control.Feedback>
                </Form.Group>

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
                  disabled={!isFormValid}
                  className={!isFormValid ? "disabled-button" : ""}
                >
                  Registrarse
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;