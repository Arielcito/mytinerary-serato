import './App.css';
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cities' element={<Cities/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      </>
  );
}

export default App;

