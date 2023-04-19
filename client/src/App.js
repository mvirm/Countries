import './App.css';
import {Landing, About, Home, Form, Detail} from './views/index'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Nav';


function App() {

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/' ? null :
      <div>
        <Nav />
      </div>
      }
      <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
  </div>
  );
}

export default App;
