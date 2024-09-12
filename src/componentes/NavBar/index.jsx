import { Link } from 'react-router-dom';
import Botao from '../Botao';
import { Navbar } from 'react-bootstrap';
import React, { useRef, useEffect } from 'react';

function NavBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        const bsCollapse = new window.bootstrap.Collapse(navbarRef.current, {
          toggle: false
        });
        bsCollapse.hide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const gradientCustom4 = {
    background: 'linear-gradient(to right, #21468bf8, #3390be)'
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark py-3" style={gradientCustom4}>
      <div className="container-fluid">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://i.imgur.com/qlXlrFc.png" // Caminho para a imagem da logomarca
          alt="Logomarca"
          style={{ height: '50px' }} // Ajuste a altura conforme necessário
        />
      </Navbar.Brand>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
        aria-controls="mynavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar" ref={navbarRef}>
          <ul className="navbar-nav me-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">Contato</Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/sign">
              <Botao txtb="Cadastre-se" arredondar="rounded-pill" borda="border border-white"/> 
            </Link>               
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
