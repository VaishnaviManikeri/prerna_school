import React from 'react';
import {
  FaAward,
  FaBookOpen,
  FaBullseye,
  FaChalkboardTeacher,
  FaFlask,
  FaGraduationCap,
  FaHistory,
  FaLaptop,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaSchool,
  FaUsers,
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const milestones = [
    { year: '2005', title: 'Foundation', text: 'A focused educational journey began in Laxminagar, Thergaon with a commitment to accessible quality learning.' },
    { year: '2012', title: 'Secondary Growth', text: 'Expanded academic support, activity-based learning, and strong board preparation for higher classes.' },
    { year: '2018', title: 'Modern Campus', text: 'Introduced smarter classrooms, improved laboratories, library access, and student development spaces.' },
    { year: '2026', title: 'Future Ready', text: 'Continuing to blend values, discipline, technology, and career-focused guidance for every learner.' },
  ];

  const facilities = [
    { icon: <FaLaptop />, title: 'Smart Learning', text: 'Technology-enabled classrooms for clear, engaging, and interactive lessons.' },
    { icon: <FaFlask />, title: 'Science Labs', text: 'Practical learning spaces that help students understand concepts by doing.' },
    { icon: <FaBookOpen />, title: 'Library', text: 'Reading resources that support language, curiosity, research, and exam preparation.' },
    { icon: <FaSchool />, title: 'Safe Campus', text: 'A disciplined, caring environment designed for daily learning and student confidence.' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero" id="overview">
        <img src="/assets/images/h1.png" alt="Prerana Shikshan Sanstha campus" className="about-hero-img" />
        <div className="about-hero-overlay">
          <div className="about-container about-hero-content">
            <span className="about-kicker">About Our Institution</span>
            <h1>प्रेरणा शिक्षण संस्था</h1>
            <p>
              Prerana Valak, Primary, Secondary & Tukaram Gujar Jr. College,
              Laxminagar, Thergaon, Pune - 33.
            </p>
            <div className="about-hero-actions">
              <a href="#mission-vision" className="about-primary-btn">Our Vision</a>
              <a href="#infrastructure" className="about-secondary-btn">Explore Campus</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-intro-copy">
            <span className="about-section-label">Overview</span>
            <h2>A school community built around learning, values, and opportunity.</h2>
            <p>
              प्रेरणा शिक्षण संस्था serves students from the Thergaon community
              with a balanced focus on academic excellence, character building,
              discipline, cultural confidence, and practical skills.
            </p>
            <p>
              Located at Laxminagar, Thergaon, Pune - 33, the institution aims
              to create a supportive environment where students are guided by
              caring teachers, modern teaching methods, and strong school values.
            </p>
            <p>
              The school supports a complete educational journey through primary,
              secondary, and junior college learning. Students are encouraged to
              grow through classroom teaching, practical activities, reading,
              cultural participation, sports, and regular academic feedback.
            </p>
            <p>
              प्रेरणा शिक्षण संस्था works closely with parents so that every
              learner receives the right balance of discipline, encouragement,
              values, and preparation for future academic choices.
            </p>
          </div>

          <div className="about-stats-panel">
            <div className="about-stat">
              <FaUsers />
              <strong>Student First</strong>
              <span>Personal attention and steady academic mentoring.</span>
            </div>
            <div className="about-stat">
              <FaChalkboardTeacher />
              <strong>Dedicated Faculty</strong>
              <span>Teachers focused on clarity, discipline, and confidence.</span>
            </div>
            <div className="about-stat">
              <FaAward />
              <strong>Holistic Growth</strong>
              <span>Academics, activities, values, and leadership habits.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission" id="mission-vision">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">Mission & Vision</span>
            <h2>Preparing students for a bright and responsible future.</h2>
          </div>

          <div className="about-mission-grid">
            <div className="about-mission-card">
              <FaBullseye />
              <h3>Our Mission</h3>
              <p>
                To provide quality education that strengthens knowledge,
                discipline, confidence, communication, and moral values in every
                student.
              </p>
            </div>
            <div className="about-mission-card">
              <FaGraduationCap />
              <h3>Our Vision</h3>
              <p>
                To become a trusted educational institution known for academic
                achievement, social responsibility, and future-ready learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-principal" id="principal-message">
        <div className="about-container about-principal-card">
          <div className="about-principal-image">
            <img src="/assets/images/principle.png" alt="Principal of Prerana Shikshan Sanstha" />
          </div>
          <div className="about-principal-copy">
            <FaQuoteLeft className="about-quote-icon" />
            <span className="about-section-label">Principal's Message</span>
            <h2>Every child deserves guidance that sees their potential.</h2>
            <p>
              At प्रेरणा शिक्षण संस्था, we believe education should shape both
              the mind and the character. Our teachers work with sincerity to
              help students learn with confidence, respect their roots, and
              prepare for the opportunities ahead.
            </p>
            <h4>Principal</h4>
            <span>Prerana Shikshan Sanstha, Thergaon</span>
          </div>
        </div>
      </section>

      <section className="about-history" id="history">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">History & Milestones</span>
            <h2>A growing legacy in Thergaon, Pune.</h2>
          </div>

          <div className="about-timeline">
            {milestones.map((item) => (
              <div className="about-timeline-item" key={item.year}>
                <div className="about-timeline-year">{item.year}</div>
                <div className="about-timeline-content">
                  <FaHistory />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-infrastructure" id="infrastructure">
        <div className="about-container">
          <div className="about-infra-heading">
            <div>
              <span className="about-section-label">Infrastructure</span>
              <h2>Learning spaces designed for focus, safety, and growth.</h2>
            </div>
            <p>
              The campus supports classroom learning, practical exposure,
              reading habits, activities, and student wellbeing.
            </p>
          </div>

          <div className="about-facility-grid">
            {facilities.map((facility) => (
              <div className="about-facility-card" key={facility.title}>
                <div className="about-facility-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.text}</p>
              </div>
            ))}
          </div>

          <div className="about-location-strip">
            <FaMapMarkerAlt />
            <div>
              <strong>Visit Us</strong>
              <span>प्रेरणा शिक्षण संस्था, Laxminagar, Thergaon, Pune - 33</span>
            </div>
            <a href="#contact">Contact School</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
