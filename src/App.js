import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import WebDevelopment from './Components/WebDevelopment/WebDevelopment';
import Types from './Components/Types/Types';
import Importance from './Components/Importance/Importance';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import mundo from './logo-pink-removebg-preview.png';
import surname from './isaapa - Copy.png';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Map search terms to routes
    const routes = {
      home: '/',
      webdevelopment: '/WebDevelopment',
      types: '/Types',
      importance: '/Importance',
      contact: '/Contact',
    };

    const formattedTerm = searchTerm.toLowerCase();
    const route = routes[formattedTerm];

    if (route) {
      navigate(route);
    } else {
      console.log('No match found for:', searchTerm);
    }
  };

  return (
    <div className="landing-page">
      <header className="header">
        <Link to="/" className="logo"><img src={mundo} alt="Logo" className="app-logo" /></Link>
        <Link to="/" className='logo-surname'><img src={surname} alt="Surname Logo" className='app-logo-surname'/></Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/WebDevelopment">WebDevelopment</Link> 
          <Link to="/Types">Types</Link>
          <Link to="/Importance">Importance</Link>
          <Link to="/Contact">Contact</Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} /> 
        <Route path="/Types" element={<Types />} />
        <Route path="/Importance" element={<Importance />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
