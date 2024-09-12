import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function ChamadaParaAcao() {
  return (
    <div className="container mt-5 p-5 text-center" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Receba Nossas Novidades</h2>
          <p>Inscreva-se na nossa newsletter para receber as últimas ofertas e novidades.</p>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          <Form className="w-100 d-flex flex-column align-items-center">
            <Form.Control 
              type="email" 
              placeholder="Seu e-mail" 
              style={{ maxWidth: '400px', marginBottom: '10px' }} // Margem inferior para espaçamento vertical
            />
            <Button variant="primary">Inscrever-se</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default ChamadaParaAcao;
