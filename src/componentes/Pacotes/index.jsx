import React from "react";
import { Card, Button } from "react-bootstrap";
// import "./index.scss";
import { Link } from "react-router-dom";

const destinos = [
  {
    nome: "Bonito",
    imagem:
      "https://www.turismo.ms.gov.br/wp-content/uploads/2021/10/Barra-do-Sucuri-Visit-Bonito-730x425-1.png",
    descricao: "Belezas naturais e ecoturismo no Mato Grosso do Sul.",
    redirecionamento: "/bonito",
    preco: "R$ 2500",
  },
  {
    nome: "Gramado",
    imagem:
      "https://media.gazetadopovo.com.br/2022/09/17194513/Gramado-tem-atrativos-o-ano-inteiro.-Vale-a-pena-conhecer-cada-pedaC3A7o-da-cidade-seja-qual-for-a-C3A9poca-da-sua-viagem.-960x540.jpg",
    descricao: "Destino europeu no sul do Brasil.",
    redirecionamento: "/gramado",
    preco: "R$ 3000",
  },
  {
    nome: "Chapada Diamantina",
    imagem:
      "https://www.adventureclub.com.br/wp-content/uploads/2023/03/poco-azul-chapada-diamantina-topo-80.jpg",
    descricao: "Paisagens incríveis e trilhas na Bahia.",
    redirecionamento: "/chapadadiamantina",
    preco: "R$ 2300",
  },
  {
    nome: "Jericoacoara",
    imagem:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/ba/0b/99.jpg",
    descricao: "Dunas, mar cristalino e um pôr do sol inesquecível.",
    redirecionamento: "/jericoacoara",
    preco: "R$ 2700",
  },
  {
    nome: "Porto de galinhas",
    imagem:
      "https://www.jaraguaturismo.com/wp-content/uploads/2024/05/Porto-de-Galinhas.jpg",
    descricao: "Praia paradisíaca em pernambuco.",
    redirecionamento: "/florianopolis",
    preco: "R$ 2800",
  },
  {
    nome: "Fernando de Noronha",
    imagem:
      "https://www.rodamundo.tur.br/blog/wp-content/uploads/2019/03/Ba%C3%ADa-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg",
    descricao: "Um dos destinos mais belos do Brasil.",
    redirecionamento: "/fernandodenoronha",
    preco: "R$ 4500",
  },
];

function Pacotes() {
  return (
    <div className="container mt-5">
      <h2> Pacotes de Viagem</h2>
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

export default Pacotes;
