import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TelaLogin = () => {
  const gradientCustom4 = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)'
  };
  return (
    <section
      style={{
        height: '100vh',
      }}
    >
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Entrar na conta</h2>
                  <form>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">Senha</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <a href="/">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg"
                        style={gradientCustom4}
                      >
                        Entrar
                      </button>
                      </a>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Não tem uma conta? <a href="/sign" className="fw-bold text-body"><u>Registre-se</u></a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelaLogin;