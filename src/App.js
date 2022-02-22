//ce fichier est le principal fichier de ce projet c'est celui qui va faire appel a tout les composants pour l'app (Home,About etc.....)
import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Home/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;