// pages/AcademicCalendarPage.jsx
import React from 'react';

const AcademicCalendarPage = () => {
  const academicYear = '2024-2025';
  
  const events = [
    { month: 'June 2024', events: ['School Reopens (After Summer Break) - 15th June', 'Unit Test 1 Schedule Announcement', 'Parent-Teacher Meeting - Last Week'] },
    { month: 'July 2024', events: ['Unit Test 1 - 2nd Week', 'Independence Day Celebration Rehearsals Begin', 'PTA Meeting - 4th Saturday'] },
    { month: 'August 2024', events: ['Independence Day Celebration - 15th August', 'Quarterly Exam Syllabus Completion', 'Sports Day Prelims Begin'] },
    { month: 'September 2024', events: ['Teachers\' Day Celebration - 5th September', 'Quarterly Examinations - 2nd to 3rd Week', 'Ganesh Chaturthi Holiday - 7th to 9th Sep'] },
    { month: 'October 2024', events: ['Half-Yearly Exam Syllabus Completion', 'Gandhi Jayanti - 2nd Oct (Holiday)', 'Half-Yearly Exams - 3rd & 4th Week', 'Diwali Vacation - Last week Oct to 1st week Nov'] },
    { month: 'November 2024', events: ['Diwali Vacation Ends - 2nd Week', 'School Reopens', 'Winter Camp for Sports & Cultural Activities'] },
    { month: 'December 2024', events: ['Unit Test 2 - 1st Week', 'Christmas Celebration - 25th Dec', 'Annual Sports Day - Last Week'] },
    { month: 'January 2025', events: ['New Year Celebration - 1st Jan', 'Republic Day Celebration - 26th Jan', 'Preliminary Exams for Std 10th & 12th Begin'] },
    { month: 'February 2025', events: ['Shivaji Maharaj Jayanti - 19th Feb (Holiday)', 'HSC Practical Exams Begin', 'SSC & HSC Theory Exam Preparation'] },
    { month: 'March 2025', events: ['Mahashivratri - Holiday', 'SSC & HSC Board Examinations Begin', 'Annual Day Function - Mid March', 'Summer Break Starts - End of March'] },
    { month: 'April-May 2025', events: ['Summer Vacation', 'Result Declaration for SSC (May end)', 'Result Declaration for HSC (May end)', 'Admission Process for New Academic Year'] }
  ];

  const stats = [
    { value: '12', label: 'Months', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: '#1e3c72' },
    { value: '220+', label: 'Working Days', icon: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z M17 21v-4H7v4 M12 7v6 M9 10h6', color: '#1e3c72' },
    { value: '15+', label: 'Holidays', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: '#1e3c72' },
    { value: '4', label: 'Exam Periods', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2 M9 12h6 M9 16h6', color: '#1e3c72' }
  ];

  const holidays = [
    { name: 'Independence Day', date: '15th August', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#FF6B6B' },
    { name: 'Ganesh Chaturthi', date: 'September', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: '#FF8C42' },
    { name: 'Gandhi Jayanti', date: '2nd October', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: '#4ECDC4' },
    { name: 'Diwali Vacation', date: 'Oct/Nov (10 days)', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: '#FFE66D' },
    { name: 'Christmas', date: '25th December', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', color: '#2E8B57' },
    { name: 'Republic Day', date: '26th January', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#FF6B6B' },
    { name: 'Shivaji Maharaj Jayanti', date: '19th February', icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z', color: '#9B59B6' },
    { name: 'Mahashivratri', date: 'March', icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z', color: '#3498DB' },
    { name: 'Ambedkar Jayanti', date: '14th April', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', color: '#FF8C42' },
    { name: 'Maharashtra Day', date: '1st May', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#4ECDC4' }
  ];

  // SVG Icon Components
  const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const SchoolIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <div className="academic-calendar-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Academic Calendar</span>
              <br /><span className="hero-subtitle">Important Dates & Events</span>
            </h1>
            <p className="hero-desc">Stay updated with all academic activities, examination schedules, holidays, and important events throughout the academic year.</p>
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-icon" style={{ color: stat.color }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={stat.icon} />
                    </svg>
                  </div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="hero-buttons">
              <button className="primary-btn">Download Calendar <ArrowIcon /></button>
              <button className="secondary-btn">Subscribe Updates</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&h=500&fit=crop" 
                alt="Academic Calendar"
              />
              <div className="image-badge">
                <ClockIcon /> Plan Your Year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon"><SchoolIcon /></div>
              <h3>School Timings</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 3:30 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 12:30 PM</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><ClockIcon /></div>
              <h3>Office Hours</h3>
              <p><strong>Monday - Saturday:</strong> 8:30 AM - 5:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><BookIcon /></div>
              <h3>Working Days</h3>
              <p><strong>Total Working Days:</strong> 220+ Days</p>
              <p><strong>Teaching Days:</strong> 200+ Days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Grid Section */}
      <section className="calendar-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Schedule</span>
            <h2>Monthly <span className="gradient-text">Calendar</span></h2>
            <p>Detailed monthly breakdown of academic activities and events</p>
          </div>
          <div className="calendar-grid">
            {events.map((monthData, idx) => (
              <div className="calendar-month" key={idx}>
                <div className="month-header">
                  <span className="month-icon"><CalendarIcon /></span>
                  <h3>{monthData.month}</h3>
                </div>
                <ul className="event-list">
                  {monthData.events.map((event, i) => (
                    <li key={i}>
                      <span className="event-bullet"><CheckIcon /></span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays Section */}
      <section className="holidays-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Vacations & Holidays</span>
            <h2>Major <span className="gradient-text">Holidays</span></h2>
            <p>Academic year {academicYear} - Important holidays and school closures</p>
          </div>
          <div className="holidays-grid">
            {holidays.map((holiday, idx) => (
              <div className="holiday-card" key={idx}>
                <div className="holiday-icon" style={{ backgroundColor: `${holiday.color}15`, color: holiday.color }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={holiday.icon} />
                  </svg>
                </div>
                <div className="holiday-info">
                  <h4>{holiday.name}</h4>
                  <p>{holiday.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="note-box">
            <span className="note-icon"><StarIcon /></span>
            <p><strong>Note:</strong> Dates of some festivals may vary as per moon calendar. School will announce exact holidays prior to the event.</p>
          </div>
        </div>
      </section>

      {/* Exam Schedule Section */}
      <section className="exam-schedule-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Assessment</span>
            <h2>Examination <span className="gradient-text">Schedule</span></h2>
            <p>Important examination dates and assessment periods</p>
          </div>
          <div className="exam-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">July 2024</div>
                <h3>Unit Test 1</h3>
                <p>First formative assessment of the academic year</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">September 2024</div>
                <h3>Quarterly Examinations</h3>
                <p>Mid-term assessments for all classes</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">October 2024</div>
                <h3>Half-Yearly Exams</h3>
                <p>Comprehensive half-yearly assessments</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">December 2024</div>
                <h3>Unit Test 2</h3>
                <p>Second formative assessment</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">January 2025</div>
                <h3>Preliminary Exams</h3>
                <p>Board exam preparation for Std 10th & 12th</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">February-March 2025</div>
                <h3>SSC & HSC Board Exams</h3>
                <p>Final board examinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Stay Updated With School Events</h2>
            <p>Get instant notifications about calendar updates, exam schedules, and important announcements</p>
            <button className="primary-btn">Subscribe to Updates <ArrowIcon /></button>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .academic-calendar-page {
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

        /* Hero Section */
        .hero-section {
          position: relative;
          background: white;
          padding: 80px 0;
          min-height: auto;
          display: flex;
          align-items: center;
        }

        .hero-container {
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

        /* Info Section */
        .info-section {
          background: #f8fafc;
          padding: 60px 0;
        }

        .info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .info-icon {
          font-size: 2.5rem;
          color: #1e3c72;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .info-card h3 {
          font-size: 1.3rem;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .info-card p {
          color: #475569;
          margin: 0.5rem 0;
          line-height: 1.6;
        }

        /* Calendar Section */
        .calendar-section {
          background: white;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .calendar-month {
          background: #f8fafc;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .calendar-month:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .month-header {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .month-icon {
          color: white;
          font-size: 1.2rem;
          display: flex;
        }

        .month-header h3 {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }

        .event-list {
          list-style: none;
          padding: 1.2rem;
        }

        .event-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.5;
        }

        .event-list li:last-child {
          border-bottom: none;
        }

        .event-bullet {
          color: #10b981;
          font-size: 0.8rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
          display: flex;
        }

        /* Holidays Section */
        .holidays-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .holidays-section .section-header h2,
        .holidays-section .section-header p {
          color: white;
        }

        .holidays-section .section-tag {
          background: rgba(255,255,255,0.2);
        }

        .holidays-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .holiday-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          padding: 1.2rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .holiday-card:hover {
          transform: translateX(5px);
          background: rgba(255,255,255,0.12);
        }

        .holiday-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .holiday-info h4 {
          color: white;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .holiday-info p {
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .note-box {
          background: rgba(255,255,255,0.05);
          padding: 1.2rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-left: 3px solid #e67e22;
        }

        .note-icon {
          color: #e67e22;
          font-size: 1.2rem;
          flex-shrink: 0;
          display: flex;
        }

        .note-box p {
          color: #cbd5e1;
          font-size: 0.85rem;
          margin: 0;
        }

        /* Exam Schedule Section */
        .exam-schedule-section {
          background: white;
        }

        .exam-timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          padding-left: 30px;
        }

        .exam-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 2rem;
        }

        .timeline-dot {
          position: absolute;
          left: -34px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e67e22;
          border: 2px solid white;
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.2);
        }

        .timeline-content {
          background: #f8fafc;
          padding: 1.2rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .timeline-date {
          display: inline-block;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          padding: 0.2rem 0.8rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-content h3 {
          font-size: 1.1rem;
          color: #0f172a;
          margin-bottom: 0.3rem;
        }

        .timeline-content p {
          font-size: 0.85rem;
          color: #64748b;
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

        /* Responsive */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-desc { max-width: 100%; }
          .hero-content { max-width: 100%; text-align: center; }
          .hero-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-title { font-size: 2.5rem; }
          .hero-title .gradient-text { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.6rem; }
        }

        @media (max-width: 900px) {
          .container { padding: 0 1.5rem; }
          .section-header h2 { font-size: 36px; }
        }

        @media (max-width: 768px) {
          .container { padding: 0 1rem; }
          section { padding: 60px 0; }
          .section-header h2 { font-size: 32px; }
          .hero-section { padding: 60px 0; }
          .hero-title { font-size: 2rem; }
          .hero-title .gradient-text { font-size: 2rem; }
          .hero-subtitle { font-size: 1.3rem; }
          .calendar-grid { grid-template-columns: 1fr; }
          .info-cards { grid-template-columns: 1fr; }
          .holidays-grid { grid-template-columns: 1fr; }
          .cta-box { padding: 50px 20px; }
          .cta-box h2 { font-size: 30px; }
          .hero-buttons { flex-direction: column; }
          .primary-btn, .secondary-btn { justify-content: center; width: 100%; }
        }

        @media (max-width: 500px) {
          .hero-title { font-size: 1.6rem; }
          .hero-title .gradient-text { font-size: 1.6rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-stats { grid-template-columns: 1fr; }
          .section-header h2 { font-size: 28px; }
        }

        @media print {
          .hero-buttons, .cta-section {
            display: none;
          }
          .calendar-month {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default AcademicCalendarPage;