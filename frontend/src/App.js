import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
      <>
          <BrowserRouter>
        <NavBar></NavBar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Cities' element={<Cities/>}/>
              <Route path='*' element={<Home/>}/>
            </Routes>
        <Footer></Footer> 
          </BrowserRouter>
      </>
  );
}

export default App;

