import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';
import Formulaire from './components/Formulaire';
import Header from "./pages/Header";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route component={NotFound} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;