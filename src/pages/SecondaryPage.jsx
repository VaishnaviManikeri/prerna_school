// pages/SecondaryPage.jsx
import React from 'react';
import { 
  FaBook, FaLanguage, FaCalculator, FaFlask, FaGlobe, 
  FaLaptopCode, FaChalkboardTeacher, FaClipboardList, 
  FaFlask as FaScience, FaBriefcase, FaChartLine, FaCalendarAlt,
  FaTrophy, FaUsers, FaMicrophone, FaPaintBrush, FaFutbol,
  FaRegClock, FaCheckCircle, FaArrowRight, FaStar,
  FaUniversity, FaUserGraduate, FaLaptop, FaSchool,
  FaRegCalendarCheck, FaAward, FaRocket, FaHeart, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt
} from 'react-icons/fa';

const SecondaryPage = () => {
  const subjects = [
    { name: 'First Language: Marathi', icon: <FaLanguage />, color: '#FF6B6B' },
    { name: 'Second Language: Hindi/English', icon: <FaBook />, color: '#4ECDC4' },
    { name: 'Third Language: English/Hindi', icon: <FaGlobe />, color: '#FFE66D' },
    { name: 'Mathematics', icon: <FaCalculator />, color: '#FF8C42' },
    { name: 'Science (Physics, Chemistry, Biology)', icon: <FaFlask />, color: '#2E8B57' },
    { name: 'Social Science (History, Geography, Civics)', icon: <FaGlobe />, color: '#9B59B6' },
    { name: 'Information Technology', icon: <FaLaptopCode />, color: '#3498DB' }
  ];

  const highlights = [
    { title: 'Experienced Faculty', desc: 'SSC board-trained teachers with 10+ years experience', icon: <FaChalkboardTeacher />, color: '#FF6B6B' },
    { title: 'Regular Assessments', desc: 'Weekly tests & remedial classes for improvement', icon: <FaClipboardList />, color: '#4ECDC4' },
    { title: 'Science Labs', desc: 'Fully equipped laboratories for practicals', icon: <FaScience />, color: '#FF8C42' },
    { title: 'Career Guidance', desc: 'Professional counseling for future pathways', icon: <FaBriefcase />, color: '#2E8B57' },
    { title: 'Digital Learning', desc: 'Smart classrooms with audio-visual aids', icon: <FaLaptop />, color: '#9B59B6' },
    { title: 'Co-curricular Activities', desc: 'Sports, arts, and cultural competitions', icon: <FaFutbol />, color: '#3498DB' }
  ];

  const achievements = [
    { year: '2023-24', achievement: '95% Result in SSC Board Exams', icon: <FaTrophy />, color: '#FFD700' },
    { year: '2022-23', achievement: 'District Rank Holders - 5 Students', icon: <FaStar />, color: '#C0C0C0' },
    { year: '2021-22', achievement: 'Best Secondary School Award', icon: <FaAward />, color: '#CD7F32' }
  ];

  const routine = [
    { time: '8:00 AM - 8:15 AM', activity: 'Morning Assembly', icon: <FaRegClock /> },
    { time: '8:15 AM - 9:00 AM', activity: 'First Period - Languages', icon: <FaBook /> },
    { time: '9:00 AM - 9:45 AM', activity: 'Second Period - Mathematics', icon: <FaCalculator /> },
    { time: '9:45 AM - 10:30 AM', activity: 'Third Period - Science', icon: <FaFlask /> },
    { time: '10:30 AM - 10:45 AM', activity: 'Short Break', icon: <FaHeart /> },
    { time: '10:45 AM - 11:30 AM', activity: 'Fourth Period - Social Science', icon: <FaGlobe /> },
    { time: '11:30 AM - 12:15 PM', activity: 'Fifth Period - IT/Practical', icon: <FaLaptopCode /> },
    { time: '12:15 PM - 12:45 PM', activity: 'Lunch Break', icon: <FaHeart /> },
    { time: '12:45 PM - 1:30 PM', activity: 'Sixth Period - Remedial/Activity', icon: <FaUsers /> },
    { time: '1:30 PM - 2:15 PM', activity: 'Seventh Period - Library/Sports', icon: <FaFutbol /> },
    { time: '2:15 PM - 3:00 PM', activity: 'Homework & Revision Time', icon: <FaClipboardList /> }
  ];

  const examData = [
    { name: 'Unit Tests', frequency: 'Monthly', weightage: '20%', color: '#FF6B6B' },
    { name: 'Quarterly Exam', frequency: 'Every 3 months', weightage: '30%', color: '#4ECDC4' },
    { name: 'Half-Yearly', frequency: 'September/October', weightage: '20%', color: '#FF8C42' },
    { name: 'Preliminary Exam', frequency: 'January', weightage: '-', color: '#9B59B6' },
    { name: 'SSC Board Exam', frequency: 'March (Std 10th)', weightage: '100%', color: '#3498DB' }
  ];

  const stats = [
    { value: '95%', label: 'SSC Result', icon: <FaChartLine />, color: '#1e3c72' },
    { value: '25+', label: 'Experienced Teachers', icon: <FaUserGraduate />, color: '#1e3c72' },
    { value: '500+', label: 'Students', icon: <FaUsers />, color: '#1e3c72' },
    { value: '15+', label: 'Years of Excellence', icon: <FaAward />, color: '#1e3c72' }
  ];

  return (
    <div className="secondary-page">
      {/* Hero Section - Clean background matching navbar */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            
            <h1 className="hero-title">
              <span className="gradient-text">Secondary Education</span>
              <br /><span className="hero-subtitle">5th - 10th Standard</span>
            </h1>
            <p className="hero-desc">Preparing students for SSC Board examinations with conceptual understanding, analytical thinking, and exam readiness.</p>
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="hero-buttons">
              <button className="primary-btn">Admission Open <FaArrowRight /></button>
              <button className="secondary-btn">View Curriculum</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img 
                src="/assets/images/s1.png" 
                alt="Secondary Students Learning"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop'; }}
              />
              <div className="image-badge">
                <FaUniversity /> SSC Board Preparation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2>Welcome to <span className="gradient-text">Secondary Section</span></h2>
            <p>Bridging foundational learning with advanced concepts for academic excellence</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>The secondary program bridges foundational learning with advanced concepts, preparing students for the SSC Board examinations. Our focus is on conceptual understanding, analytical thinking, and exam readiness. We provide a comprehensive curriculum that develops critical thinking, problem-solving abilities, and prepares students for higher education.</p>
              <div className="features-list">
                <div><FaCheckCircle /> Conceptual Learning</div>
                <div><FaCheckCircle /> Analytical Thinking</div>
                <div><FaCheckCircle /> Exam Preparation</div>
                <div><FaCheckCircle /> Career Guidance</div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=400&fit=crop" alt="Students in Classroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Curriculum</span>
            <h2>Subjects We Teach</h2>
            <p>Comprehensive subject list for 5th to 10th standard</p>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, idx) => (
              <div className="subject-card" key={idx}>
                <div className="card-icon" style={{ backgroundColor: `${subject.color}15`, color: subject.color }}>{subject.icon}</div>
                <h3>{subject.name}</h3>
              </div>
            ))}
          </div>
          <p className="note-text"><FaBook /> <strong>Note:</strong> For 5th-8th standard, same subjects with simplified content and age-appropriate difficulty level.</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Key Highlights & Facilities</h2>
            <p>What makes our secondary education exceptional</p>
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
      </section>

      {/* Daily Routine Section */}
      <section className="routine-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Schedule</span>
            <h2>Daily Routine</h2>
            <p>Structured timetable for effective learning</p>
          </div>
          <div className="routine-wrapper">
            <div className="routine-timeline">
              {routine.map((item, idx) => (
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
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=400&fit=crop" alt="School Routine" />
            </div>
          </div>
        </div>
      </section>

      {/* Examination System */}
      <section className="exam-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Assessment</span>
            <h2>Examination System</h2>
            <p>Comprehensive evaluation structure for board preparation</p>
          </div>
          <div className="exam-grid">
            {examData.map((exam, idx) => (
              <div className="exam-card" key={idx} style={{ borderBottomColor: exam.color }}>
                <div className="exam-icon" style={{ color: exam.color }}><FaCalendarAlt /></div>
                <h3>{exam.name}</h3>
                <div className="exam-detail">
                  <span className="exam-label">Frequency:</span>
                  <span>{exam.frequency}</span>
                </div>
                <div className="exam-detail">
                  <span className="exam-label">Weightage:</span>
                  <span className="exam-weight">{exam.weightage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Recognition</span>
            <h2>Our Achievements</h2>
            <p>Proud moments of our institution</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((ach, idx) => (
              <div className="achievement-card" key={idx}>
                <div className="achievement-icon" style={{ color: ach.color }}>{ach.icon}</div>
                <div className="achievement-year">{ach.year}</div>
                <p>{ach.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSC Board Info */}
      <section className="ssc-section">
        <div className="container">
          <div className="ssc-content">
            <div className="ssc-text">
              <h2><FaSchool /> SSC Board Passing Criteria</h2>
              <p><strong>Minimum 35 marks out of 100</strong> in each subject (both theory and practical where applicable).</p>
              <p>Students failing in up to 2 subjects can appear for <strong>supplementary exam</strong> in June/July.</p>
              <div className="ssc-features">
                <div><FaCheckCircle /> Internal Assessment Included</div>
                <div><FaCheckCircle /> Practical Exams for Science Subjects</div>
                <div><FaCheckCircle /> Oral Exams for Languages</div>
              </div>
            </div>
            <div className="ssc-image">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop" alt="Students with Certificates" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Join Our Secondary Program?</h2>
            <p>Admissions Open for Academic Year 2025-26 | Limited Seats Available</p>
            <button className="primary-btn">Enquire Now <FaArrowRight /></button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* SecondaryPage.css - Matching Navbar Theme */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .secondary-page {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          padding: 0.25rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .section-header p {
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .gradient-text {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Hero Section - Clean background matching navbar (no dark gradient) */
        .hero-section {
          position: relative;
          background: white;
          padding: 80px 0;
          min-height: auto;
          display: flex;
          align-items: center;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          padding: 0 2rem;
        }

        .hero-content {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #f0fdf4;
          padding: 0.5rem 1.4rem;
          border-radius: 100px;
          font-size: 0.85rem;
          color: #166534;
          margin-bottom: 2rem;
          border: 1px solid #bbf7d0;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-title {
          font-size: 3.2rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #0f172a;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .hero-title .gradient-text {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 3.2rem;
        }

        .hero-subtitle {
          font-size: 2rem;
          font-weight: 500;
          color: #475569;
          letter-spacing: -0.01em;
        }

        .hero-desc {
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 90%;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 2.5rem;
        }

        .stat-card {
          background: #f8fafc;
          padding: 1rem 1.2rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .stat-icon {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: center;
        }

        .stat-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e3c72;
          letter-spacing: -0.01em;
        }

        .stat-card p {
          font-size: 0.7rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .primary-btn, .secondary-btn {
          padding: 1rem 2.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border: none;
        }

        .primary-btn {
          background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
          color: white;
          box-shadow: 0 10px 25px -5px rgba(230, 126, 34, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px -5px rgba(230, 126, 34, 0.4);
        }

        .secondary-btn {
          background: #f1f5f9;
          color: #1e293b;
          border: 1px solid #e2e8f0;
        }

        .secondary-btn:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-image {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
        }

        .hero-image:hover {
          transform: scale(1.02);
        }

        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .hero-image:hover img {
          transform: scale(1.02);
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          padding: 0.7rem 1.2rem;
          border-radius: 60px;
          font-weight: 600;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          border: 1px solid rgba(255,255,255,0.15);
        }

        /* About Section */
        .about-section {
          background: white;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
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

        .about-image img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
        }

        /* Subjects Grid */
        .subjects-section {
          background: #f8fafc;
        }

        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .subject-card {
          background: white;
          padding: 1.8rem 1rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .subject-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: transparent;
        }

        .card-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        .subject-card h3 {
          font-size: 1rem;
          color: #1e293b;
          text-align: center;
        }

        .note-text {
          margin-top: 2rem;
          padding: 1rem;
          background: #e2e8f0;
          border-radius: 12px;
          text-align: center;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Highlights Section */
        .highlights-section {
          background: white;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .highlight-card {
          background: #f8fafc;
          padding: 2rem 1.5rem;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .highlight-card h3 {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .highlight-card p {
          font-size: 0.85rem;
          color: #64748b;
          text-align: center;
        }

        /* Routine Section */
        .routine-section {
          background: #f8fafc;
        }

        .routine-wrapper {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .routine-timeline {
          background: white;
          border-radius: 30px;
          padding: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
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
          background: #f1f5f9;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e3c72;
          font-size: 1.2rem;
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

        /* Exam Section */
        .exam-section {
          background: white;
        }

        .exam-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .exam-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s;
          border-bottom: 4px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .exam-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .exam-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .exam-card h3 {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .exam-detail {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0.3rem 0;
          font-size: 0.85rem;
        }

        .exam-label {
          font-weight: 600;
          color: #64748b;
        }

        .exam-weight {
          font-weight: 700;
          color: #1e3c72;
        }

        /* Achievements Section */
        .achievements-section {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }

        .achievements-section .section-header h2,
        .achievements-section .section-header p {
          color: white;
        }

        .achievements-section .section-tag {
          background: rgba(255,255,255,0.2);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 24px;
          text-align: center;
          color: white;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.15);
        }

        .achievement-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .achievement-year {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e2e8f0;
        }

        .achievement-card p {
          font-size: 0.9rem;
          text-align: center;
        }

        /* SSC Section */
        .ssc-section {
          background: #f8fafc;
        }

        .ssc-content {
          display: grid;
          grid-template-columns: 1fr 0.6fr;
          gap: 3rem;
          align-items: center;
          background: white;
          padding: 2rem;
          border-radius: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .ssc-text h2 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ssc-text p {
          color: #475569;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .ssc-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .ssc-features div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #2e7d32;
          font-size: 0.9rem;
        }

        .ssc-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        /* CTA Section */
        .cta-section {
          padding: 0 2rem 5rem;
        }

        .cta-box {
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          padding: 70px 30px;
          border-radius: 40px;
          text-align: center;
          color: white;
        }

        .cta-box h2 {
          font-size: 42px;
          margin-bottom: 18px;
        }

        .cta-box p {
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.7;
          opacity: 0.9;
        }

        .cta-box .primary-btn {
          background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
          color: white;
          margin: 0 auto;
        }

        .cta-box .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(230, 126, 34, 0.4);
        }

        /* Responsive Design - Matching Navbar Breakpoints */
        @media (max-width: 1100px) {
          .hero-container, .about-grid, .routine-wrapper, .ssc-content {
            grid-template-columns: 1fr;
          }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-desc { max-width: 100%; }
          .hero-content { max-width: 100%; text-align: center; }
          .hero-badge { margin: 0 auto 2rem; }
          .hero-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .about-image, .routine-image, .ssc-image { max-width: 400px; margin: 0 auto; }
          .hero-title { font-size: 2.5rem; }
          .hero-title .gradient-text { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.6rem; }
        }

        @media (max-width: 900px) {
          .container {
            padding: 0 1.5rem;
          }
          .section-header h2 {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .container { padding: 0 1rem; }
          section { padding: 60px 0; }
          .section-header h2 { font-size: 32px; }
          .hero-section { padding: 60px 0; }
          .hero-title { font-size: 2rem; }
          .hero-title .gradient-text { font-size: 2rem; }
          .hero-subtitle { font-size: 1.3rem; }
          .hero-stats { gap: 0.8rem; }
          .stat-card { padding: 0.8rem; }
          .stat-card h3 { font-size: 1.2rem; }
          .features-list { grid-template-columns: 1fr; }
          .timeline-content { flex-direction: column; align-items: flex-start; gap: 0.3rem; }
          .cta-box { padding: 50px 20px; }
          .cta-box h2 { font-size: 30px; }
          .hero-buttons { flex-direction: column; }
          .primary-btn, .secondary-btn { justify-content: center; width: 100%; }
        }

        @media (max-width: 576px) {
          .section-header h2 {
            font-size: 28px;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .subjects-grid {
            grid-template-columns: 1fr;
          }
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          .exam-grid {
            grid-template-columns: 1fr;
          }
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .hero-title { font-size: 1.6rem; }
          .hero-title .gradient-text { font-size: 1.6rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-stats { grid-template-columns: 1fr; }
          .section-header h2 { font-size: 28px; }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }
          .stat-card {
            padding: 0.6rem;
          }
          .cta-box h2 {
            font-size: 24px;
          }
          .cta-box .primary-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 320px) {
          .hero-title {
            font-size: 1.3rem;
          }
          .hero-title .gradient-text {
            font-size: 1.3rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }

        /* Animation for scroll reveal */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subject-card, .highlight-card, .exam-card, .achievement-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .subject-card:nth-child(1) { animation-delay: 0.1s; }
        .subject-card:nth-child(2) { animation-delay: 0.2s; }
        .subject-card:nth-child(3) { animation-delay: 0.3s; }
        .subject-card:nth-child(4) { animation-delay: 0.4s; }
        .subject-card:nth-child(5) { animation-delay: 0.5s; }
        .subject-card:nth-child(6) { animation-delay: 0.6s; }
        .subject-card:nth-child(7) { animation-delay: 0.7s; }

        /* Print Styles */
        @media print {
          .hero-buttons, .cta-section {
            display: none;
          }
          .hero-section {
            background: white;
            padding: 20px 0;
          }
          .hero-title .gradient-text, .hero-title {
            color: black;
            background: none;
            -webkit-background-clip: unset;
            background-clip: unset;
          }
          .stat-card {
            background: #f0f0f0;
            border: 1px solid #ddd;
          }
          .stat-card h3, .stat-card p {
            color: black;
          }
        }
      `}</style>
    </div>
  );
};

export default SecondaryPage;