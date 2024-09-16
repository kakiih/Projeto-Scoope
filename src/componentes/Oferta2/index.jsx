import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const FlorianopolisPage = () => {
  const Florianopolis = {
    nome: 'Florianópolis',
    imagem: 'https://images.pexels.com/photos/21012186/pexels-photo-21012186/free-photo-of-atardecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descricao: 'Florianópolis, localizada em Santa Catarina, é famosa por suas belas praias e vida noturna animada. A cidade também é conhecida por sua rica cultura açoriana e oferece muitas opções de esportes aquáticos e passeios ao ar livre.',
  };

  return <CompraDestino destino={Florianopolis} />;
};

export default FlorianopolisPage;
