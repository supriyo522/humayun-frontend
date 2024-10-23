import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import RestaurantBar from './components/RestaurantBar'; // Import the component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this route */}
          <Route path="/products/service" element={<RestaurantBar />} /> {/* Add route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
