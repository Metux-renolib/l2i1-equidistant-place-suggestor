import Home from "./pages/Home";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import useToken from './useToken';

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route component={NotFound} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;