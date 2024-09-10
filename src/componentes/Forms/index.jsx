function Forms() {
  return (
    <>
      <div className="container mt-3">
        <form>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Nome"
                name="Nome"
              />
            </div>
            <div className="col-6 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Sobrenome"
                name="Sobremone"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="CPF"
                name="CPF"
                maxLength="14"
              />
            </div>
            <div className="col-5 mb-3">
              <input
                type="date"
                className="form-control border-dark"
                placeholder="Data de nascimento"
                name="Date"
              />
            </div>
            <div className="col-3 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Idade"
                name="Idade"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Rua"
                name="Rua"
              />
            </div>
            <div className="col-4 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Número"
                name="Número"
              />
            </div>
            <div className="col-2 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="UF"
                name="UF"
                maxLength="2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Cidade"
                name="Cidade"
              />
            </div>
            <div className="col-4 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="Bairro"
                name="Bairro"
              />
            </div>
            <div className="col-4 mb-3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="CEP"
                name="CEP"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Forms;
