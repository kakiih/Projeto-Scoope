import NavBar from './componentes/NavBar';
import './App.scss';
import Login from './componentes/Login';
import Botao from './componentes/Botao';
// import TesteGrid from './componentes/TesteGrid';
// import Colunas from './componentes/texto';
import Carrossel from './componentes/Carrossel';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Carrossel/>
      <Login/>
      <Botao cor="primary" txtb="Enviar"/>
      <Footer/>
    </>
  );
}

export default App;
