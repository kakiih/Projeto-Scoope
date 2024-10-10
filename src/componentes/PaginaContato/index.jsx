import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contato = () => {
  const gradientCustom = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)',
    padding: '10px',
    borderRadius: '8px',
    color: '#fff',
  };

  return (
    <Container className="py-5" id="contato">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4">Fale Conosco</h1>
          <p className="lead">Entre em contato com a gente para qualquer dúvida ou solicitação.</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4" style={gradientCustom}>
            <Card.Body>
              <h3 className="card-title">Nosso Endereço</h3>
              <p>BR-101 Norte, Km 43,6, Igarassu - PE, Brasil</p>
              <h4>Horário de Funcionamento:</h4>
              <p>Segunda a Sexta: 09:00 - 18:00</p>
              <p>Sábado: 10:00 - 14:00</p>
            </Card.Body>
          </Card>

          <iframe
            title='mapa'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4051796012654!2d-34.91118312594914!3d-7.85259337804306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab14d50f29c135%3A0xb7c10c823a37123b!2sEscola%20T%C3%A9cnica%20Estadual%20Jurandir%20Bezerra%20Lins!5e0!3m2!1spt-BR!2sbr!4v1727715462820!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>

        <Col md={6}>
          <h3>Envie-nos uma mensagem</h3>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" id="name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" id="email" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Digite sua mensagem" required />
            </Form.Group>
            <Button type="submit" style={gradientCustom}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contato;
