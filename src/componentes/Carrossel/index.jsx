import React from "react";
import { Carousel } from "react-bootstrap";
import "./index.scss"
function Carrossel() {
  return (
    <>
        <Carousel>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src="https://cdn.pixabay.com/photo/2015/05/25/19/37/bahamas-783799_960_720.jpg"
              alt="Primeira Oferta"
            />
          </div>
          <Carousel.Caption>
            <h3>Oferta Especial para o Caribe</h3>
            <p>Aproveite 30% de desconto em viagens para o Caribe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src="https://cdn.pixabay.com/photo/2016/01/16/17/13/big-ben-1143631_1280.jpg"
              alt="Segunda Oferta"
            />
          </div>
          <Carousel.Caption>
            <h3>Pacotes para Europa com Desconto</h3>
            <p>Descontos imperdíveis para Paris, Roma e Londres.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src="https://cdn.pixabay.com/photo/2014/06/06/18/05/kyoto-363636_960_720.jpg"
              alt="Terceira Oferta"
            />
          </div>
          <Carousel.Caption>
            <h3>Aventura na Ásia</h3>
            <p>Explore o Japão e a Tailândia com preços exclusivos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Carrossel;
