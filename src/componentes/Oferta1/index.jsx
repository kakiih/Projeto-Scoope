import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const BeloHorizontePage = () => {
  const BeloHorizonte = {
    nome: 'Belo Horizonte',
    imagem: 'https://images.pexels.com/photos/11589770/pexels-photo-11589770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descricao: 'Belo Horizonte, a capital de Minas Gerais, é conhecida por sua arquitetura moderna e gastronomia rica. A cidade oferece uma variedade de atrações culturais e históricas, como a Praça da Liberdade e o Mercado Central, além de uma cena vibrante de bares e restaurantes.',
  };

  return <CompraDestino destino={BeloHorizonte} />;
};

export default BeloHorizontePage;
