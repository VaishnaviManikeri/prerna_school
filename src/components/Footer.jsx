import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/assets/m/l.jpeg" alt="Prerana Logo" className="footer-logo" />
              <div>
                <h3 className="footer-title">प्रेरणा शिक्षण संस्था</h3>
                <p className="footer-subtitle">
                  Prerana Primary, Secondary & Tukaram Gujar Jr. College
                </p>
              </div>
            </div>
            <p className="footer-description">
              Building bright futures through quality education, values, and
              holistic development for every student.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/about/mission-vision" onClick={scrollToTop}>Mission & Vision</Link></li>
              <li><Link to="/academics/primary" onClick={scrollToTop}>Academics</Link></li>
              <li><Link to="/admissions" onClick={scrollToTop}>Admissions 2026</Link></li>
              <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Student Corner</h4>
            <ul className="footer-links">
              <li><Link to="/student/study-material" onClick={scrollToTop}>Study Material</Link></li>
              <li><Link to="/student/result" onClick={scrollToTop}>Results</Link></li>
              <li><Link to="/student/timetable" onClick={scrollToTop}>Time Table</Link></li>
              <li><Link to="/student/library" onClick={scrollToTop}>Library</Link></li>
              <li><Link to="/student/sports" onClick={scrollToTop}>Sports & Activities</Link></li>
              <li><Link to="/student/scholarship" onClick={scrollToTop}>Scholarships</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-icon">Phone</span>
                <a href="tel:+917575919090">7575919090</a>
                <span>|</span>
                <a href="tel:+917575929090">7575929090</a>
              </li>
              <li>
                <span className="footer-icon">Email</span>
                <a href="mailto:info@prerana.edu.in">info@prerana.edu.in</a>
              </li>
              <li>
                <span className="footer-icon">Address</span>
                <span>Laxminagar, Thergaon, Pune - 33</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} <a href="https://unseenstudios.co.in/" target="_blank" rel="noreferrer">Unseen Studios</a>. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about/overview" onClick={scrollToTop}>About</Link>
            <Link to="/notices/latest-notices" onClick={scrollToTop}>Notices</Link>
            <Link to="/student/result" onClick={scrollToTop}>Parent Portal</Link>
            <a href="#alumni" onClick={scrollToTop}>Alumni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
