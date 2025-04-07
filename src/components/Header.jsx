import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={ `main-head ${isSticky ? 'sticky' : ''}` }>
      <div className="n-container">
        <div className="logo">
          <img
            src=" data:image/png;base64,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"
            alt="Logo"
          />
        </div>
        <nav className={ `nav-links ${menuOpen ? 'open' : ''}` }>
          <ul className="nav-list">
            <li><NavLink to="#" className="nav-link" onClick={ closeMenu }>Home</NavLink></li>
            <li><NavLink to="#coursess" className="nav-link" onClick={ closeMenu }>Courses</NavLink></li>
            <li><input type="search" className="nav-link" placeholder="🔍  search" /></li>
            <li><NavLink to="#" className="nav-link" onClick={ closeMenu }>SignUp</NavLink></li>
            <li><NavLink to="#" className="nav-link" onClick={ closeMenu }>Sign in</NavLink></li>

          </ul>
        </nav>
        <div className="menu-icon" onClick={ toggleMenu }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
