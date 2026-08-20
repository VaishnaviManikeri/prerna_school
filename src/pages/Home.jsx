import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { getGallery } from '../api';

// Icons (using React Icons)
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaLaptopCode, 
  FaSchool, 
  FaCamera, 
  FaCalendarAlt, 
  FaQuoteLeft, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaTrophy, 
  FaUserGraduate, 
  FaBookOpen, 
  FaHeart, 
  FaStar, 
  FaAward, 
  FaBus, 
  FaUtensils, 
  FaLaptop, 
  FaBasketballBall, 
  FaMusic, 
  FaRegSmile, 
  FaHandHoldingHeart,
  FaVial,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
  FaShieldAlt,
  FaGlobe,
  FaImages,
  FaArrowRight
} from 'react-icons/fa';

const Home = () => {
  // Counter State
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    awards: 0
  });
  const [hasCounted, setHasCounted] = useState(false);
  const counterRef = useRef(null);

  // Gallery Preview State (live data from backend)
  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [galleryError, setGalleryError] = useState(false);

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasCounted]);

  // Fetch latest gallery images for the homepage preview
  useEffect(() => {
    const fetchGalleryPreview = async () => {
      try {
        setGalleryLoading(true);
        const response = await getGallery();
        const data = response?.data || [];
        const list = Array.isArray(data) ? data : [];
        // Show the 4 most recent gallery uploads on the homepage
        const latestFour = [...list]
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
          .slice(0, 4);
        setGalleryItems(latestFour);
        setGalleryError(false);
      } catch (err) {
        console.error('Failed to load homepage gallery preview:', err);
        setGalleryError(true);
        setGalleryItems([]);
      } finally {
        setGalleryLoading(false);
      }
    };
    fetchGalleryPreview();
  }, []);

  // Reveal homepage sections as they enter the viewport.
  useEffect(() => {
    const revealSections = document.querySelectorAll('.home-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const target = { students: 1250, teachers: 68, courses: 24, awards: 32 };
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounters(target);
        clearInterval(interval);
      } else {
        setCounters({
          students: Math.floor((target.students * currentStep) / steps),
          teachers: Math.floor((target.teachers * currentStep) / steps),
          courses: Math.floor((target.courses * currentStep) / steps),
          awards: Math.floor((target.awards * currentStep) / steps),
        });
      }
    }, stepTime);
  };

  // Sample data arrays
  const facilities = [
    { icon: <FaLaptop />, title: "Smart Classrooms", desc: "Digital learning with interactive boards" },
    { icon: <FaVial />, title: "Science Labs", desc: "Fully equipped Physics, Chem, Bio labs" },
    { icon: <FaBookOpen />, title: "Library", desc: "10,000+ books & e-resources" },
    { icon: <FaBasketballBall />, title: "Sports Complex", desc: "Indoor & outdoor games" },
    { icon: <FaBus />, title: "Transport", desc: "Safe GPS-enabled buses" },
    { icon: <FaUtensils />, title: "Canteen", desc: "Nutritious meals & hygiene" },
  ];

  const testimonials = [
    { name: "Mrs. Sunita Kulkarni", text: "Best decision for my child. Holistic development & caring teachers.", role: "Parent" },
    { name: "Mr. Rajesh Gupta", text: "Excellent infrastructure and academic support. Highly recommended!", role: "Parent" },
    { name: "Dr. Anjali Desai", text: "The school's vision is outstanding. My daughter loves going here.", role: "Parent" },
  ];

  const navLinks = ["Home", "About", "Academics", "Admissions", "Gallery", "Contact"];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>प्रेरणा शिक्षण संस्था | Best School in Thergaon, Pune | CBSE & State Board</title>
        <meta name="description" content="प्रेरणा शिक्षण संस्था - Premier school in Laxminagar, Thergaon, Pune offering quality education from LKG to 12th with smart classrooms, experienced faculty, and holistic development." />
        <meta name="keywords" content="school in Thergaon, best school Pune, CBSE school Pune, प्रेरणा शिक्षण संस्था, Laxminagar school" />
        <meta name="author" content="प्रेरणा शिक्षण संस्था" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="प्रेरणा शिक्षण संस्था - Excellence in Education" />
        <meta property="og:description" content="Leading school in Thergaon, Pune with modern facilities and experienced faculty." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.prernaschool.edu" />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <img className="hero-background" src="/assets/images/hero.png" alt="Students learning at Prerana Shikshan Sanstha" />
          <div className="hero-overlay">
            <div className="container hero-layout">
              <div className="hero-content">
                <span className="school-badge">Admissions Open 2026–27</span>
                <h1>Inspiring young minds to learn, lead, and succeed.</h1>
                <p>Prerana Primary, Secondary & Tukaram Gujar Jr. College provides value-based education, caring guidance, and opportunities for every child to grow with confidence.</p>
                <Link to="/about" className="hero-learn-link">Discover our school <FaArrowRight /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links home-reveal">
          <div className="container">
            <div className="quick-grid">
              <div className="quick-card">
                <FaSchool />
                <h3>Admission Open</h3>
                <p>Apply for 2025-26 session</p>
              </div>
              <div className="quick-card">
                <FaCalendarAlt />
                <h3>Academic Calendar</h3>
                <p>View important dates</p>
              </div>
              <div className="quick-card">
                <FaUserGraduate />
                <h3>Student Portal</h3>
                <p>Access your account</p>
              </div>
              <div className="quick-card">
                <FaPhoneAlt />
                <h3>Quick Enquiry</h3>
                <p>Get in touch with us</p>
              </div>
            </div>
          </div>
        </section>

        {/* About School */}
        <section className="about-section home-reveal" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <span className="section-badge">About Us</span>
                <h2>Welcome to <span className="highlight">प्रेरणा शिक्षण संस्था</span></h2>
                <p>Established in 2005, प्रेरणा शिक्षण संस्था is a premier institution in Thergaon, Pune, dedicated to nurturing young minds with academic excellence, moral values, and 21st-century skills. Our mission is to create lifelong learners and responsible citizens.</p>
                <p>With a sprawling campus, modern facilities, and experienced faculty, we ensure every child receives personalized attention. Our student-centric approach blends traditional wisdom with innovative teaching methodologies.</p>
                <div className="about-stats">
                  <div><span>20+</span> Years Legacy</div>
                  <div><span>5000+</span> Alumni</div>
                  <div><span>100%</span> Result</div>
                </div>
                <button className="read-more-btn">Read More <FaArrowRight /></button>
              </div>
              <div className="about-img">
                <img src="/assets/images/i1.png" alt="School Building - प्रेरणा शिक्षण संस्था Campus" />
                <div className="about-image-card">
                  <span>Since 2005</span>
                  <strong>Education that inspires curiosity, confidence, and lifelong growth.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="whyus-section home-reveal">
          <div className="container">
            <span className="section-badge center">Why Choose Us</span>
            <h2 className="section-title">What Makes <span>Us Different?</span></h2>
            <div className="features-grid">
              <div className="feature-card"><FaHeart className="feature-icon" /><h3>Experienced Faculty</h3><p>40+ IIT/NIT alumni teachers dedicated to student success</p></div>
              <div className="feature-card"><FaStar className="feature-icon" /><h3>Student-Centric Curriculum</h3><p>CBSE + State board with innovative projects</p></div>
              <div className="feature-card"><FaAward className="feature-icon" /><h3>Regular Assessments</h3><p>Weekly tests & parent-teacher meets</p></div>
              <div className="feature-card"><FaHandHoldingHeart className="feature-icon" /><h3>Affordable Fees</h3><p>Scholarships for meritorious students</p></div>
            </div>
          </div>
        </section>

        {/* Courses / Education Levels */}
        <section className="courses-section home-reveal" id="academics">
          <div className="container">
            <span className="section-badge center">Academics</span>
            <h2 className="section-title">Our <span>Education Levels</span></h2>
            <div className="courses-grid">
              <div className="course-card"><FaSchool /><h3>Pre-Primary</h3><p>Playgroup, Nursery, LKG, UKG | Activity-based learning</p><span className="course-tag">Age 2-5</span></div>
              <div className="course-card"><FaBookOpen /><h3>Primary (1-5)</h3><p>Foundation with EVS, Computers, Languages</p><span className="course-tag">Age 6-10</span></div>
              <div className="course-card"><FaLaptopCode /><h3>Secondary (6-10)</h3><p>Science, Maths, SST, Coding & AI</p><span className="course-tag">Age 11-15</span></div>
              <div className="course-card"><FaUserGraduate /><h3>Higher Secondary (11-12)</h3><p>Science, Commerce, Vocational streams</p><span className="course-tag">Age 16-18</span></div>
            </div>
          </div>
        </section>

        {/* Statistics Counter */}
        <section className="counter-section home-reveal" ref={counterRef}>
          <div className="container">
            <div className="counter-grid">
              <div className="counter-item"><FaUsers className="counter-icon" /><div className="counter-number">{counters.students}+</div><p>Happy Students</p></div>
              <div className="counter-item"><FaChalkboardTeacher className="counter-icon" /><div className="counter-number">{counters.teachers}+</div><p>Expert Teachers</p></div>
              <div className="counter-item"><FaBuilding className="counter-icon" /><div className="counter-number">{counters.courses}+</div><p>Courses Offered</p></div>
              <div className="counter-item"><FaTrophy className="counter-icon" /><div className="counter-number">{counters.awards}+</div><p>National Awards</p></div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="facilities-section home-reveal">
          <div className="container">
            <span className="section-badge center">Infrastructure</span>
            <h2 className="section-title">Our <span>Facilities</span></h2>
            <div className="facilities-frame">
              <div className="facilities-grid">
                {facilities.map((fac, idx) => (
                  <div className="facility-card" key={idx}>
                    <div className="facility-icon">{fac.icon}</div>
                    <h3>{fac.title}</h3>
                    <p>{fac.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview — now powered by live backend data */}
        <section className="gallery-section home-reveal" id="gallery">
          <div className="container">
            <div className="gallery-header">
              <div>
                <span className="section-badge">Moments</span>
                <h2 className="section-title left">Campus <span>Gallery</span></h2>
              </div>
              <Link to="/gallery" className="view-all-link">
                See Full Gallery <FaArrowRight />
              </Link>
            </div>

            {galleryLoading ? (
              <div className="gallery-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div className="gallery-img skeleton" key={i}></div>
                ))}
              </div>
            ) : galleryError || galleryItems.length === 0 ? (
              <div className="gallery-empty">
                <FaCamera />
                <p>Gallery photos are coming soon. Check back shortly!</p>
                <Link to="/gallery" className="cta-btn primary">Visit Gallery Page</Link>
              </div>
            ) : (
              <div className="gallery-grid">
                {galleryItems.map((item) => (
                  <Link to="/gallery" className="gallery-img" key={item._id}>
                    <img
                      src={item.imageUrl}
                      alt={item.title || 'Campus Gallery'}
                      loading="lazy"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=प्रेरणा+School'; }}
                    />
                    <div className="gallery-overlay">
                      <FaCamera />
                      <span>{item.title || 'View Gallery'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="gallery-cta">
              <Link to="/gallery" className="cta-btn primary">
                <FaImages /> Explore Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Principal Message - Image Left, Content Right */}
        <section className="principal-section home-reveal">
          <div className="container">
            <div className="principal-card">
              <div className="principal-image-wrapper">
                <img src="/assets/m/principle.png" alt="Principal Vandana Joshi - प्रेरणा शिक्षण संस्था" loading="lazy" />
              </div>
              <div className="principal-msg">
                <FaQuoteLeft className="quote-icon" />
                <p>At प्रेरणा शिक्षण संस्था, we believe every child has unique potential. Our dedicated team works tirelessly to create a nurturing environment where curiosity thrives and excellence becomes a habit. Join us on this beautiful journey of learning.</p>
                <h4>Mrs. Vandana Joshi</h4>
                <span>Principal, Prerna Shikshan Sanstha</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section home-reveal">
          <div className="container">
            <span className="section-badge center">Feedback</span>
            <h2 className="section-title">What <span>Parents Say</span></h2>
            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <div className="testimonial-card" key={idx}>
                  <FaQuoteLeft />
                  <p>"{t.text}"</p>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Tour */}
        

        {/* FAQ Section */}
        <section className="faq-section home-reveal">
          <div className="container">
            <span className="section-badge center">Help Center</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
            <div className="faq-grid">
              <div className="faq-item"><h3>What are the admission criteria?</h3><p>Admission is based on interaction with child & parents for pre-primary, and previous academic records for higher classes.</p></div>
              <div className="faq-item"><h3>Is transport available?</h3><p>Yes, we have a fleet of buses covering Thergaon, Pimpri, Chinchwad, and nearby areas.</p></div>
              <div className="faq-item"><h3>What is student-teacher ratio?</h3><p>Maintained at 25:1 for personalized attention.</p></div>
              <div className="faq-item"><h3>Are there scholarships?</h3><p>Yes, for meritorious students and sports achievers.</p></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Helmet component for SEO (you need to install react-helmet-async)
// If you don't have it, install: npm install react-helmet-async
// Then wrap your app with HelmetProvider
const Helmet = ({ children }) => <>{children}</>; // Temporary fallback
export default Home;
