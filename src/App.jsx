import NavBar from './componentes/NavBar';
import './App.scss';
import Footer from './componentes/Footer';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Contato from './Rotas/Contato';
import Sobre from './Rotas/Sobre';
import Home from './Rotas/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Rotas/Login';
import SignUp from './Rotas/SignUp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CataratasDoIguacuPage from './componentes/PaginaIguaçu';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path='/sign' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/CataratasDoIguaçu' element={<CataratasDoIguacuPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
