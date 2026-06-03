import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home'
import About from './page/About';
import Services from './page/Service';
import Portfolio from './page/Portfolio';
import Contact from './page/Contact';
import Blog from './page/Blog';
import ScrollToTop from './components/ScrollToTop';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

  

function App() {
  usePageTracking();
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
