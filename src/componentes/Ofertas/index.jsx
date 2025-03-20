import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ofertas = [
  {
    titulo: "Pacote Belo Horizonte - 4 dias",
    descricao: "Inclui voo e hospedagem com café da manhã.",
    preco: "R$ 2.500",
    imagem:
      "https://images.pexels.com/photos/11589770/pexels-photo-11589770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    redirecionamento: "/belohorizonte",
  },
  {
    titulo: "Florianópolis - 5 noites",
    descricao: "Hospedagem em hotel próximo à praia e passeios incluídos.",
    preco: "R$ 3.000",
    imagem: "https://maisviagens.net.br/wp-content/uploads/2022/01/FLORIPA.jpg",
    redirecionamento: "/florianopolis",
  },
  {
    titulo: "Curitiba - 3 noites",
    descricao:
      "Inclui hospedagem e passeios pelos principais pontos turísticos.",
    preco: "R$ 1.800",
    imagem:
      "https://images.pexels.com/photos/28412016/pexels-photo-28412016/free-photo-of-parque-barigui-curitiba-parana-brasil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    redirecionamento: "/curitiba",
  },
];

function OfertasPromoções() {
  return (
    <div className="container mt-5">
      <h2>Ofertas e Promoções</h2>
      <div className="row">
        {ofertas.map((oferta, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={oferta.imagem}
                alt={`Imagem de oferta ${oferta.titulo}`}
              />
              <Card.Body>
                <Card.Title>{oferta.titulo}</Card.Title>
                <Card.Text>{oferta.descricao}</Card.Text>
                <Card.Text>
                  <strong>{oferta.preco}</strong>
                </Card.Text>
                <Link to={oferta.redirecionamento}>
                  <Button variant="danger">Aproveite</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfertasPromoções;
