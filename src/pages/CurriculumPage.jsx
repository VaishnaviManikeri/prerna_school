// pages/CurriculumPage.jsx
import React from 'react';
import './CurriculumPage.css';
import { FaBook, FaBookOpen, FaBookReader, FaCheckCircle, FaDownload, FaLightbulb } from 'react-icons/fa';

const CurriculumPage = () => {
  const primaryCurriculum = [
    'Language Development (Marathi, Hindi, English - oral & written)',
    'Mathematics (Number sense, operations, mental math)',
    'Environmental Studies (EVS) - Local & global awareness',
    'Creative Arts & Physical Development'
  ];

  const secondaryCurriculum = [
    'Core Subjects with deeper conceptual understanding',
    'Science with practical laboratory sessions',
    'Social Science with historical & civic awareness',
    'Computer literacy & IT skills',
    'Value education & life skills'
  ];

  const hsCurriculum = [
    'Stream-specific specialization (Science, Commerce, Arts)',
    'Advanced problem-solving & analytical skills',
    'Practical applications & project work',
    'Competitive exam orientation',
    'Career & higher education preparation'
  ];

  return (
    <div className="curriculum-page">
      {/* Hero Section */}
      <div className="curriculum-hero">
        <div className="curriculum-hero-content">
          <h1>Curriculum & Syllabus</h1>
          <p className="hero-subtitle">Maharashtra State Board Curriculum - Comprehensive Academic Framework</p>
        </div>
      </div>

      <div className="curriculum-container">
        {/* Overview Section */}
        <div className="info-section">
          <h2>Overview</h2>
          <p>
            Our institution follows the Maharashtra State Board of Secondary and Higher Secondary Education 
            (MSBSHSE) curriculum from Std 1st to 12th. The curriculum is designed to promote holistic 
            development, critical thinking, and practical knowledge application.
          </p>
        </div>

        {/* Curriculum Levels */}
        <div className="curriculum-levels">
          <div className="level-card">
            <div className="card-icon"><FaBook /></div>
            <h3>Primary Level <span>(1st - 4th)</span></h3>
            <p className="focus-text"><strong>Focus:</strong> Foundational literacy, numeracy, and life skills</p>
            <ul>
              {primaryCurriculum.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="level-card">
            <div className="card-icon"><FaBookOpen /></div>
            <h3>Secondary Level <span>(5th - 10th)</span></h3>
            <p className="focus-text"><strong>Focus:</strong> Conceptual understanding & board exam preparation</p>
            <ul>
              {secondaryCurriculum.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="level-card">
            <div className="card-icon"><FaBookReader /></div>
            <h3>Higher Secondary <span>(11th - 12th)</span></h3>
            <p className="focus-text"><strong>Focus:</strong> Specialization & career readiness</p>
            <ul>
              {hsCurriculum.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Syllabus Download Section */}
        <div className="syllabus-section">
          <h2><FaDownload /> Syllabus Download</h2>
          <p>Detailed syllabus for each standard is available at the school office. For reference:</p>
          <div className="syllabus-links">
            <a href="#" className="btn btn-primary">Download Primary Syllabus (Overview)</a>
            <a href="#" className="btn btn-primary">Download Secondary Syllabus (Overview)</a>
            <a href="#" className="btn btn-primary">Download HSC Syllabus (Stream-wise)</a>
          </div>
          <p className="note">* Full syllabus provided to students at beginning of academic year.</p>
        </div>

        {/* Teaching Methodology */}
        <div className="teaching-methods">
          <h3><FaLightbulb /> Our Teaching Methodology</h3>
          <div className="methods-grid">
            <div className="method-item"><FaCheckCircle /> Interactive & student-centric classroom sessions</div>
            <div className="method-item"><FaCheckCircle /> Use of audio-visual aids & smartboards</div>
            <div className="method-item"><FaCheckCircle /> Regular formative assessments & feedback</div>
            <div className="method-item"><FaCheckCircle /> Project-based learning & group discussions</div>
            <div className="method-item"><FaCheckCircle /> Remedial coaching for weaker students</div>
            <div className="method-item"><FaCheckCircle /> Parent-teacher collaboration for student progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;