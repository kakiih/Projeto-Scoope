import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const TelaSign = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    // Armazenar os dados de login do Google no localStorage
    localStorage.setItem("token", credentialResponse.credential); // Salva o token JWT
    const userObject = JSON.parse(
      atob(credentialResponse.credential.split(".")[1])
    );
    localStorage.setItem("user", JSON.stringify(userObject)); // Armazena o perfil do usuário
    console.log("Login Successful with Google:", userObject);

    // Redireciona para a página principal após login bem-sucedido
    navigate("/");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const gradientCustom4 = {
    background: "linear-gradient(to right, #3b9ae7f8, #0b618b)",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      // Pegar os dados do formulário
      const name = form.name.value;
      const email = form.email.value;
      const password = form.form3Example4cg.value;

      // Armazenar os dados de login no localStorage
      localStorage.setItem("user", JSON.stringify({ name, email }));
      localStorage.setItem("token", password); // Usando a senha como token para simular login

      console.log("Form Submitted. User Info:", { name, email });

      // Redireciona para a página principal
      navigate("/");
    }
  };

  return (
    <section>
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Criar uma conta
                  </h2>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
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
                        name="email"
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
                        type="password"
                        id="form3Example4cg"
                        name="password"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Senha
                      </label>
                      <div className="invalid-feedback">
                        Por favor, insira uma senha.
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        name="confirmPassword"
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
                        id="form2Example3cg"
                        required
                      />
                      <label
                        className="form-check-label col-6"
                        htmlFor="form2Example3cg"
                      >
                        Eu confirmo que li e concordo com os{" "}
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

                    <div className="d-flex justify-content-center mt-3">
                      <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                      />
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Já tem uma conta? faça o{" "}
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
