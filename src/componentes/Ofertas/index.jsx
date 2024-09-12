import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ofertas = [
  { titulo: 'Pacote Paris 7 dias', descricao: 'Inclui voo e hotel com desconto.', preco: 'R$ 4.000', imagem: 'https://picsum.photos/seed/paris-offer/400/300' },
  { titulo: 'Nova York - 3 noites', descricao: 'Apenas hospedagem com café da manhã.', preco: 'R$ 1.500', imagem: 'https://picsum.photos/seed/nyc-offer/400/300' },
  { titulo: 'Tóquio - Tour Completo', descricao: 'Inclui passeios e transporte.', preco: 'R$ 6.000', imagem: 'https://picsum.photos/seed/tokyo-offer/400/300' },
];

function OfertasPromoções() {
  return (
    <div className="container mt-5">
      <h2>Ofertas e Promoções</h2>
      <div className="row">
        {ofertas.map((oferta, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={oferta.imagem} alt={`Imagem de oferta ${oferta.titulo}`} />
              <Card.Body>
                <Card.Title>{oferta.titulo}</Card.Title>
                <Card.Text>{oferta.descricao}</Card.Text>
                <Card.Text><strong>{oferta.preco}</strong></Card.Text>
                <Button variant="danger">Aproveite</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfertasPromoções;
