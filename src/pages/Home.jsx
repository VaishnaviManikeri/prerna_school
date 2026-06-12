import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

// Images for Slider (replace with actual school images)
import slider1 from '/assets/images/image.png';
import slider2 from '/assets/images/h11.png';
import slider3 from '/assets/images/h3.png';
import slider4 from '/assets/images/h4.png';

// Icons (using React Icons)
import { 
  FaUsers, 
  FaChalkboardTeacher, 
  FaLaptopCode, 
  FaSchool, 
  FaCamera, 
  FaCalendarAlt, 
  FaNewspaper, 
  FaQuoteLeft, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaTrophy, 
  FaUserGraduate, 
  FaBookOpen, 
  FaChevronLeft, 
  FaChevronRight, 
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
  FaGlobe
} from 'react-icons/fa';

const Home = () => {
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider3, slider4];
  const totalSlides = slides.length;

  // Counter State
  const [counters, setCounters] = useState({
    students: 0,
    teachers: 0,
    courses: 0,
    awards: 0
  });
  const [hasCounted, setHasCounted] = useState(false);
  const counterRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Sample data arrays
  const facilities = [
    { icon: <FaLaptop />, title: "Smart Classrooms", desc: "Digital learning with interactive boards" },
    { icon: <FaVial />, title: "Science Labs", desc: "Fully equipped Physics, Chem, Bio labs" },
    { icon: <FaBookOpen />, title: "Library", desc: "10,000+ books & e-resources" },
    { icon: <FaBasketballBall />, title: "Sports Complex", desc: "Indoor & outdoor games" },
    { icon: <FaBus />, title: "Transport", desc: "Safe GPS-enabled buses" },
    { icon: <FaUtensils />, title: "Canteen", desc: "Nutritious meals & hygiene" },
  ];

  const achievements = [
    { title: "Best School Award", year: "2023", desc: "By Education Excellence" },
    { title: "100% Board Results", year: "2024", desc: "SSC & HSC toppers" },
    { title: "Green School", year: "2022", desc: "Eco-friendly initiative" },
    { title: "National Rank", year: "2023", desc: "Rank 1 in Robotics" },
  ];

  const topRankers = [
    { name: "Aditya Sharma", rank: "1st (SSC 98.6%)", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Neha Patil", rank: "2nd (SSC 97.8%)", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Rohan Joshi", rank: "1st (JEE Mains)", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  ];

  const testimonials = [
    { name: "Mrs. Sunita Kulkarni", text: "Best decision for my child. Holistic development & caring teachers.", role: "Parent" },
    { name: "Mr. Rajesh Gupta", text: "Excellent infrastructure and academic support. Highly recommended!", role: "Parent" },
    { name: "Dr. Anjali Desai", text: "The school's vision is outstanding. My daughter loves going here.", role: "Parent" },
  ];

  const events = [
    { title: "Annual Sports Day", date: "Dec 15, 2024", desc: "Inter-house competitions" },
    { title: "PTA Meeting", date: "Nov 30, 2024", desc: "Progress discussion" },
    { title: "Science Exhibition", date: "Jan 10, 2025", desc: "Innovative projects" },
  ];

  const notices = [
    { title: "Winter Break Notice", date: "Dec 22 - Jan 5", type: "Important" },
    { title: "Admission Open 2025-26", date: "Apply now", type: "Admission" },
    { title: "Holiday on Monday", date: "Nov 15, 2024", type: "Holiday" },
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
        {/* Hero Section with Image Slider */}
        <section className="hero-section">
          <div className="slider-container">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, idx) => (
                <div className="slide" key={idx}>
                  <img src={slide} alt={`प्रेरणा School Campus ${idx + 1}`} loading={idx === 0 ? "eager" : "lazy"} />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <span className="school-badge">Since 2005</span>
                      <h1 className="animate-fade">प्रेरणा शिक्षण संस्था</h1>
                      <p className="animate-fade-delay">Laxminagar, Thergaon, Pune - 33</p>
                      <div className="slide-buttons">
                        <button className="cta-btn primary animate-fade-delay2">Enroll Now →</button>
                        <button className="cta-btn secondary animate-fade-delay2">Virtual Tour</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn left" onClick={prevSlide} aria-label="Previous slide"><FaChevronLeft /></button>
            <button className="slider-btn right" onClick={nextSlide} aria-label="Next slide"><FaChevronRight /></button>
            <div className="dots">
              {slides.map((_, idx) => (
                <span key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)}></span>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links">
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
        <section className="about-section" id="about">
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
                <button className="read-more-btn">Read More →</button>
              </div>
              <div className="about-img">
                <img src="https://picsum.photos/id/159/500/400" alt="School Building - प्रेरणा शिक्षण संस्था Campus" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="whyus-section">
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
        <section className="courses-section" id="academics">
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
        <section className="counter-section" ref={counterRef}>
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
        <section className="facilities-section">
          <div className="container">
            <span className="section-badge center">Infrastructure</span>
            <h2 className="section-title">Our <span>Facilities</span></h2>
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
        </section>

        {/* Achievements */}
        <section className="achievements-section">
          <div className="container">
            <span className="section-badge center white">Recognition</span>
            <h2 className="section-title">Our <span>Achievements</span></h2>
            <div className="achievements-grid">
              {achievements.map((ach, idx) => (
                <div className="achievement-card" key={idx}>
                  <FaTrophy className="ach-icon" />
                  <h3>{ach.title}</h3>
                  <p>{ach.year}</p>
                  <span>{ach.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Rankers */}
        <section className="rankers-section">
          <div className="container">
            <span className="section-badge center">Excellence</span>
            <h2 className="section-title">Our Top <span>Rankers</span></h2>
            <div className="rankers-grid">
              {topRankers.map((ranker, idx) => (
                <div className="ranker-card" key={idx}>
                  <img src={ranker.img} alt={ranker.name} loading="lazy" />
                  <h3>{ranker.name}</h3>
                  <p>{ranker.rank}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="gallery-section" id="gallery">
          <div className="container">
            <span className="section-badge center">Moments</span>
            <h2 className="section-title">Campus <span>Gallery</span></h2>
            <div className="gallery-grid">
              {[1,2,3,4,5,6].map((i) => (
                <div className="gallery-img" key={i}>
                  <img src={`https://picsum.photos/id/1${i+10}/300/200`} alt={`Campus Gallery ${i}`} loading="lazy" />
                  <div className="gallery-overlay"><FaCamera /> View Gallery</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events & Notices */}
        <section className="events-notices">
          <div className="container">
            <div className="two-col">
              <div className="events">
                <h3><FaCalendarAlt /> Upcoming Events</h3>
                {events.map((ev, idx) => <div key={idx} className="event-item"><h4>{ev.title}</h4><p>{ev.date}</p><small>{ev.desc}</small></div>)}
              </div>
              <div className="notices">
                <h3><FaNewspaper /> Latest Notices</h3>
                {notices.map((not, idx) => <div key={idx} className={`notice-item ${not.type.toLowerCase()}`}><h4>{not.title}</h4><p>{not.date}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Principal Message - Image Left, Content Right */}
        <section className="principal-section">
          <div className="container">
            <div className="principal-card">
              <div className="principal-image-wrapper">
                <img src="/assets/images/principle.png" alt="Principal Vandana Joshi - प्रेरणा शिक्षण संस्था" loading="lazy" />
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
        <section className="testimonials-section">
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

        {/* Video Section */}
        {/* <section className="video-section">
          <div className="container">
            <span className="section-badge center">Media</span>
            <h2 className="section-title">School <span>Virtual Tour</span></h2>
            <div className="video-wrapper">
              <iframe width="100%" height="450" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" title="प्रेरणा School Virtual Tour" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </section> */}

        {/* Campus Tour */}
        <section className="campustour-section">
          <div className="container">
            <h2 className="section-title">360° <span>Campus Tour</span></h2>
            <div className="tour-grid">
              <div className="tour-card"><img src="https://picsum.photos/id/15/400/250" alt="Smart Classroom" loading="lazy" /><div className="tour-info"><FaMapMarkerAlt /> Smart Classroom</div></div>
              <div className="tour-card"><img src="https://picsum.photos/id/91/400/250" alt="Library" loading="lazy" /><div className="tour-info"><FaMapMarkerAlt /> Central Library</div></div>
              <div className="tour-card"><img src="https://picsum.photos/id/96/400/250" alt="Sports Ground" loading="lazy" /><div className="tour-info"><FaMapMarkerAlt /> Sports Complex</div></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
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