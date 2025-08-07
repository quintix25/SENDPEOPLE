import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = () => <h2>Welcome to the Homepage</h2>;
const Services = () => <h2>Our Services</h2>;
const Contact = () => <h2>Contact Us</h2>;

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
