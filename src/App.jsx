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

function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,  // 👈 full URL, GA4's primary key
        page_title: location.pathname,         // 👈 use the path as the title instead
      });
    }
  }, [location]);
  return null;
}


  

function App() {
  return (
    <Router>
      <PageTracker />
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
