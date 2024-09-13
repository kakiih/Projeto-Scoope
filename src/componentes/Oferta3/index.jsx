import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const CuritibaPage = () => {
  const Curitiba = {
    nome: 'Curitiba',
    imagem: 'https://picsum.photos/seed/curitiba-offer/400/300',
    descricao: 'Curitiba, a capital do Paraná, é conhecida por sua qualidade de vida e planejamento urbano inovador. A cidade possui belos parques, como o Jardim Botânico, e uma rica vida cultural, com teatros e museus que atraem visitantes de todas as partes.',
  };

  return <CompraDestino destino={Curitiba} />;
};

export default CuritibaPage;
