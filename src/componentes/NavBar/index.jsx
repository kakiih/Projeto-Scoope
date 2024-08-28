import Botao from "../Botao";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.javascript:void(0)">
            Menu
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
                <a className="nav-link" href="www.javascript:void(0)">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.javascript:void(0)">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.javascript:void(0)">
                  Menu
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <Botao txtb="Pesquisar" cor="primary"/>                
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
