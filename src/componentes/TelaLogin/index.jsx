import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const TelaLogin = () => {
  const gradientCustom4 = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)',
  };

  // Função para lidar com a validação do formulário
  const navigate = useNavigate(); // Iniciar useNavigate

  // Função para lidar com a validação do formulário e redirecionar
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
    } else {
      // Se a validação for bem-sucedida, redireciona para a página principal
      navigate('/');
    }
  };

  return (
    <section style={{ height: '100vh' }}>
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Entrar na conta
                  </h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Email
                      </label>
                      <div className="invalid-feedback">
                        Por favor, insira um email válido.
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Senha
                      </label>
                      <div className="invalid-feedback">
                        Por favor, insira sua senha.
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg"
                        style={gradientCustom4}
                      >
                        Entrar
                      </button>
                    </div>

                    <div className="row">
                      <div className="d-flex justify-content-center align-items-center">
                        <a
                          data-mdb-ripple-init
                          className="btn btn-link btn-floating btn-lg text-body m-1"
                          href="https://www.facebook.com"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          data-mdb-ripple-init
                          className="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                      </div>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Não tem uma conta?{' '}
                      <a href="/sign" className="fw-bold text-body">
                        <u>Registre-se</u>
                      </a>
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
