import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const FlorianopolisPage = () => {
  const Florianopolis = {
    nome: "Florianópolis",
    imagem:
      "https://maisviagens.net.br/wp-content/uploads/2022/01/FLORIPA.jpg",
    descricao:
      "Florianópolis, localizada em Santa Catarina, é famosa por suas belas praias e vida noturna animada. A cidade também é conhecida por sua rica cultura açoriana e oferece muitas opções de esportes aquáticos e passeios ao ar livre.",
    preco: 3000,
  };

  return <CompraDestino destino={Florianopolis} />;
};

export default FlorianopolisPage;
