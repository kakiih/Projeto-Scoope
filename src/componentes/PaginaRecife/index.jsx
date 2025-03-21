import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const RecifePage = () => {
  const Recife = {
    nome: "Recife",
    imagem:
      "https://emrecife.com.br/wp-content/uploads/2024/01/Recife-2.jpg",
    descricao:
      "Salvador é uma cidade vibrante no Brasil, famosa por suas praias encantadoras, como Porto da Barra e Praia do Forte, e pelo Pelourinho, um bairro histórico repleto de arquitetura colonial e cultura rica. Conhecida pelo animado carnaval e pela música contagiante do axé, Salvador combina beleza costeira e um espírito festivo, atraindo visitantes com sua energia única e herança cultural.",
    preco: 1700,
  };

  return <CompraDestino destino={Recife} />;
};

export default RecifePage;
