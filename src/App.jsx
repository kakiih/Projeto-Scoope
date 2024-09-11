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

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route index path="/sobre" element={<Sobre/>} />
          <Route index path="/contato" element={<Contato/>} />
          <Route index path='/sign' element={<SignUp/>} />
          <Route index path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
