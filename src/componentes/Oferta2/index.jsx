import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const FlorianopolisPage = () => {
  const Florianopolis = {
    nome: 'Florianópolis',
    imagem: 'https://picsum.photos/seed/floripa-offer/400/300',
    descricao: 'Florianópolis, localizada em Santa Catarina, é famosa por suas belas praias e vida noturna animada. A cidade também é conhecida por sua rica cultura açoriana e oferece muitas opções de esportes aquáticos e passeios ao ar livre.',
  };

  return <CompraDestino destino={Florianopolis} />;
};

export default FlorianopolisPage;
