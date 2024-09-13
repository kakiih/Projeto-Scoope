import React from 'react';
import CompraDestino from '../../Rotas/Comprar';

const SalvadorPage = () => {
  const Salvador = {
    nome: 'Salvador',
    imagem: 'https://images.pexels.com/photos/27856777/pexels-photo-27856777/free-photo-of-mar-cidade-meio-urbano-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descricao: 'Salvador é uma cidade vibrante no Brasil, famosa por suas praias encantadoras, como Porto da Barra e Praia do Forte, e pelo Pelourinho, um bairro histórico repleto de arquitetura colonial e cultura rica. Conhecida pelo animado carnaval e pela música contagiante do axé, Salvador combina beleza costeira e um espírito festivo, atraindo visitantes com sua energia única e herança cultural.',
  };

  return <CompraDestino destino={Salvador} />;
};

export default SalvadorPage;
