import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const RioDeJaneiroPage = () => {
  const RioDeJaneiro = {
    nome: 'Rio de Janeiro',
    imagem: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descricao: 'O Rio de Janeiro é uma cidade icônica no Brasil, famosa por suas praias deslumbrantes, como Copacabana e Ipanema, e pelo Cristo Redentor, que oferece vistas panorâmicas. Conhecida pelo vibrante carnaval e pelo Pão de Açúcar, a cidade combina beleza natural e vida urbana efervescente, atraindo visitantes de todo o mundo.',
  };

  return <CompraDestino destino={RioDeJaneiro} />;
};

export default RioDeJaneiroPage;
