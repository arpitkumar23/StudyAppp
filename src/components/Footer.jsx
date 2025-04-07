import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="icon">📖</span>
              <span className="brand-name">StudyLib</span>
            </div>
            <p className="footer-text">
              Your digital study companion with thousands of resources to enhance your learning journey.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💻</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Books</a></li>
              <li><a href="#">Journals</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Study Materials</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 StudyLib. All rights reserved.</p>
          <p>Designed with ❤️ for students and researchers</p>
        </div>
      </div>
    </footer>


  );
}

export default Footer;