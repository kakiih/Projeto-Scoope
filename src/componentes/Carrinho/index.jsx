import React, { useState, useEffect } from "react";
import "./index.scss";

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itensSalvos = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(itensSalvos);

    const totalCalculado = itensSalvos.reduce(
      (acc, item) => acc + (item.preco || 0),
      0
    );
    setTotal(totalCalculado);
  }, []);

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    const novoTotal = novoCarrinho.reduce(
      (acc, item) => acc + (item.preco || 0),
      0
    );
    setTotal(novoTotal);
  };

  const alterarQuantidade = (index, operacao) => {
    const novoCarrinho = [...carrinho];
    const item = novoCarrinho[index];

    if (operacao === "incrementar") {
      item.quantidade = (item.quantidade || 1) + 1;
    } else if (operacao === "decrementar" && item.quantidade > 1) {
      item.quantidade -= 1;
    }

    item.total = (item.quantidade || 1) * item.preco;
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    const novoTotal = novoCarrinho.reduce(
      (acc, item) => acc + (item.total || item.preco || 0),
      0
    );
    setTotal(novoTotal);
  };

  const finalizarCompra = () => {
    alert("Compra finalizada! Obrigado por escolher a Scoope Turismo.");
    localStorage.removeItem("carrinho");
    setCarrinho([]);
    setTotal(0);
  };

  return (
    <div className="carrinho-container wrapper">
      <div className="carrinho-title">Meu Carrinho</div>

      {carrinho.length === 0 ? (
        <p className="carrinhovazio">Seu carrinho está vazio.</p>
      ) : (
        <>
          {/* Lista de Produtos */}
          {carrinho.map((item, index) => (
            <div className="item" key={index}>
              <div className="buttons-car">
                <button
                  className="delete-delbut"
                  onClick={() => removerItem(index)}
                >
                  <i className="fas fa-trash-alt"></i>{" "}
                </button>
              </div>

              <div className="description">
                <span>{item.nome}</span>
                <span>{item.descricao || "Descrição do produto"}</span>
              </div>

              <div className="quantity">
                <button
                  className="minus-delbut"
                  type="button"
                  onClick={() => alterarQuantidade(index, "decrementar")}
                >
                  -
                </button>
                <input type="text" value={item.quantidade || 1} readOnly />
                <button
                  className="plus-delbut"
                  type="button"
                  onClick={() => alterarQuantidade(index, "incrementar")}
                >
                  +
                </button>
              </div>

              <div className="total-price">
                R$ {(item.total || item.preco || 0).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total e Finalizar Compra */}
          <div className="summary">
            <p>Total: R$ {total.toFixed(2)}</p>
            <button onClick={finalizarCompra}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrinho;
