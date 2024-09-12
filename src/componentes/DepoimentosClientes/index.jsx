import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const depoimentos = [
  { texto: 'Excelente serviço! Minha viagem a Paris foi incrível.', autor: 'Maria Silva' },
  { texto: 'Ótima experiência em Nova York. Recomendo a todos.', autor: 'João Pereira' },
  { texto: 'A equipe ajudou a planejar tudo para Tóquio. Foi perfeito!', autor: 'Ana Costa' },
  { texto: 'Atendimento impecável e destinos maravilhosos. Volto em breve!', autor: 'Pedro Almeida' },
  { texto: 'A melhor agência de viagens que já usei. Experiência sensacional.', autor: 'Camila Fernandes' },
];

function Depoimentos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">O que nossos clientes dizem</h2>
      <Carousel controls={true} indicators={true} interval={5000}>
        {depoimentos.map((depoimento, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <div className="p-4 border rounded" style={{ maxWidth: '600px', textAlign: 'center', backgroundColor: '#f7f7f7f8' }}>
                <blockquote className="blockquote">
                  <p className="mb-0">{depoimento.texto}</p>
                  <footer className="blockquote-footer mt-3">
                    {depoimento.autor}
                  </footer>
                </blockquote>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Depoimentos;
