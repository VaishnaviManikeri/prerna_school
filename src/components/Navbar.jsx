import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflowY = '';
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflowY = 'auto';
  };

  // Toggle dropdown on mobile
  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/admin/login');
    handleLinkClick();
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
            <img src="/assets/m/l.jpeg" alt="Prerana Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">
                <span>उज्ज्वल भविष्यासाठी</span>
                <span>योग्य निवड!</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Gallery and Notices removed from here */}
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link">About Us ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/about/overview">Overview</Link></li>
                <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
                <li><Link to="/about/principal-message">Principal's Message</Link></li>
                <li><Link to="/about/history">History & Milestones</Link></li>
                <li><Link to="/about/infrastructure">Infrastructure</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link">Academics ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/academics/primary">Primary (1st - 4th)</Link></li>
                <li><Link to="/academics/secondary">Secondary (5th - 10th)</Link></li>
                <li><Link to="/academics/higher-secondary">Higher Secondary (11th - 12th)</Link></li>
                <li><Link to="/academics/curriculum">Curriculum & Syllabus</Link></li>
                <li><Link to="/academics/academic-calendar">Academic Calendar</Link></li>
                <li><Link to="/academics/exam-schedule">Exam Schedule</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/admissions" className="nav-link admission-link">Admissions 2026</Link>
            </li>

            <li className="nav-item">
              <Link to="/gallery" className="nav-link">Gallery</Link>
            </li>

            <li className="nav-item">
              <Link to="/notice" className="nav-link">Notices</Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link">Student Corner ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/student/study-material">Study Material</Link></li>
                <li><Link to="/student/result">Results</Link></li>
                <li><Link to="/student/timetable">Time Table</Link></li>
                <li><Link to="/student/library">Library</Link></li>
                <li><Link to="/student/sports">Sports & Activities</Link></li>
                <li><Link to="/student/scholarship">Scholarships</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog/News</Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link">Facilities ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/facilities/smart-class">Smart Classes</Link></li>
                <li><Link to="/facilities/lab">Laboratories</Link></li>
                <li><Link to="/facilities/sports-facility">Sports Facilities</Link></li>
                <li><Link to="/facilities/transport">Transport</Link></li>
                <li><Link to="/facilities/hostel">Hostel</Link></li>
                <li><Link to="/facilities/medical">Medical Facility</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/careers" className="nav-link">Careers</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <img src="/assets/logo.jpeg" alt="Logo" className="mobile-logo" />
            <button className="mobile-close" onClick={toggleMobileMenu}>✕</button>
          </div>
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-item"><Link to="/" onClick={handleLinkClick} className="mobile-nav-link">Home</Link></li>
            
            <li className="mobile-nav-item dropdown-mobile">
              <div onClick={() => toggleDropdown('about')} className="mobile-nav-link dropdown-toggle">
                About Us {activeDropdown === 'about' ? '▲' : '▼'}
              </div>
              {activeDropdown === 'about' && (
                <ul className="mobile-dropdown-menu">
                  <li><Link to="/about/overview" onClick={handleLinkClick}>Overview</Link></li>
                  <li><Link to="/about/mission-vision" onClick={handleLinkClick}>Mission & Vision</Link></li>
                  <li><Link to="/about/principal-message" onClick={handleLinkClick}>Principal's Message</Link></li>
                  <li><Link to="/about/history" onClick={handleLinkClick}>History & Milestones</Link></li>
                  <li><Link to="/about/infrastructure" onClick={handleLinkClick}>Infrastructure</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-nav-item dropdown-mobile">
              <div onClick={() => toggleDropdown('academics')} className="mobile-nav-link dropdown-toggle">
                Academics {activeDropdown === 'academics' ? '▲' : '▼'}
              </div>
              {activeDropdown === 'academics' && (
                <ul className="mobile-dropdown-menu">
                  <li><Link to="/academics/primary" onClick={handleLinkClick}>Primary (1st - 4th)</Link></li>
                  <li><Link to="/academics/secondary" onClick={handleLinkClick}>Secondary (5th - 10th)</Link></li>
                  <li><Link to="/academics/higher-secondary" onClick={handleLinkClick}>Higher Secondary (11th - 12th)</Link></li>
                  <li><Link to="/academics/curriculum" onClick={handleLinkClick}>Curriculum & Syllabus</Link></li>
                  <li><Link to="/academics/academic-calendar" onClick={handleLinkClick}>Academic Calendar</Link></li>
                  <li><Link to="/academics/exam-schedule" onClick={handleLinkClick}>Exam Schedule</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-nav-item"><Link to="/admissions" onClick={handleLinkClick} className="mobile-nav-link admission-link">Admissions 2026</Link></li>

            <li className="mobile-nav-item"><Link to="/gallery" onClick={handleLinkClick} className="mobile-nav-link">Gallery</Link></li>

            <li className="mobile-nav-item"><Link to="/notice" onClick={handleLinkClick} className="mobile-nav-link">Notices</Link></li>

            <li className="mobile-nav-item dropdown-mobile">
              <div onClick={() => toggleDropdown('student')} className="mobile-nav-link dropdown-toggle">
                Student Corner {activeDropdown === 'student' ? '▲' : '▼'}
              </div>
              {activeDropdown === 'student' && (
                <ul className="mobile-dropdown-menu">
                  <li><Link to="/student/study-material" onClick={handleLinkClick}>Study Material</Link></li>
                  <li><Link to="/student/result" onClick={handleLinkClick}>Results</Link></li>
                  <li><Link to="/student/timetable" onClick={handleLinkClick}>Time Table</Link></li>
                  <li><Link to="/student/library" onClick={handleLinkClick}>Library</Link></li>
                  <li><Link to="/student/sports" onClick={handleLinkClick}>Sports & Activities</Link></li>
                  <li><Link to="/student/scholarship" onClick={handleLinkClick}>Scholarships</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-nav-item"><Link to="/blog" onClick={handleLinkClick} className="mobile-nav-link">Blog/News</Link></li>
            
            <li className="mobile-nav-item dropdown-mobile">
              <div onClick={() => toggleDropdown('facilities')} className="mobile-nav-link dropdown-toggle">
                Facilities {activeDropdown === 'facilities' ? '▲' : '▼'}
              </div>
              {activeDropdown === 'facilities' && (
                <ul className="mobile-dropdown-menu">
                  <li><Link to="/facilities/smart-class" onClick={handleLinkClick}>Smart Classes</Link></li>
                  <li><Link to="/facilities/lab" onClick={handleLinkClick}>Laboratories</Link></li>
                  <li><Link to="/facilities/sports-facility" onClick={handleLinkClick}>Sports Facilities</Link></li>
                  <li><Link to="/facilities/transport" onClick={handleLinkClick}>Transport</Link></li>
                  <li><Link to="/facilities/hostel" onClick={handleLinkClick}>Hostel</Link></li>
                  <li><Link to="/facilities/medical" onClick={handleLinkClick}>Medical Facility</Link></li>
                </ul>
              )}
            </li>

            <li className="mobile-nav-item"><Link to="/careers" onClick={handleLinkClick} className="mobile-nav-link">Careers</Link></li>

            <li className="mobile-nav-item"><Link to="/contact" onClick={handleLinkClick} className="mobile-nav-link">Contact Us</Link></li>
            
            {token && (
              <>
                <li className="mobile-nav-item"><Link to="/admin/dashboard" onClick={handleLinkClick} className="mobile-nav-link">Admin Dashboard</Link></li>
                <li className="mobile-nav-item"><button onClick={handleLogout} className="mobile-nav-link logout-btn">Logout</button></li>
              </>
            )}
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
