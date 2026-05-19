import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home'
import About from './page/About';
import Services from './page/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
