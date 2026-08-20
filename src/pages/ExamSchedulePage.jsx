// pages/ExamSchedulePage.jsx
import React from 'react';
import { FaClipboard, FaFlask, FaMapPin, FaChartBar } from 'react-icons/fa';

const ExamSchedulePage = () => {
  const currentYear = '2024-2025';

  const examSchedule = [
    { exam: 'Unit Test 1', class: '1st to 9th, 11th', date: '15th - 20th July 2024', pattern: 'Objective + Short Answer (40 marks, 1.5 hrs)' },
    { exam: 'Quarterly Examination', class: '1st to 9th, 11th', date: '10th - 20th September 2024', pattern: 'Theory (80 marks, 3 hrs)' },
    { exam: 'Half-Yearly Examination', class: '1st to 9th, 11th', date: '20th - 30th October 2024', pattern: 'Full Syllabus (80 marks, 3 hrs)' },
    { exam: 'Unit Test 2', class: '1st to 9th, 11th', date: '5th - 10th December 2024', pattern: 'Objective + Short Answer (40 marks)' },
    { exam: 'Preliminary Exam (Std 10th & 12th)', class: '10th & 12th only', date: '5th - 15th January 2025', pattern: 'Board Pattern (80 marks, 3.5 hrs)' },
    { exam: 'Annual / Final Examination', class: '1st to 9th, 11th', date: '25th Feb - 10th March 2025', pattern: 'Full Syllabus (80 marks, 3 hrs)' },
    { exam: 'SSC Board Exam (Std 10th)', class: '10th', date: '1st - 25th March 2025', pattern: 'As per MSBSHSE board' },
    { exam: 'HSC Board Exam (Std 12th)', class: '12th', date: '15th Feb - 20th March 2025', pattern: 'As per MSBSHSE board' }
  ];

  const practicalSchedule = [
    { subject: 'Physics', class: '11th & 12th Science', date: 'January 2025 (2nd & 3rd Week)' },
    { subject: 'Chemistry', class: '11th & 12th Science', date: 'January 2025 (3rd & 4th Week)' },
    { subject: 'Biology', class: '11th & 12th Science', date: 'February 2025 (1st Week)' },
    { subject: 'Information Technology', class: '9th to 12th', date: 'February 2025 (2nd Week)' }
  ];

  return (
    <div className="exam-schedule-page">
      <div className="page-header">
        <h1>Examination Schedule {currentYear}</h1>
        <p className="subtitle">प्रेरणा शिक्षण संस्था - Assessment Timeline & Board Exam Dates</p>
      </div>

      <div className="info-section">
        <p><FaMapPin /> <strong>Note:</strong> This is a provisional schedule. Exact dates will be announced 15 days prior to each examination. 
        Students are advised to prepare as per the syllabus completion timeline.</p>
      </div>

      <div className="schedule-section">
        <h2><FaClipboard /> Written Examination Schedule</h2>
        <div className="table-responsive">
          <table className="exam-table">
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Class</th>
                <th>Tentative Date</th>
                <th>Exam Pattern</th>
              </tr>
            </thead>
            <tbody>
              {examSchedule.map((exam, idx) => (
                <tr key={idx}>
                  <td>{exam.exam}</td>
                  <td>{exam.class}</td>
                  <td>{exam.date}</td>
                  <td>{exam.pattern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="schedule-section">
        <h2><FaFlask /> Practical Examination Schedule (Science & IT)</h2>
        <div className="table-responsive">
          <table className="exam-table practical-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Class</th>
                <th>Schedule Date</th>
              </tr>
            </thead>
            <tbody>
              {practicalSchedule.map((prac, idx) => (
                <tr key={idx}>
                  <td>{prac.subject}</td>
                  <td>{prac.class}</td>
                  <td>{prac.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="info-grid">
        <div className="important-instructions">
          <h3><FaMapPin /> Important Exam Instructions</h3>
          <ul>
            <li>Hall ticket / Admit card is mandatory for all examinations.</li>
            <li>Students must report 15 minutes before the exam start time.</li>
            <li>No electronic gadgets, books, or study material allowed in exam hall.</li>
            <li>For SSC/HSC board exams, follow MSBSHSE guidelines strictly.</li>
            <li>Minimum 75% attendance required to appear for final exams.</li>
            <li>Parent-Teacher meeting will be scheduled after each major exam result declaration.</li>
            <li>Supplementary exams (if applicable) will be held in June-July 2025 for failed subjects.</li>
          </ul>
        </div>

        <div className="result-declaration">
          <h3><FaChartBar /> Result Declaration Dates (Tentative)</h3>
          <ul>
            <li><strong>Quarterly Exam Result:</strong> Within 1 week of exam completion</li>
            <li><strong>Half-Yearly Result:</strong> 1st week of November 2024</li>
            <li><strong>Annual Exam Result (1st-9th, 11th):</strong> 20th March 2025</li>
            <li><strong>SSC Result (10th):</strong> End of May 2025 (official MSBSHSE date)</li>
            <li><strong>HSC Result (12th):</strong> End of May 2025 (official MSBSHSE date)</li>
          </ul>
        </div>
      </div>

      <style>{`
        .exam-schedule-page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 4px solid #dc2626;
          display: inline-block;
          width: 100%;
        }

        .page-header h1 {
          font-size: 2.2rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #1e293b, #334155);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #475569;
          font-weight: 500;
        }

        .info-section {
          background-color: #fef9e3;
          border-left: 8px solid #eab308;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          margin-bottom: 2rem;
          color: #854d0e;
          font-size: 0.95rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .schedule-section {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .schedule-section:hover {
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
        }

        .schedule-section h2 {
          font-size: 1.6rem;
          margin-bottom: 1.25rem;
          color: #0f172a;
          border-left: 6px solid #dc2626;
          padding-left: 1rem;
          font-weight: 600;
        }

        .table-responsive {
          overflow-x: auto;
          border-radius: 1rem;
        }

        .exam-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          min-width: 600px;
        }

        .exam-table th {
          background-color: #1e293b;
          color: white;
          padding: 1rem 0.75rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .exam-table td {
          padding: 0.9rem 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
          vertical-align: top;
        }

        .exam-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .practical-table th {
          background-color: #2d3a5e;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.8rem;
          margin-top: 1rem;
        }

        .important-instructions, .result-declaration {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
          transition: all 0.2s;
        }

        .important-instructions h3, .result-declaration h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #0f172a;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .important-instructions ul, .result-declaration ul {
          padding-left: 1.25rem;
          line-height: 1.6;
          color: #334155;
        }

        .important-instructions li, .result-declaration li {
          margin-bottom: 0.6rem;
        }

        .important-instructions li strong, .result-declaration li strong {
          color: #0f172a;
        }

        @media (max-width: 768px) {
          .exam-schedule-page {
            padding: 1rem;
          }
          .page-header h1 {
            font-size: 1.6rem;
          }
          .schedule-section h2 {
            font-size: 1.3rem;
          }
          .exam-table th, .exam-table td {
            padding: 0.6rem 0.5rem;
            font-size: 0.8rem;
          }
          .info-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media print {
          .exam-schedule-page {
            background: white;
            padding: 0.5rem;
          }
          .schedule-section, .important-instructions, .result-declaration {
            box-shadow: none;
            border: 1px solid #ddd;
          }
          .info-section {
            background: #f9f9f9;
            border-left-color: #aaa;
          }
        }
      `}</style>
    </div>
  );
};

export default ExamSchedulePage;
