// pages/CurriculumPage.jsx
import React from 'react';
import './CurriculumPage.css';
import { FaBook, FaBookOpen, FaBookReader, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

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
          <h2>Curriculum &amp; Syllabus | अभ्यासक्रम</h2>
          <p>
            प्रेरणा शिक्षण संस्थेतील सर्व विद्यालयांमध्ये महाराष्ट्र राज्य माध्यमिक
            व उच्च माध्यमिक शिक्षण मंडळाच्या मार्गदर्शक तत्त्वांनुसार अभ्यासक्रमाची
            अंमलबजावणी केली जाते.
          </p>
          <p>
            अभ्यासक्रमासोबत विद्यार्थ्यांच्या सर्वांगीण विकासासाठी क्रीडा, कला,
            संस्कार, पर्यावरण, विज्ञान, तंत्रज्ञान, आपत्ती व्यवस्थापन, आरोग्य,
            सामाजिक जाणीव आणि जीवनकौशल्ये यांना विशेष महत्त्व दिले जाते.
          </p>
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

        <div className="co-curricular-section">
          <div className="co-curricular-heading">
            <span>Co-curricular Activities | सहशालेय व सामाजिक उपक्रम</span>
            <h2>शिक्षणासोबत संस्कार, सहभाग आणि सामाजिक जाणीव.</h2>
            <p>
              विद्यार्थ्यांच्या सर्वांगीण विकासासाठी संस्थेमध्ये विविध समित्या व
              उपक्रम कार्यरत आहेत.
            </p>
          </div>

          <div className="co-curricular-grid">
            <div className="co-curricular-group">
              <h3>कार्यरत समित्या</h3>
              <ul>
                <li>शिक्षक-पालक संघ</li>
                <li>माता-पालक संघ</li>
                <li>सखी सावित्री समिती</li>
                <li>महिला तक्रार निवारण समिती</li>
                <li>शाळा व्यवस्थापन समिती</li>
                <li>विद्यार्थी सुरक्षा व भौतिक सुविधा विकास समिती</li>
                <li>अमली पदार्थ विरोधी समिती</li>
                <li>इको क्लब</li>
                <li>माजी विद्यार्थी संघ</li>
              </ul>
            </div>

            <div className="co-curricular-group">
              <h3>उपक्रम</h3>
              <ul>
                <li>वक्तृत्व मंडळ</li>
                <li>संस्कार वर्ग</li>
                <li>विज्ञान प्रदर्शन</li>
                <li>इन्स्पायर अवॉर्ड</li>
                <li>आरोग्य शिबिरे</li>
                <li>आपत्ती व्यवस्थापन</li>
                <li>पर्यावरणपूरक गणेशोत्सव</li>
                <li>विविध सामाजिक जनजागृती कार्यक्रम</li>
              </ul>
            </div>
          </div>

          <div className="co-curricular-note">
            <h3>विद्यार्थिनींसाठी विशेष सत्रे</h3>
            <p>
              विविध सामाजिक संस्था व तज्ज्ञांच्या सहकार्याने विद्यार्थिनींसाठी
              आरोग्य, स्वच्छता, सुरक्षितता, आत्मविश्वास, व्यक्तिमत्त्व विकास,
              किशोरवयीन मार्गदर्शन आणि जीवनकौशल्ये यांवर विविध सत्रांचे आयोजन केले जाते.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;