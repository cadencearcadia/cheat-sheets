import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>DOC Castle</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/django" onClick={closeMenu}>Django</Link>
        <Link to="/git" onClick={closeMenu}>Git</Link>
        <Link to="/javascript" onClick={closeMenu}>JavaScript</Link>
        <Link to="/mongodb-mac" onClick={closeMenu}>MongoDB (macOS)</Link>
        <Link to="/nextjs" onClick={closeMenu}>Next.js</Link>
        <Link to="/nodejs" onClick={closeMenu}>Node.js</Link>
        <Link to="/python" onClick={closeMenu}>Python</Link>
        <Link to="/react" onClick={closeMenu}>React</Link>
        <Link to="/reactlibraries" onClick={closeMenu}>React Libraries</Link>
        <Link to="/threejs-mac" onClick={closeMenu}>Three.js (macOS)</Link>
        <Link to="/vim" onClick={closeMenu}>VIM</Link>
      </div>
    </nav>
  );
}

export default NavBar;
