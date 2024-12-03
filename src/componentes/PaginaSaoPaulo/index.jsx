import React from "react";
import CompraDestino from "../../Rotas/Comprar";

const SaoPauloPage = () => {
  const SaoPaulo = {
    nome: "SaoPaulo",
    imagem:
      "https://images.pexels.com/photos/19767241/pexels-photo-19767241/free-photo-of-av-paulista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descricao:
      "São Paulo é uma metrópole brasileira vibrante, famosa por sua diversidade cultural, vida urbana agitada e gastronomia de classe mundial. Destaques incluem a Avenida Paulista, museus renomados como o MASP, e uma cena artística e gastronômica rica. A cidade é um importante centro de negócios e inovação, oferecendo uma experiência cosmopolita e dinâmica.",
    preco: 2800,
  };

  return <CompraDestino destino={SaoPaulo} />;
};

export default SaoPauloPage;
