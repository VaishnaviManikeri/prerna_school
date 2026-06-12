import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/assets/images/logo.jpeg" alt="Prerana Logo" className="footer-logo" />
              <div>
                <h3 className="footer-title">प्रेरणा शिक्षण संस्था</h3>
                <p className="footer-subtitle">
                  Prerana Valak, Primary, Secondary & Tukaram Gujar Jr. College
                </p>
              </div>
            </div>
            <p className="footer-description">
              Building bright futures through quality education, values, and
              holistic development for every student.
            </p>
            <a href="#enroll" className="footer-apply-button">Apply Now</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/about/overview">About Us</a></li>
              <li><a href="/about/mission-vision">Mission & Vision</a></li>
              <li><a href="/academics/primary">Academics</a></li>
              <li><a href="#admissions">Admissions 2026</a></li>
              <li><a href="/gallery/photo-gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Student Corner</h4>
            <ul className="footer-links">
              <li><a href="/student/study-material">Study Material</a></li>
              <li><a href="/student/result">Results</a></li>
              <li><a href="/student/timetable">Time Table</a></li>
              <li><a href="/student/library">Library</a></li>
              <li><a href="/student/sports">Sports & Activities</a></li>
              <li><a href="/student/scholarship">Scholarships</a></li>
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
          <p>© {currentYear} Prerana Shikshan Sanstha. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/about/overview">About</a>
            <a href="/notices/latest-notices">Notices</a>
            <a href="/student/result">Parent Portal</a>
            <a href="#alumni">Alumni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
