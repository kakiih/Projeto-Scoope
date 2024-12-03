import React from "react";

const Pacotes = () => {
  const adicionarAoCarrinho = (nome, preco) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novoItem = { nome, preco };
    carrinhoAtual.push(novoItem);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    alert("Item adicionado ao carrinho!");
  };

  return (
    <div>
      <h1>Pacotes de Viagem</h1>
      <div className="pacote">
        <h3>Pacote Belo Horizonte - 4 dias</h3>
        <p>R$ 2500</p>
        <button
          onClick={() =>
            adicionarAoCarrinho("Pacote Belo Horizonte - 4 dias", 2500)
          }
        >
          Adicionar ao Carrinho
        </button>
      </div>
      <div className="pacote">
        <h3>Florianópolis - 5 noites</h3>
        <p>R$ 3000</p>
        <button
          onClick={() => adicionarAoCarrinho("Florianópolis - 5 noites", 3000)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Pacotes;
