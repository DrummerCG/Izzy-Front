import '../styles/App.css';
import Header from './header/Header';
import Home from './specific/home/Home';
import About from './specific/about/About';
import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
