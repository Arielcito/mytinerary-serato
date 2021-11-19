import './App.css';
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cities' element={<Cities/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

