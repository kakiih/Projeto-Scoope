// src/components/CataratasDoIguacu/CataratasDoIguacuPage.jsx
import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const CataratasDoIguacuPage = () => {
  const cataratasDoIguacu = {
    nome: "Cataratas do Iguaçu",
    imagem:
      "https://images.pexels.com/photos/27986328/pexels-photo-27986328/free-photo-of-panorama-vista-paisagem-natureza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao:
      "As Cataratas do Iguaçu são um impressionante conjunto de cachoeiras situadas na fronteira entre o Brasil e a Argentina. A beleza natural do local e a majestade das quedas d'água atraem visitantes de todo o mundo.",
    preco: 3100,
  };

  return <CompraDestino destino={cataratasDoIguacu} />;
};

export default CataratasDoIguacuPage;
