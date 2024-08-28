function Login() {
  return (
    <>
      <div className="container mt-3">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                name="Nome"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Sobrenome"
                name="Sobremone"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="CPF"
                name="CPF"
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Data de nascimento"
                name="Data de nascimento"
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="Idade"
                name="Idade"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Rua"
                name="Rua"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Número"
                name="Número"
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="UF"
                name="UF"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Cidade"
                name="Cidade"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Bairro"
                name="Bairro"
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
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
export default Login;
