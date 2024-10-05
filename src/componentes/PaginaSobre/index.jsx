import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './index.scss'; // Arquivo de estilização separado

const SobreNos = () => {
  const gradientCustom = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)',
    padding: '10px',
    borderRadius: '8px',
    color: '#fff'
  };

  return (
    <Container fluid className="py-5" id="sobre-nos">

        <Row className="text-center mb-4">
          <Col>
            <h1 className="display-4">Quem Somos</h1>
            <p className="lead">Conheça nossa história, missão, visão e valores.</p>
          </Col>
        </Row>

      {/* Seção sobre a empresa */}
      <Row className="align-items-center mb-5">
        <Col md={5} className="text-center">
          <Image id="imagemdaempresa" src="https://i.imgur.com/jnBApsw.png" fluid rounded />
        </Col>
        <Col md={5}>
          <h2>Sobre a Empresa</h2>
          <p>
            Fundada em 2024, a Scoope tem se dedicado a proporcionar as melhores experiências
            de viagens para todos os tipos de viajantes. Com uma equipe altamente capacitada e uma paixão por
            explorar o mundo, estamos sempre em busca das melhores opções de pacotes e passagens aéreas para nossos clientes.
          </p>
          <p>
            Atuamos com um compromisso inabalável com a satisfação do cliente e uma atenção especial aos detalhes, 
            garantindo que cada viagem seja única, segura e inesquecível.
          </p>
        </Col>
      </Row>

      {/* Missão, Visão e Valores */}
      <Row className="text-center mb-5">
        <Col md={4}>
          <Card style={gradientCustom} className="mb-3">
            <Card.Body>
              <Card.Title>Missão</Card.Title>
              <Card.Text>
                Nossa missão é tornar o mundo acessível a todos, oferecendo soluções de viagem seguras,
                confortáveis e acessíveis, sempre com um atendimento diferenciado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={gradientCustom} className="mb-3">
            <Card.Body>
              <Card.Title>Visão</Card.Title>
              <Card.Text>
                Ser reconhecida como a principal empresa de turismo e viagens, conhecida pela inovação, 
                confiança e qualidade de nossos serviços.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={gradientCustom} className="mb-3">
            <Card.Body>
              <Card.Title>Valores</Card.Title>
              <Card.Text>
                Transparência, inovação, compromisso com o cliente e paixão por viagens são os pilares 
                que guiam cada uma de nossas decisões e ações.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

{/* Nossa Proposta */}
<Row className="text-center mb-5">
  <Col>
    <h2 className="display-5">Nossa Proposta</h2>
    <p className="lead mb-4">Saiba o que oferecemos de melhor e o que nos diferencia no mercado de viagens.</p>
  </Col>
</Row>

<Row className="justify-content-center mb-5">
  <Col md={4} className="mb-4">
    <Card style={{ background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)', color: '#fff' }} className="p-3">
      <Card.Body>
        <Card.Title>Atendimento Personalizado</Card.Title>
        <Card.Text>
          Cada cliente é único para nós. Nossos especialistas planejam sua viagem com base nas suas preferências, garantindo uma experiência exclusiva.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="mb-4">
    <Card style={{ background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)', color: '#fff' }} className="p-3">
      <Card.Body>
        <Card.Title>Facilidade e Conveniência</Card.Title>
        <Card.Text>
          Nossa plataforma foi projetada para ser intuitiva e fácil de usar, permitindo que você reserve suas viagens de forma rápida e sem complicações.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="mb-4">
    <Card style={{ background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)', color: '#fff' }} className="p-3">
      <Card.Body>
        <Card.Title>Inovação Constante</Card.Title>
        <Card.Text>
          Estamos sempre em busca de novas tecnologias e parcerias para melhorar nossos serviços e garantir que você tenha sempre as melhores opções de viagens.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>


    </Container>
  );
};

export default SobreNos;
