import Botao from "../Botao";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-cor1 py-3">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
            '<li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sobre">
                  Sobre nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.javascript:void(0)">
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a href="/sign">
              <Botao txtb="Cadastre-se" cor="bg-instagram" arredondar="rounded-pill" borda="border border-white"/> 
              </a>               
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
