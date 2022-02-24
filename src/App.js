//ce fichier est le principal fichier de ce projet c'est celui qui va faire appel a tout les composants pour l'app (Home,About etc.....)
import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route element = {<NotFound />} />
        <Route exact path = '/login' element={<Login />} />
        </Routes>
    </Router>
  </div>
  );
};

export default App;