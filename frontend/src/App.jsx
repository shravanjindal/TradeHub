import HomePage from './landing_page/home/HomePage'
import Signup from "./landing_page/signup/Signup"
import "../public/css/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from "./landing_page/products/ProductPage"
import PricingPage from "./landing_page/pricing/PricingPage"
import SupportPage from "./landing_page/support/SupportPage"
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [location]); // This effect runs whenever the route changes

  return null; // This component doesn't render anything
}

function App() {
 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className='mt-5'></div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
