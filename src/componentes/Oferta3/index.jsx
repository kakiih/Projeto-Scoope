import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const CuritibaPage = () => {
  const Curitiba = {
    nome: "Curitiba",
    imagem:
      "https://images.pexels.com/photos/28412016/pexels-photo-28412016/free-photo-of-parque-barigui-curitiba-parana-brasil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao:
      "Curitiba, a capital do Paraná, é conhecida por sua qualidade de vida e planejamento urbano inovador. A cidade possui belos parques, como o Jardim Botânico, e uma rica vida cultural, com teatros e museus que atraem visitantes de todas as partes.",
    preco: 1800,
  };

  return <CompraDestino destino={Curitiba} />;
};

export default CuritibaPage;
