import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Login from './pages/Login';
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import useToken from './useToken';
import './styles/App.css'

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  else{
    console.log(token)
  }
  return (
    <div className="App">
      <Header/>
      <h1>Bonjour {token}!</h1>
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