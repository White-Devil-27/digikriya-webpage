import './App.css';
import { PropagateLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Partner from './components/Partner';
import Support from './components/Support';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Careers from './components/Careers';


export default function App() {
  const [loading, setLoading] = useState(() => false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <BrowserRouter>
      {loading ?
        <div className='spinner'>
          <PropagateLoader color='#09ea76' />
        </div>
        :
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/partner" element={<Partner />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/about/leadership" element={<About />} />
          <Route exact path="/about/careers" element={<Careers />} />
          <Route exact path="/services/MSP" element={<Services />} />
        </Routes>
      }
    </BrowserRouter>
  )
};

// color="#36d7b7"