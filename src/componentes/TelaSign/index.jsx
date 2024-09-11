import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const TelaSign = () => {
    const gradientCustom4 = {
      background: 'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))'
    };
  return (
    <section
      style={{
      }}
    >
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Criar uma conta</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Seu nome completo</label>
                    </div>

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
                        type="text"
                        id="form3Example3cg"
                        placeholder="000.000.000-00"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">CPF</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">Senha</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">Repita sua senha</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label className="form-check-label" htmlFor="form2Example3cg">
                        Eu confirmo que li e concordo com os <a href="#!" className="text-body"><u>Termos de serviço</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <a href="/login">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg"
                        style={gradientCustom4}
                      >
                        Registrar
                      </button>
                      </a>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Já tem uma conta? faça o <Link to="/login" className="fw-bold text-body"><u>Login aqui</u></Link>
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

export default TelaSign;