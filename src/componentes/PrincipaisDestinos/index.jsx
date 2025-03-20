import React from "react";
import { Card, Button } from "react-bootstrap";
import "./index.scss";
import { Link } from "react-router-dom";

const destinos = [
  {
    nome: "Cataratas Do Iguaçu",
    imagem:
      "https://images.pexels.com/photos/27986328/pexels-photo-27986328/free-photo-of-panorama-vista-paisagem-natureza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao: "Aglomerado de cachoeiras em foz do iguaçu",
    redirecionamento: "/fozdoiguacu",
    preco: "R$ 3100",
  },
  {
    nome: "Rio de janeiro",
    imagem:
      "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao: "A cidade maravilhosa.",
    redirecionamento: "/riodejaneiro",
    preco: "R$ 2900",
  },
  {
    nome: "Salvador",
    imagem:
      "https://images.pexels.com/photos/27856777/pexels-photo-27856777/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao: "Um centro historico brasileiro ao ar livre.",
    redirecionamento: "/salvador",
    preco: "R$ 2200",
  },
  {
    nome: "Recife",
    imagem: "https://emrecife.com.br/wp-content/uploads/2024/01/Recife-2.jpg",
    descricao: "Conhecida por suas pontes, praia e cultura.",
    redirecionamento: "/recife",
    preco: "R$ 1700",
  },
  {
    nome: "Lencóis Maranhenses",
    imagem:
      "https://images.pexels.com/photos/27688578/pexels-photo-27688578/free-photo-of-natureza-agua-deserto-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao: "Belissimas paisagens.",
    redirecionamento: "/lencoismaranhenses",
    preco: "R$ 2300",
  },
  {
    nome: "São Paulo",
    imagem:
      "https://images.pexels.com/photos/19767241/pexels-photo-19767241/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao: "A maior metropole da america do sul.",
    redirecionamento: "/saopaulo",
    preco: "R$ 2800",
  },
];

function DestaquesDestinos() {
  return (
    <div className="container mt-5">
      <h2> Destinos Mais Procurados</h2>
      <div className="row">
        {destinos.map((destino, index) => (
          <div className="col-md-4 mb-4" key={index}>
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
                  <strong>{destino.preco}</strong>
                </Card.Text>
                <Link to={destino.redirecionamento}>
                  <Button variant="primary">Saiba Mais</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestaquesDestinos;
