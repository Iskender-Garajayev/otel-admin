import './App.css';
import Home from './components/home/Home'
import Rooms from './pages/rooms/Rooms'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Rezervation from './pages/rezervation/Rezervation';
import Countment from './pages/countment/Countment';
import Gests from './pages/gests/Gests';
import Personal from './pages/personal/Personal';
import Nots from './pages/nots/Nots';
import { useContext } from 'react';
import { DarkModeContext } from './components/context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app-dark" : "app"}>
     <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/rezerv' element={<Rezervation/>} />
        <Route path='/accounting' element={<Countment/>} />
        <Route path='/gests' element={<Gests/>} />
        <Route path='/personals' element={<Personal/>} />
        <Route path='/note' element={<Nots/>} />
      </Route>          
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
