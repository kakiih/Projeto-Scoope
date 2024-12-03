import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const MaranhaoPage = () => {
  const lencoismaranhenses = {
    nome: "Maranhão",
    imagem:
      "https://images.pexels.com/photos/27688578/pexels-photo-27688578/free-photo-of-natureza-agua-deserto-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao:
      "Os Lençóis Maranhenses são um deslumbrante parque nacional no Brasil, conhecido por suas vastas dunas de areia branca e lagoas de água cristalina formadas pela chuva. Localizado no estado do Maranhão, esse cenário único oferece um contraste impressionante entre o deserto e os lagos sazonais, criando um paraíso natural que atrai aventureiros e amantes da natureza. A beleza surreal dos Lençóis Maranhenses proporciona uma experiência inesquecível em meio a paisagens impressionantes e tranquilidade.",
    preco: 2300,
  };

  return <CompraDestino destino={lencoismaranhenses} />;
};

export default MaranhaoPage;
