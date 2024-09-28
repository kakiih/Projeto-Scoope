import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Certifique-se de que o JS do Bootstrap está importado

function NavBar() {
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    const navbar = navbarRef.current;
    if (navbar.classList.contains('show')) {
      // Fecha a navbar se estiver aberta
      const bsCollapse = new window.bootstrap.Collapse(navbar, {
        toggle: false
      });
      bsCollapse.hide();
    } else {
      // Abre a navbar se estiver fechada
      const bsCollapse = new window.bootstrap.Collapse(navbar, {
        toggle: false
      });
      bsCollapse.show();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#253670'}}> 
      <div className="container-fluid">
        {/* Botão de toggle para dispositivos menores */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link className="navbar-brand" to="/" style={{ color: 'white' }}> {/* Texto Branco */}
          <img
            src="https://i.imgur.com/qlXlrFc.png"
            alt="Logomarca"
            style={{ height: '50px' }}
          />
        </Link>

        {/* Itens do navbar que colapsam */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarRef}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'white' }}>Início</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pacotes" style={{ color: 'white' }}>Pacotes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destinos" style={{ color: 'white' }}>Destinos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre" style={{ color: 'white' }}>Sobre nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato" style={{ color: 'white' }}>Contato</Link>
            </li>
          </ul>

          {/* Ícones de carrinho, notificações e perfil */}
          <div className="d-flex align-items-center gap-3">
            <Link className="link-secondary" to="/carrinho" style={{ color: 'white' }}>
              <i className="fas fa-shopping-cart"></i>
            </Link>

            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="link-secondary dropdown-toggle hidden-arrow"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
                style={{ color: 'white' }}
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/">Novidades</a></li>
                <li><a className="dropdown-item" href="/">Ofertas especiais</a></li>
                <li><a className="dropdown-item" href="/">Ajuda</a></li>
              </ul>
            </div>

            {/* Avatar do usuário que redireciona para a página de sign up */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="/sign" // Agora o avatar redireciona para Sign Up
              >
                  <div className="link-secondary" style={{ color: 'white' }}>
                    <i className="fas fa-user"></i>
                  </div>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li><Link className="dropdown-item" to="/perfil">Meu Perfil</Link></li>
                <li><Link className="dropdown-item" to="/configuracoes">Configurações</Link></li>
                <li><Link className="dropdown-item" to="/logout">Sair</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
