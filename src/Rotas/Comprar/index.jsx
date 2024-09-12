import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './index.scss'; // Importa o arquivo de estilos

const CompraDestino = ({ destino }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={destino.imagem}
              alt={`Imagem de ${destino.nome}`}
            />
            <Card.Body>
              <Card.Title>{destino.nome}</Card.Title>
              <Card.Text>{destino.descricao}</Card.Text>
              <Card.Text>
                Pacote básico inclui:
                <ul>
                  <li>Transporte de ida e volta</li>
                  <li>Guias especializados</li>
                  <li>Entradas para atrações</li>
                  <li>Opções de passeios adicionais</li>
                </ul>
              </Card.Text>
              <Button variant="primary" href="#compra">Comprar Pacote</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h3>Detalhes da Compra</h3>
          <p>Escolha o pacote que melhor se adapta às suas necessidades e aproveite uma experiência inesquecível. Os pacotes incluem transporte, guias especializados e uma variedade de opções de passeios.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome Completo</label>
              <input type="text" className="form-control" id="nome" placeholder="Seu nome completo" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Seu e-mail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input type="tel" className="form-control" id="telefone" placeholder="Seu telefone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="quantidade" className="form-label">Quantidade de Pessoas</label>
              <input type="number" className="form-control" id="quantidade" placeholder="Número de pessoas" min="1" required />
            </div>
            <Button variant="primary" type="submit">Finalizar Compra</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CompraDestino;
