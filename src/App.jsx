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
import RioDeJaneiroPage from './componentes/PaginaRiodejaneiro';
import SalvadorPage from './componentes/PaginaSalvador';
import RecifePage from './componentes/PaginaRecife';
import MaranhaoPage from './componentes/PaginaMaranhão';
import SaoPauloPage from './componentes/PaginaSaoPaulo';
import BeloHorizontePage from './componentes/Oferta1';
import FlorianopolisPage from './componentes/Oferta2';
import CuritibaPage from './componentes/Oferta3';
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="630806896807-a0bvlqq99e879h0ebv36422g81cj7fqu.apps.googleusercontent.com">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path='/sign' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/fozdoiguacu' element={<CataratasDoIguacuPage/>} />
            <Route path='/riodejaneiro' element={<RioDeJaneiroPage/>} />
            <Route path='/salvador' element={<SalvadorPage/>} />
            <Route path='/recife' element={<RecifePage/>} />
            <Route path='/lencoismaranhenses' element={<MaranhaoPage/>} />
            <Route path='/saopaulo' element={<SaoPauloPage/>} />
            <Route path='/belohorizonte' element={<BeloHorizontePage/>} />
            <Route path='/florianopolis' element={<FlorianopolisPage/>} />
            <Route path='/curitiba' element={<CuritibaPage/>} />
            <Route path='/pacotes' element={<pacotes/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
