import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Properties from './Pages/Properties';
import PropertyDetail from './Pages/PropertyDetail';
import Agents from './Pages/Agents';
import Contact from './Pages/Contact';

const App = () => {
  return (
     <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
     </>
  );
};

export default App;
