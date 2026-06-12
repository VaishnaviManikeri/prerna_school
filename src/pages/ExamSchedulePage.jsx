// pages/ExamSchedulePage.jsx
import React from 'react';

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
    <div className="page-container">
      <h1>Examination Schedule {currentYear}</h1>
      <p className="subtitle">प्रेरणा शिक्षण संस्था - Assessment Timeline & Board Exam Dates</p>

      <div className="info-section">
        <p>📌 <strong>Note:</strong> This is a provisional schedule. Exact dates will be announced 15 days prior to each examination. 
        Students are advised to prepare as per the syllabus completion timeline.</p>
      </div>

      <div className="schedule-section">
        <h2>📝 Written Examination Schedule</h2>
        <table className="exam-table">
          <thead>
            <tr><th>Exam Name</th><th>Class</th><th>Tentative Date</th><th>Exam Pattern</th></tr>
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

      <div className="schedule-section">
        <h2>🔬 Practical Examination Schedule (Science & IT)</h2>
        <table className="exam-table">
          <thead><tr><th>Subject</th><th>Class</th><th>Schedule Date</th></tr></thead>
          <tbody>
            {practicalSchedule.map((prac, idx) => (
              <tr key={idx}><td>{prac.subject}</td><td>{prac.class}</td><td>{prac.date}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="important-instructions">
        <h3>📌 Important Exam Instructions</h3>
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
        <h3>📊 Result Declaration Dates (Tentative)</h3>
        <ul>
          <li><strong>Quarterly Exam Result:</strong> Within 1 week of exam completion</li>
          <li><strong>Half-Yearly Result:</strong> 1st week of November 2024</li>
          <li><strong>Annual Exam Result (1st-9th, 11th):</strong> 20th March 2025</li>
          <li><strong>SSC Result (10th):</strong> End of May 2025 (official MSBSHSE date)</li>
          <li><strong>HSC Result (12th):</strong> End of May 2025 (official MSBSHSE date)</li>
        </ul>
      </div>
    </div>
  );
};

export default ExamSchedulePage;