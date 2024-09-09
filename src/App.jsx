import NavBar from './componentes/NavBar';
import './App.scss';
import Footer from './componentes/Footer';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Contato from './Rotas/Contato';
import Sobre from './Rotas/Sobre';
import Home from './Rotas/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Sobre" element={<Sobre />} />
          <Route index path="/Contato" element={<Contato />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
