import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const handleLoginSuccess = (credentialResponse) => {
  // Armazenar os dados de login no localStorage
  localStorage.setItem("token", credentialResponse.credential); // Salva o token JWT
  console.log("Login Successful", credentialResponse);

  // Para armazenar mais dados, como o perfil do usuário, você pode decodificar o token
  const userObject = JSON.parse(
    atob(credentialResponse.credential.split(".")[1])
  );
  localStorage.setItem("user", JSON.stringify(userObject)); // Armazena o perfil do usuário
  console.log("User Profile:", userObject);

  // Redirecionar ou fazer outra ação após o login
};

const handleLoginError = () => {
  console.log("Login Failed");
};

const TelaLogin = () => {
  const gradientCustom4 = {
    background: "linear-gradient(to right, #3b9ae7f8, #0b618b)",
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      navigate("/");
    }
  };

  return (
    <section className="login-section">
      <div className="mask d-flex align-items-center h-100 login-card">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
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

                    <div className="d-flex justify-content-center mt-3">
                      <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                      />
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Não tem uma conta?{" "}
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
