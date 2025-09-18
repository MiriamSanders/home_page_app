import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/componenets/Header';
import BlogHomepage from '../src/componenets/BlogHomePage';
import About from '../src/componenets/About';
import ContactPage from '../src/componenets/ContactPage';
import './app.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
