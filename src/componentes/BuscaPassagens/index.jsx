import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'; // Importar o CSS

function BuscaViagens() {
  const [formData, setFormData] = useState({
    origem: '',
    destino: '',
    dataPartida: '',
    dataRetorno: '',
    numPassageiros: 1,
    classe: 'Econômica',
    tipoViagem: 'Ida e Volta',
    preferencias: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  const gradientCustom4 = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)',
    border: 'none',
    padding: '10px 20px', 
    fontSize: '18px'
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Buscar Viagens</h2>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col md={6} className="mb-3">
              <Form.Group controlId="formOrigem">
                <Form.Label>Saída de:</Form.Label>
                <Form.Control
                  type="text"
                  name="origem"
                  value={formData.origem}
                  onChange={handleChange}
                  placeholder="Cidade ou aeroporto de origem"
                  required
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formDestino">
                <Form.Label>Destino</Form.Label>
                <Form.Control
                  type="text"
                  name="destino"
                  value={formData.destino}
                  onChange={handleChange}
                  placeholder="Cidade ou aeroporto de destino"
                  required
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="mb-3">
              <Form.Group controlId="formDataPartida">
                <Form.Label>Data de Partida</Form.Label>
                <Form.Control
                  type="date"
                  name="dataPartida"
                  value={formData.dataPartida}
                  onChange={handleChange}
                  required
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formDataRetorno">
                <Form.Label>Data de Retorno</Form.Label>
                <Form.Control
                  type="date"
                  name="dataRetorno"
                  value={formData.dataRetorno}
                  onChange={handleChange}
                  required
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="mb-3">
              <Form.Group controlId="formNumPassageiros">
                <Form.Label>Número de Passageiros</Form.Label>
                <Form.Control
                  type="number"
                  name="numPassageiros"
                  value={formData.numPassageiros}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formClasse">
                <Form.Label>Classe</Form.Label>
                <Form.Control
                  as="select"
                  name="classe"
                  value={formData.classe}
                  onChange={handleChange}
                  required
                  className="rounded-input"
                >
                  <option value="Econômica">Econômica</option>
                  <option value="Executiva">Executiva</option>
                  <option value="Primeira Classe">Primeira Classe</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="mb-3">
              <Form.Group controlId="formTipoViagem">
                <Form.Label>Tipo de Viagem</Form.Label>
                <Form.Control
                  as="select"
                  name="tipoViagem"
                  value={formData.tipoViagem}
                  onChange={handleChange}
                  required
                  className="rounded-input"
                >
                  <option value="Ida e Volta">Ida e Volta</option>
                  <option value="Somente Ida">Somente Ida</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group controlId="formPreferencias">
                <Form.Label>Preferências Adicionais</Form.Label>
                <Form.Control
                  type="text"
                  name="preferencias"
                  value={formData.preferencias}
                  onChange={handleChange}
                  placeholder="Ex.: Tipo de acomodação, refeições especiais, etc."
                  className="rounded-input"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" style={gradientCustom4}>
              Buscar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default BuscaViagens;
