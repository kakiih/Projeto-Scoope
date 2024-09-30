import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const TelaSign = () => {
  const gradientCustom4 = {
    background: 'linear-gradient(to right, #3b9ae7f8, #0b618b)',
  };

  const navigate = useNavigate(); // Iniciar useNavigate

  const [cpf, setCpf] = useState(''); // Estado para armazenar o CPF

  // Função para formatar o CPF
  const handleCpfChange = (event) => {
    const input = event.target.value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .slice(0, 11); // Limita a 11 caracteres

    // Adiciona a formatação
    let formattedCpf = input;
    if (input.length > 6) {
      formattedCpf = `${input.slice(0, 3)}.${input.slice(3, 6)}.${input.slice(6, 9)}-${input.slice(9, 11)}`;
    } else if (input.length > 3) {
      formattedCpf = `${input.slice(0, 3)}.${input.slice(3, 6)}`;
    } else if (input.length > 0) {
      formattedCpf = input.slice(0, 3);
    }

    setCpf(formattedCpf); // Atualiza o estado do CPF
  };

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
    <section>
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Criar uma conta
                  </h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="name">
                        Seu nome completo
                      </label>
                      <div className="invalid-feedback">
                        Por favor, preencha seu nome completo.
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <div className="invalid-feedback">
                        Por favor, insira um email válido.
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="cpf"
                        placeholder="000.000.000-00"
                        value={cpf} // Usar o estado formatado do CPF
                        onChange={handleCpfChange} // Adicionar o manipulador de eventos
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="cpf">
                        CPF
                      </label>
                      <div className="invalid-feedback">
                        Por favor, insira seu CPF.
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
                      <div className="invalid-feedback">Por favor, insira uma senha.</div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repita sua senha
                      </label>
                      <div className="invalid-feedback">
                        Por favor, repita sua senha.
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                        required
                      />
                      <label className="form-check-label col-6" htmlFor="form2Example3cg">
                        Eu confirmo que li e concordo com os{' '}
                        <a href="#!" className="text-body">
                          <u>Termos de serviço</u>
                        </a>
                      </label>
                      <div className="invalid-feedback">
                        Você deve concordar com os Termos de Serviço.
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg"
                        style={gradientCustom4}
                      >
                        Registrar
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Cadastre-se também com:
                    </p>
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
                      Já tem uma conta? faça o{' '}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login aqui</u>
                      </Link>
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
