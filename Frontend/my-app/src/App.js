import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Fotos from './Components/Fotos';
import Inicio from './Components/Inicio';
import NavBarExample from './Components/Navbar';
import Videos from './Components/Videos';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarExample /> }>
          <Route index element={ <Inicio /> } />
          <Route path='videos' element={ <Videos /> } />
          <Route path='fotos' element={ <Fotos /> } />
          <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
