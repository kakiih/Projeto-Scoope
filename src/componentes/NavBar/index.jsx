import Botao from "../Botao";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Sobre">
                  Sobre nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contato">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.javascript:void(0)">
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <Botao txtb="Cadastre-se" cor="primary" arredondar="rounded-pill" borda="border border-white"/>                
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3">
      </div>
    </>
  );
}

export default NavBar;
