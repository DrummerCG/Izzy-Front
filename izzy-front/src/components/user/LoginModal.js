import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Loading from '../animations/Loading';

const LoginModal = ({ show, onHide }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = async () => {
    if (isFormValid) {
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:8080/auth/login', { email, password });
        console.log('Login successful:', response.data);
      } catch (error) {
        setError(error.message ? error.message : 'Error de conexión');
        console.error('Login failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Inicie Sesión en su cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          <RenderContent
            isLoading={isLoading}
            error={error}
            email={email}
            isEmailValid={isEmailValid}
            password={password}
            isPasswordValid={isPasswordValid}
            setEmail={setEmail}
            setPassword={setPassword}
          />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button className='button'
          variant="primary"
          onClick={handleLogin}
          disabled={!isFormValid}
        >
          Acceder
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const RenderContent = ({ isLoading, error, email, isEmailValid, password, isPasswordValid, setEmail, setPassword }) => {
    if (isLoading) {
      return <Loading />;
    }
    else if (error) {
      return <div className="text-center">{error.message}</div>;
    }
    else {
      return (
        <Form className="w-100" style={{ maxWidth: 350 }}>
            <Form.Group className='mb-3' controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={e => setEmail(e.target.value)}
                isInvalid={email && !isEmailValid}
              />
              <Form.Control.Feedback type="invalid">
                Ingresa un correo válido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                isInvalid={password && !isPasswordValid}
              />
              <Form.Control.Feedback type="invalid">
                La contraseña debe tener al menos 8 caracteres.
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
      )
    }
  }


export default LoginModal;
