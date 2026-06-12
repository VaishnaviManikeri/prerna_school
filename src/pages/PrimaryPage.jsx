// pages/PrimaryPage.jsx
import React from 'react';
import { 
  FaBookOpen, FaLanguage, FaCalculator, FaLeaf, FaPalette, 
  FaFutbol, FaChalkboardTeacher, FaBullseye, FaHandsHelping, 
  FaLaptop, FaClipboardList, FaMusic, FaClock, FaTrophy, 
  FaMedal, FaStar, FaChartLine, FaUserGraduate, FaUsers, 
  FaAward, FaSchool, FaArrowRight, FaBook,
  FaRegClock, FaCheckCircle, FaRegCalendarAlt, FaHeart, 
  FaPaintBrush, FaFlask, FaSmile, FaShieldAlt, FaAppleAlt,
  FaBus, FaCrown, FaRocket, FaGem, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram
} from 'react-icons/fa';

const PrimaryPage = () => {
  const subjects = [
    { name: 'English', icon: <FaBookOpen />, color: '#FF6B6B' },
    { name: 'Marathi', icon: <FaLanguage />, color: '#4ECDC4' },
    { name: 'Hindi', icon: <FaLanguage />, color: '#FFE66D' },
    { name: 'Mathematics', icon: <FaCalculator />, color: '#FF8C42' },
    { name: 'Environmental Studies', icon: <FaLeaf />, color: '#2E8B57' },
    { name: 'Drawing & Craft', icon: <FaPaintBrush />, color: '#9B59B6' },
    { name: 'Physical Education', icon: <FaFutbol />, color: '#3498DB' }
  ];

  const highlights = [
    { title: 'Student-Teacher Ratio', desc: '25:1 for personalized attention', icon: <FaUsers />, color: '#FF6B6B' },
    { title: 'Activity-Based Learning', desc: 'Hands-on experiments & projects', icon: <FaFlask />, color: '#4ECDC4' },
    { title: 'Parent-Teacher Meetings', desc: 'Monthly progress reviews', icon: <FaHandsHelping />, color: '#FFE66D' },
    { title: 'Smart Classrooms', desc: 'Audio-visual learning aids', icon: <FaLaptop />, color: '#FF8C42' },
    { title: 'Weekly Assessments', desc: 'Continuous evaluation system', icon: <FaClipboardList />, color: '#2E8B57' },
    { title: 'Co-curricular Activities', desc: 'Art, Music, Dance & Sports', icon: <FaMusic />, color: '#9B59B6' }
  ];

  const dailyRoutine = [
    { time: '9:00 AM - 9:15 AM', activity: 'Morning Assembly & Prayer', icon: <FaHeart /> },
    { time: '9:15 AM - 10:00 AM', activity: 'First Period - Languages', icon: <FaLanguage /> },
    { time: '10:00 AM - 10:45 AM', activity: 'Second Period - Mathematics', icon: <FaCalculator /> },
    { time: '10:45 AM - 11:00 AM', activity: 'Recess / Break', icon: <FaAppleAlt /> },
    { time: '11:00 AM - 11:45 AM', activity: 'Third Period - EVS / Science', icon: <FaFlask /> },
    { time: '11:45 AM - 12:30 PM', activity: 'Fourth Period - Creative Arts', icon: <FaPaintBrush /> },
    { time: '12:30 PM - 1:15 PM', activity: 'Lunch Break', icon: <FaAppleAlt /> },
    { time: '1:15 PM - 2:00 PM', activity: 'Fifth Period - Physical Education', icon: <FaFutbol /> },
    { time: '2:00 PM - 2:45 PM', activity: 'Sixth Period - Activity/Library', icon: <FaBook /> },
    { time: '2:45 PM - 3:30 PM', activity: 'Homework & Revision Time', icon: <FaClipboardList /> }
  ];

  const achievements = [
    { year: '2023-24', achievement: 'District Level Inter-School Sports Champions', icon: <FaTrophy />, color: '#FFD700' },
    { year: '2022-23', achievement: '100% Result in Std 4th Final Exams', icon: <FaMedal />, color: '#C0C0C0' },
    { year: '2021-22', achievement: 'Best Primary School Award - Pune District', icon: <FaStar />, color: '#CD7F32' }
  ];

  const facilities = [
    { name: 'Transport Facility', icon: <FaBus />, color: '#FF6B6B' },
    { name: 'Healthy Meal Plan', icon: <FaAppleAlt />, color: '#4ECDC4' },
    { name: 'Medical Checkup', icon: <FaHeart />, color: '#FF8C42' },
    { name: 'Security Cameras', icon: <FaShieldAlt />, color: '#2E8B57' },
    { name: 'Computer Lab', icon: <FaLaptop />, color: '#9B59B6' },
    { name: 'Playground', icon: <FaFutbol />, color: '#3498DB' }
  ];

  const heroCards = [
    { title: 'Qualified Teachers', value: '25+', description: 'Experienced & Trained Educators', icon: <FaUserGraduate />, color: '#FF6B6B' },
    { title: 'Happy Students', value: '500+', description: 'Nurturing Future Leaders', icon: <FaSmile />, color: '#4ECDC4' },
    { title: 'Years of Excellence', value: '15+', description: 'Legacy of Quality Education', icon: <FaCrown />, color: '#FF8C42' },
    { title: 'Smart Classes', value: '10+', description: 'Technology-Enabled Learning', icon: <FaRocket />, color: '#9B59B6' }
  ];

  return (
    <div className="primary-page">
      {/* Hero Section with Image on Left and Cards on Right */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <div className="hero-main-image">
              <img 
                src="/assets/images/p2.png" 
                alt="Happy Students Learning"
              />
              <div className="image-badge">
                <FaGem /> 15+ Years of Excellence
              </div>
            </div>
          </div>
          <div className="hero-cards-wrapper">
            <div className="hero-cards-grid">
              {heroCards.map((card, idx) => (
                <div className="hero-card" key={idx} style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)` }}>
                  <div className="hero-card-icon">{card.icon}</div>
                  <div className="hero-card-value">{card.value}</div>
                  <div className="hero-card-title">{card.title}</div>
                  <div className="hero-card-desc">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2>Welcome to <span className="gradient-text">Primary Section</span></h2>
            <p>Where every child's journey begins with joy and discovery</p>
          </div>
          <div className="about-grid">
            <div className="about-image">
              <img src="/assets/images/p4.png" alt="Happy Children" />
            </div>
            <div className="about-text">
              <p>Our primary program creates a nurturing environment where young learners develop curiosity, basic literacy, numeracy skills, and social values. We follow the Maharashtra State Board curriculum with <strong>activity-based learning methods</strong> that make education fun and engaging.</p>
              <div className="features-list">
                <div><FaCheckCircle /> Child-Centric Approach</div>
                <div><FaCheckCircle /> Emphasis on Moral Values</div>
                <div><FaCheckCircle /> Regular Health Check-ups</div>
                <div><FaCheckCircle /> Safe & Secure Campus</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="subjects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Curriculum</span>
            <h2>Subjects We Teach</h2>
            <p>Comprehensive curriculum for holistic development</p>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, idx) => (
              <div className="subject-card" key={idx}>
                <div className="card-icon" style={{ color: subject.color }}>{subject.icon}</div>
                <h3>{subject.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Key Highlights</h2>
            <p>What makes our primary education special</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div className="highlight-card" key={idx}>
                <div className="card-icon" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Routine */}
      <div className="routine-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Schedule</span>
            <h2>Daily Routine</h2>
            <p>Structured day for balanced growth</p>
          </div>
          <div className="routine-wrapper">
            <div className="routine-timeline">
              {dailyRoutine.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-time">{item.time}</span>
                    <span className="timeline-activity">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="routine-image">
              <img src="/assets/images/p3.png" alt="Kids Activities" />
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="facilities-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Infrastructure</span>
            <h2>Our Facilities</h2>
            <p>Modern amenities for better learning experience</p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, idx) => (
              <div className="facility-card" key={idx}>
                <div className="card-icon" style={{ backgroundColor: `${facility.color}15`, color: facility.color }}>{facility.icon}</div>
                <h3>{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
     
      {/* Academic Info */}
      <div className="academic-section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="card-icon"><FaRegCalendarAlt /></div>
              <h3>Examination Pattern</h3>
              <ul>
                <li>Quarterly Exam - September</li>
                <li>Half-Yearly Exam - December</li>
                <li>Annual Exam - March</li>
                <li>Weekly Tests - Every Friday</li>
              </ul>
            </div>
            <div className="info-card">
              <div className="card-icon"><FaChartLine /></div>
              <h3>Promotion Criteria</h3>
              <ul>
                <li>Minimum 33% marks in each subject</li>
                <li>75% attendance mandatory</li>
                <li>Regular submission of homework</li>
              </ul>
            </div>
            <div className="info-card">
              <div className="card-icon"><FaBook /></div>
              <h3>Library Resources</h3>
              <ul>
                <li>2000+ Books Available</li>
                <li>Digital Learning Resources</li>
                <li>Reading Hour Every Week</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      

      <style jsx>{`
        .primary-page {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: #f8fafc;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 0.25rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 2.2rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: #64748b;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 3rem 2rem;
          border-radius: 0 0 50px 50px;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-main-image {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 25px 40px -15px rgba(0,0,0,0.3);
        }

        .hero-main-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255,255,255,0.95);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          color: #667eea;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .hero-cards-wrapper {
          display: flex;
          justify-content: center;
        }

        .hero-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          width: 100%;
        }

        .hero-card {
          background: white;
          border-radius: 20px;
          padding: 1.2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-card:hover {
          transform: translateY(-5px);
        }

        .hero-card-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .hero-card-value {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
        }

        .hero-card-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: white;
          margin: 0.3rem 0;
        }

        .hero-card-desc {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.85);
        }

        /* About Section */
        .about-section {
          padding: 4rem 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
        }

        .about-text p {
          color: #475569;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
        }

        .features-list div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #2e7d32;
          font-size: 0.9rem;
        }

        /* Cards Grid - All icons centered */
        .subjects-grid, .highlights-grid, .facilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 1.5rem;
        }

        .subject-card, .highlight-card, .facility-card, .info-card {
          background: white;
          padding: 1.8rem 1rem;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .subject-card:hover, .highlight-card:hover, .facility-card:hover, .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: transparent;
        }

        .card-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subject-card h3, .highlight-card h3, .facility-card h3 {
          font-size: 1rem;
          color: #1e293b;
          text-align: center;
        }

        .highlight-card p {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.5rem;
          text-align: center;
        }

        .subjects-section, .highlights-section, .facilities-section, .achievements-section, .academic-section {
          padding: 4rem 0;
        }

        .highlights-section {
          background: #f1f5f9;
        }

        /* Routine Section */
        .routine-section {
          padding: 4rem 0;
          background: white;
        }

        .routine-wrapper {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .routine-timeline {
          background: #f8fafc;
          border-radius: 30px;
          padding: 1rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          font-size: 1.2rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .timeline-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .timeline-time {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.85rem;
        }

        .timeline-activity {
          color: #64748b;
          font-size: 0.85rem;
        }

        .routine-image img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 35px rgba(0,0,0,0.1);
        }

        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          padding: 2rem;
          border-radius: 24px;
          text-align: center;
          color: white;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
        }

        .achievement-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .achievement-year {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #94a3b8;
        }

        .achievement-card p {
          font-size: 0.9rem;
          text-align: center;
        }

        /* Academic Info */
        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
        }

        .info-card .card-icon {
          font-size: 2rem;
          color: #667eea;
        }

        .info-card h3 {
          font-size: 1.2rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
          width: 100%;
        }

        .info-card li {
          padding: 0.5rem 0;
          color: #64748b;
          font-size: 0.9rem;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
        }

        .info-card li:last-child {
          border-bottom: none;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #667eea, #764ba2);
          margin: 2rem 2rem 4rem;
          border-radius: 40px;
        }

        .cta-content {
          text-align: center;
          padding: 3rem;
          color: white;
        }

        .cta-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          color: #667eea;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container, .about-grid, .routine-wrapper {
            grid-template-columns: 1fr;
          }
          .hero-cards-grid {
            max-width: 450px;
            margin: 0 auto;
          }
          .about-image { max-width: 400px; margin: 0 auto; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 1rem; }
          .section-header h2 { font-size: 1.6rem; }
          .hero-section { padding: 2rem 1rem; }
          .hero-cards-grid { grid-template-columns: 1fr; gap: 1rem; }
          .features-list { grid-template-columns: 1fr; }
          .timeline-content { flex-direction: column; align-items: flex-start; gap: 0.3rem; }
          .cta-section { margin: 2rem 1rem; }
          .cta-content { padding: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default PrimaryPage;