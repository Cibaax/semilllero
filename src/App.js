import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
import Requirements from './components/Requirements/Requirements';
import FormExample from './components/Form/Form';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
/* import Navbar from './components/Navbar/Navbar'; */
import Roles from './components/Roles/Roles';
import Timeline from './components/Timeline/Timeline';
import AllEvents from './components/AllEvents/AllEvents';

const App = () => {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Requirements" element={<Requirements/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
          <Route path="/AllEvents" element={<AllEvents/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
