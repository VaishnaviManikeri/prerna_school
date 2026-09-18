// pages/HigherSecondaryPage.jsx
import React, { useState } from "react";
import {
  FaFlask,
  FaCalculator,
  FaBook,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaCheckCircle,
  FaArrowRight,
  FaBullseye,
  FaStar,
} from "react-icons/fa";

const HigherSecondaryPage = () => {
  const [selectedStream, setSelectedStream] = useState("science");

  const streams = {
    science: {
      name: "Science Stream (Coming Soon)",
      icon: <FaFlask />,
      color: "#5a281f",
      subjects: [
        "English (Compulsory)",
        "Marathi/Hindi (Compulsory)",
        "Physics",
        "Chemistry",
        "Biology / Mathematics",
        "Information Technology (Elective)",
      ],
      career:
        "Engineering, Medical, Research, Biotechnology, Pharmacy, Defense",
    },

    commerce: {
      name: "Commerce Stream",
      icon: <FaChartLine />,
      color: "#059669",
      subjects: [
        "English (Compulsory)",
        "Marathi/Hindi (Compulsory)",
        "Book Keeping & Accountancy",
        "Economics",
        "Organization of Commerce & Management",
        "Mathematics / Information Technology",
      ],
      career:
        "CA, CS, CMA, MBA, Banking, Finance, Marketing, Entrepreneurship",
    },

    arts: {
      name: "Arts / Humanities Stream",
      icon: <FaBook />,
      color: "#9333ea",
      subjects: [
        "English (Compulsory)",
        "Marathi/Hindi (Compulsory)",
        "History",
        "Geography",
        "Political Science",
        "Psychology / Sociology / Economics",
      ],
      career:
        "Civil Services, Law, Journalism, Social Work, Teaching, Design",
    },
  };

  return (
    <div className="higher-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaGraduationCap />
              Maharashtra HSC Board Affiliated
            </div>

            <h1>
              Higher Secondary
              <span> Education</span>
            </h1>

            <p>
              Empowering students with quality education, stream specialization,
              and career-focused learning for 11th & 12th standard.
            </p>

          </div>

          <div className="hero-image">
            <img
              src="/assets/images/h11.png"
              alt="Higher Secondary Students"
            />
          </div>
        </div>
      </section>

      <section className="higher-overview-section" id="higher-secondary-overview">
        <div className="container">
          <div className="higher-overview-heading">
            <span>Higher Secondary Section | उच्च माध्यमिक विभाग</span>
            <h2>इयत्ता ११ वी ते १२ वी कला आणि वाणिज्य</h2>
            <p className="higher-overview-notice">लवकरच सायन्स शाखा सुरू करण्यात येणार आहे.</p>
            <p>
              उच्च माध्यमिक विभागामध्ये विद्यार्थ्यांना उच्च शिक्षण, स्पर्धात्मक परीक्षा
              आणि भविष्यातील करिअरसाठी सक्षम करण्याच्या दृष्टीने गुणवत्तापूर्ण शिक्षण व
              मार्गदर्शन दिले जाते. विद्यार्थ्यांच्या क्षमता, आवड आणि करिअरच्या दिशेनुसार
              शैक्षणिक मार्गदर्शन, समुपदेशन आणि विविध शैक्षणिक व सहशालेय उपक्रम राबविले जातात.
            </p>
          </div>

          <div className="higher-overview-grid">
            <article className="higher-overview-card higher-overview-marathi">
              <span className="higher-overview-language">मराठी</span>
              <h3>उच्च शिक्षण आणि करिअरसाठी दिशा</h3>
              <p>
                कला आणि वाणिज्य शाखांमधून विद्यार्थ्यांना त्यांच्या आवडीनुसार विषयांची
                निवड, सातत्यपूर्ण मार्गदर्शन, समुपदेशन आणि भविष्यातील संधींची ओळख करून
                दिली जाते.
              </p>
              <div className="higher-overview-tags">
                <span>उच्च शिक्षण</span>
                <span>स्पर्धात्मक परीक्षा</span>
                <span>करिअर मार्गदर्शन</span>
                <span>सहशालेय उपक्रम</span>
              </div>
              <strong>माध्यमिक व उच्च माध्यमिक विभागाचे प्राचार्य : प्राचार्य शिवले जे. के.</strong>
            </article>

            <article className="higher-overview-card higher-overview-english">
              <span className="higher-overview-language">English</span>
              <h3>Guidance for higher education and future careers</h3>
              <p>
                The Higher Secondary Section focuses on preparing students for higher
                education, competitive examinations and future career opportunities
                through quality education and guidance.
              </p>
              <p>
                Academic counselling, career guidance and various educational and
                co-curricular activities are conducted to help students identify and
                develop their interests and abilities.
              </p>
              <strong>Principal – Secondary &amp; Higher Secondary Section: J. K. Shivle</strong>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <span>About Junior College</span>
            <h2>Tukaram Gujar Junior College</h2>
            <p>
              Our junior college provides specialized education in Science,
              Commerce, and Arts streams as per Maharashtra HSC Board
              curriculum.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon-wrapper">
                <FaGraduationCap className="about-icon" />
              </div>
              <h3>Academic Excellence</h3>
              <p>
                Deep conceptual understanding with practical learning approach.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon-wrapper">
                <FaLaptopCode className="about-icon" />
              </div>
              <h3>Digital Learning</h3>
              <p>
                Smart classrooms with modern technology and visual learning.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon-wrapper">
                <FaBriefcase className="about-icon" />
              </div>
              <h3>Career Guidance</h3>
              <p>
                Expert counseling for higher education and future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STREAM SECTION */}
      <section className="stream-section">
        <div className="container">
          <div className="section-header">
            <span>Streams</span>
            <h2>Select Your Stream</h2>
          </div>

          <div className="stream-selector">
            {Object.keys(streams).map((stream) => (
              <button
                key={stream}
                className={selectedStream === stream ? "active" : ""}
                onClick={() => setSelectedStream(stream)}
              >
                <span className="stream-btn-icon">{streams[stream].icon}</span>
                {streams[stream].name}
              </button>
            ))}
          </div>

          <div className="stream-card">
            <div className="stream-top">
              <div
                className="stream-icon"
                style={{
                  background: `${streams[selectedStream].color}15`,
                  color: streams[selectedStream].color,
                }}
              >
                {streams[selectedStream].icon}
              </div>

              <div>
                <h3>{streams[selectedStream].name}</h3>
                <p>Professional HSC curriculum & specialization</p>
              </div>
            </div>

            <div className="stream-grid">
              <div className="stream-box">
                <h4><FaBook /> Subjects Offered</h4>

                <ul>
                  {streams[selectedStream].subjects.map((sub, idx) => (
                    <li key={idx}>
                      <span className="check-icon"><FaCheckCircle /></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stream-box">
                <h4><FaBullseye /> Career Pathways</h4>

                <p className="career-text">
                  {streams[selectedStream].career}
                </p>

                <h4 className="feature-title"><FaStar /> Special Features</h4>

                <ul>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    Competitive exam preparation
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    Career counseling sessions
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    Industrial visits & seminars
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    Expert faculty guidance
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    Advanced laboratories
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAM SECTION */}
      <section className="exam-section">
        <div className="container">
          <div className="section-header">
            <span>Assessment</span>
            <h2>HSC Examination Pattern</h2>
          </div>

          <div className="table-wrapper">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Internal Assessment</td>
                  <td>
                    20 marks per subject (Assignments, Projects, Oral)
                    </td>
                </tr>

                <tr>
                  <td>Theory Examination</td>
                  <td>
                    80 marks per subject conducted by Maharashtra HSC Board
                    </td>
                </tr>

                <tr>
                  <td>Practical Exams</td>
                  <td>
                    Applicable for Physics, Chemistry & Biology subjects
                    </td>
                </tr>

                <tr>
                  <td>Exam Season</td>
                  <td>February – March (Final HSC Examination)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .higher-page {
          font-family: "Inter", sans-serif;
          background: #f8fafc;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          padding: 0 20px;
        }

        section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header span {
          display: inline-block;
          background: #f3e9e5;
          color: #5a281f;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .section-header h2 {
          font-size: 42px;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .section-header p {
          color: #64748b;
          max-width: 700px;
          margin: auto;
          line-height: 1.7;
        }

        /* HERO */
        .hero-section {
          position: relative;
          background: linear-gradient(
            135deg,
            #fffdfa 0%,
            #ffffff 50%,
            #f3e9e5 100%
          );
          padding: 100px 0;
          min-height: 95vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* Animated Background Shapes */
        .hero-bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #6b3a2a, #8b5cf6);
          top: -100px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #8a5a44, #6b3a2a);
          bottom: -150px;
          left: -150px;
          animation: float 15s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 10s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.08; }
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(37, 99, 235, 0.1);
          color: #5a281f;
          padding: 10px 18px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero-content h1 {
          font-size: 3.2rem;
          line-height: 1.2;
          color: #0f172a;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .hero-content h1 span {
          color: #5a281f;
          font-size: 3.2rem;
        }

        .hero-content p {
          font-size: 18px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 30px;
          max-width: 90%;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .primary-btn,
        .secondary-btn {
          border: none;
          padding: 15px 28px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .primary-btn {
          background: #5a281f;
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          background: #321b14;
        }

        .secondary-btn {
          background: white;
          border: 1px solid #cbd5e1;
          color: #0f172a;
        }

        .secondary-btn:hover {
          background: #f1f5f9;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 25px 20px;
          border-radius: 22px;
          text-align: center;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-icon {
          font-size: 28px;
          color: #5a281f;
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
        }

        .stat-card h3 {
          font-size: 28px;
          color: #0f172a;
        }

        .stat-card p {
          font-size: 14px;
          margin-top: 6px;
        }

        .hero-image img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        /* ABOUT */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .about-card {
          background: white;
          padding: 35px 28px;
          border-radius: 24px;
          text-align: center;
          transition: 0.3s;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
        }

        .about-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .about-icon {
          font-size: 45px;
          color: #5a281f;
        }

        .about-card h3 {
          margin-bottom: 10px;
          color: #0f172a;
        }

        .about-card p {
          color: #64748b;
          line-height: 1.7;
        }

        /* STREAM */
        .stream-section {
          background: #ffffff;
        }

        .stream-selector {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .stream-selector button {
          border: none;
          padding: 15px 28px;
          border-radius: 16px;
          background: #f1f5f9;
          color: #0f172a;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 600;
          transition: 0.3s;
        }

        .stream-btn-icon {
          display: flex;
          align-items: center;
        }

        .stream-selector button.active {
          background: #5a281f;
          color: white;
        }

        .stream-card {
          background: #f8fafc;
          border-radius: 30px;
          padding: 40px;
        }

        .stream-top {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 35px;
        }

        .stream-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
        }

        .stream-top h3 {
          font-size: 32px;
          color: #0f172a;
        }

        .stream-top p {
          color: #64748b;
        }

        .stream-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .stream-box {
          background: white;
          padding: 30px;
          border-radius: 24px;
        }

        .stream-box h4 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #0f172a;
        }

        .stream-box ul {
          list-style: none;
        }

        .stream-box ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: #475569;
          line-height: 1.6;
        }

        .check-icon {
          display: flex;
          align-items: center;
          color: #5a281f;
          min-width: 20px;
        }

        .career-text {
          color: #475569;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .feature-title {
          margin-top: 20px;
        }

        /* TABLE */
        .exam-section {
          background: #f8fafc;
        }

        .table-wrapper {
          overflow-x: auto;
          background: white;
          border-radius: 24px;
          padding: 20px;
        }

        .info-table {
          width: 100%;
          border-collapse: collapse;
        }

        .info-table th {
          background: #5a281f;
          color: white;
          padding: 18px;
          text-align: left;
        }

        .info-table td {
          padding: 18px;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
        }

        .info-table tr:hover {
          background: #f8fafc;
        }

        /* CTA */
        .cta-box {
          background: linear-gradient(135deg, #5a281f, #321b14);
          padding: 70px 30px;
          border-radius: 32px;
          text-align: center;
          color: white;
        }

        .cta-box h2 {
          font-size: 42px;
          margin-bottom: 18px;
        }

        .cta-box p {
          max-width: 700px;
          margin: auto;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .cta-box .primary-btn {
          margin: auto;
          background: white;
          color: #5a281f;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .hero-container {
            min-height: auto;
            padding: 60px 20px;
          }
          .hero-container,
          .stream-grid {
            grid-template-columns: 1fr;
          }

          .hero-content {
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-content p {
            max-width: 100%;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 80px 0;
          }
          section {
            padding: 60px 0;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content h1 span {
            font-size: 2.5rem;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .stream-card {
            padding: 25px;
          }

          .stream-top {
            flex-direction: column;
            text-align: center;
          }

          .cta-box h2 {
            font-size: 30px;
          }
        }

        @media (max-width: 500px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content h1 span {
            font-size: 2rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .stream-selector button {
            width: 100%;
            justify-content: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            justify-content: center;
          }

          .section-header h2 {
            font-size: 28px;
          }

          .stream-top h3 {
            font-size: 26px;
          }

          .cta-box {
            padding: 50px 20px;
          }
        }

        .higher-overview-section {
          background: #fff8df;
          border-top: 1px solid #eadbd5;
          border-bottom: 1px solid #eadbd5;
        }

        .higher-overview-heading {
          max-width: 880px;
          margin: 0 auto 2.8rem;
          text-align: center;
        }

        .higher-overview-heading > span {
          display: inline-block;
          padding: 8px 18px;
          color: #fff;
          background: #6d1e1e;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
        }

        .higher-overview-heading h2 {
          margin: 1rem 0;
          color: #321b14;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.15;
        }

        .higher-overview-heading p,
        .higher-overview-card p {
          color: #5b6876;
          line-height: 1.8;
        }

        .higher-overview-notice {
          color: #e64b27 !important;
          font-weight: 800;
        }

        .higher-overview-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .higher-overview-card {
          padding: 2rem;
          background: #fff;
          border: 1px solid #eadbd5;
          border-top: 4px solid #e64b27;
          box-shadow: 0 12px 28px rgba(50, 27, 20, 0.08);
        }

        .higher-overview-language {
          color: #e64b27;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .higher-overview-card h3 {
          margin: 0.6rem 0 1rem;
          color: #321b14;
          font-size: 1.35rem;
          line-height: 1.35;
        }

        .higher-overview-card p {
          margin: 0 0 1rem;
        }

        .higher-overview-card strong {
          display: block;
          margin-top: 1.25rem;
          color: #6d1e1e;
          line-height: 1.6;
        }

        .higher-overview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.3rem;
        }

        .higher-overview-tags span {
          padding: 0.6rem 0.75rem;
          color: #6d1e1e;
          background: #fff8df;
          border-left: 3px solid #f28c28;
          font-size: 0.86rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .higher-overview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .higher-overview-card {
            padding: 1.35rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HigherSecondaryPage;
