import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./index.scss"
import { Link } from 'react-router-dom';

const destinos = [
  { nome: 'Cataratas Do Iguaçu', imagem: 'https://images.pexels.com/photos/27986328/pexels-photo-27986328/free-photo-of-panorama-vista-paisagem-natureza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'Aglomerado de cachoeiras em foz do iguaçu' },
  { nome: 'Rio de janeiro', imagem: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'A cidade maravilhosa.' },
  { nome: 'Salvador', imagem: 'https://images.pexels.com/photos/27856777/pexels-photo-27856777/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'Um centro historico brasileiro ao ar livre.' },
  { nome: 'Recife', imagem: 'https://images.pexels.com/photos/12988107/pexels-photo-12988107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'Conhecida por suas pontes, praia e cultura.' },
  { nome: 'Lencóis Maranhenses', imagem: 'https://images.pexels.com/photos/27688578/pexels-photo-27688578/free-photo-of-natureza-agua-deserto-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'Belissimas paisagens.' },
  { nome: 'São Paulo', imagem: 'https://images.pexels.com/photos/19767241/pexels-photo-19767241/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descricao: 'A maior metropole da america do sul.' },
];

function DestaquesDestinos() {
  return (
    <div className="container mt-5">
      <h2> Destinos Mais Procurados</h2>
      <div className="row">
        {destinos.map((destino, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={destino.imagem} alt={`Imagem de ${destino.nome}`} />
              <Card.Body>
                <Card.Title>{destino.nome}</Card.Title>
                <Card.Text>{destino.descricao}</Card.Text>
                <Link to="/CataratasDoIguaçu"><Button variant="primary">Saiba Mais</Button></Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestaquesDestinos;
