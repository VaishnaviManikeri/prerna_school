import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      message: ''
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Professional image placeholders using Font Awesome style emoji + gradient backgrounds
  // You can replace these with actual image URLs when available
  const heroStudentImage = "https://i.pinimg.com/736x/2e/30/09/2e3009f9968227684ca57abf35cf74c4.jpg";
  const defaultStudentImage = "https://i.pinimg.com/736x/4c/88/65/4c886557098440715f785f1e776c10e2.jpg";
  const campusImage = "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=350&fit=crop";

  return (
    <div className="admission-container">
      {/* Navigation Bar */}
     

      {/* Hero Section with Student Image */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Admissions Open 2025-26</span>
            <h1 className="hero-title">Shape Your Future at <span className="highlight">Prerna Shikshan Sanstha</span></h1>
            <p className="hero-description">
              Located in Laxminagar, Thergaon, Pune - 33, we provide quality education that nurtures young minds 
              and builds strong character for a bright tomorrow.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Enroll Now →</button>
              <button className="btn-secondary">Virtual Tour</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroStudentImage} alt="Students at Prerna Shikshan Sanstha" className="student-hero-img" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/2C3E50/FFFFFF?text=Students"; }} />
            <div className="floating-card experience-card">
              <span className="exp-number">10+</span>
              <span className="exp-text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Student Image */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Welcome to <span className="highlight">Prerna Shikshan Sanstha</span></h2>
            <p className="section-subtitle">Nurturing minds, building futures since 2010</p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Prerna Shikshan Sanstha, located in the heart of <strong>Laxminagar, Thergaon, Pune - 33</strong>, 
                is committed to providing quality education that nurtures young minds and builds strong character. 
                Our institution believes in holistic development combining academic excellence with moral values.
              </p>
              <p className="about-text">
                With state-of-the-art infrastructure, experienced faculty, and a student-centric approach, 
                we ensure every child receives personalized attention and opportunities to explore their potential.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Faculty</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Results</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Awards</span>
                </div>
              </div>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span>Experienced Faculty</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📚</span>
                  <span>Smart Classrooms</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚽</span>
                  <span>Sports Facilities</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <span>Computer Labs</span>
                </div>
              </div>
            </div>
            <div className="about-image-col">
              <div className="about-main-image">
                <img 
                  src={defaultStudentImage} 
                  alt="Prerna Shikshan Student" 
                  className="student-img" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/350x350/2C3E50/FFFFFF?text=Student"; }} 
                />
              </div>
              <div className="about-secondary-image">
                <img 
                  src={campusImage} 
                  alt="Campus at Thergaon, Pune" 
                  className="campus-img" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/350x250/2C3E50/FFFFFF?text=Prerna+Campus"; }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section id="admissions" className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-title">Simple <span className="highlight">Admission Process</span></h2>
            <p className="section-subtitle">4 easy steps to join our family</p>
          </div>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">📝</div>
              <h3>Fill Application</h3>
              <p>Complete the online admission form or visit our campus for registration.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">🤝</div>
              <h3>Interaction Session</h3>
              <p>Personal interaction with teachers and basic assessment for grade placement.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">📄</div>
              <h3>Submit Documents</h3>
              <p>Submit required documents including birth certificate and previous marksheets.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">✅</div>
              <h3>Confirm Admission</h3>
              <p>Complete the fee payment and receive your admission confirmation kit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="documents-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Documents Required</span>
            <h2 className="section-title">Prepare Your <span className="highlight">Documents</span></h2>
            <p className="section-subtitle">Ensure you have these ready for admission</p>
          </div>
          <div className="documents-grid">
            <div className="document-card">
              <div className="doc-icon-wrapper">📄</div>
              <div className="doc-info">
                <h4>Birth Certificate</h4>
                <p>Original + 2 attested copies</p>
              </div>
            </div>
            <div className="document-card">
              <div className="doc-icon-wrapper">📋</div>
              <div className="doc-info">
                <h4>Previous Marksheet</h4>
                <p>Last 2 years academic records</p>
              </div>
            </div>
            <div className="document-card">
              <div className="doc-icon-wrapper">🆔</div>
              <div className="doc-info">
                <h4>Parent ID Proof</h4>
                <p>Aadhar Card / PAN Card / Voter ID</p>
              </div>
            </div>
            <div className="document-card">
              <div className="doc-icon-wrapper">🏠</div>
              <div className="doc-info">
                <h4>Address Proof</h4>
                <p>Electricity bill / Rent agreement / Passport</p>
              </div>
            </div>
            <div className="document-card">
              <div className="doc-icon-wrapper">📸</div>
              <div className="doc-info">
                <h4>Photographs</h4>
                <p>4 passport size + 2 stamp size</p>
              </div>
            </div>
            <div className="document-card">
              <div className="doc-icon-wrapper">🏫</div>
              <div className="doc-info">
                <h4>School Leaving Certificate</h4>
                <p>For students above Class 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="fee-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Fee Structure</span>
            <h2 className="section-title">Affordable <span className="highlight">Fee Plans</span></h2>
            <p className="section-subtitle">Academic Year 2025-26</p>
          </div>
          <div className="fee-table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Grade Level</th>
                  <th>Tuition Fee</th>
                  <th>Activity Fee</th>
                  <th>Total (Annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Nursery - UKG</td><td>₹35,000</td><td>₹5,000</td><td className="total-fee">₹40,000</td></tr>
                <tr><td>Class 1 - 5</td><td>₹40,000</td><td>₹6,000</td><td className="total-fee">₹46,000</td></tr>
                <tr><td>Class 6 - 8</td><td>₹45,000</td><td>₹7,000</td><td className="total-fee">₹52,000</td></tr>
                <tr><td>Class 9 - 10</td><td>₹50,000</td><td>₹8,000</td><td className="total-fee">₹58,000</td></tr>
              </tbody>
            </table>
            <p className="fee-note">*Transportation and meal facilities available at additional cost. Scholarships available for meritorious students.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Student Image */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-image">
              <img 
                src={defaultStudentImage} 
                alt="Happy Student at Prerna Shikshan" 
                className="student-why-img" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/350x350/2C3E50/FFFFFF?text=Happy+Student"; }} 
              />
              <div className="image-badge">✨ 500+ Happy Students</div>
            </div>
            <div className="why-choose-content">
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">Best <span className="highlight">Learning Environment</span> in Pune</h2>
              <div className="why-features">
                <div className="why-feature">
                  <span className="why-icon">🎯</span>
                  <div>
                    <h4>Personalized Learning</h4>
                    <p>Individual attention with 20:1 student-teacher ratio</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">🏅</span>
                  <div>
                    <h4>Experienced Faculty</h4>
                    <p>Highly qualified teachers with 10+ years experience</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">🌍</span>
                  <div>
                    <h4>Holistic Development</h4>
                    <p>Focus on academics, sports, arts, and life skills</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">📱</span>
                  <div>
                    <h4>Smart Technology</h4>
                    <p>Digital classrooms and parent portal access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Visit <span className="highlight">Our Campus</span></h2>
            <p className="section-subtitle">Laxminagar, Thergaon, Pune - 411033</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Prerna Shikshan Sanstha, Laxminagar, Near Thergaon Bus Stop, Thergaon, Pune - 411033</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210 | +91 98765 43211</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>admissions@prernashikshan.edu.in</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">⏰</span>
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <div className="map-card">
                <img 
                  src={campusImage} 
                  alt="Campus Location Map - Laxminagar Thergaon Pune" 
                  className="map-img" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/2C3E50/FFFFFF?text=Map+Location%3A+Laxminagar%2C+Thergaon%2C+Pune-33"; }} 
                />
                <div className="map-overlay">
                  <span>📍 Laxminagar, Thergaon, Pune - 33</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <span className="section-tag">Apply Now</span>
              <h2 className="section-title">Start Your <span className="highlight">Admission Journey</span></h2>
              <p className="section-subtitle">Fill the form below and our counsellor will get back to you</p>
            </div>
            {isSubmitted && (
              <div className="success-message">
                ✅ Thank you for your interest! Our admission team will contact you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Student's Full Name *</label>
                  <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required placeholder="Enter student's full name" />
                </div>
                <div className="form-group">
                  <label>Parent/Guardian Name *</label>
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="Enter parent/guardian name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter mobile number" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Grade Applying For *</label>
                  <select name="grade" value={formData.grade} onChange={handleChange} required>
                    <option value="">Select Grade</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Visit Date (Optional)</label>
                  <input type="date" name="visitDate" />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Message / Query</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Any specific questions or requirements..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Application →</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <span>🎓</span>
                <span>Prerna Shikshan Sanstha</span>
              </div>
              <p>Empowering minds, building futures since 2010. Located in Laxminagar, Thergaon, Pune - 33.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">Fee Structure</a></li>
                <li><a href="#">Scholarships</a></li>
                <li><a href="#">Download Brochure</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">📘 Facebook</a>
                <a href="#">📸 Instagram</a>
                <a href="#">🐦 Twitter</a>
                <a href="#">▶️ YouTube</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Prerna Shikshan Sanstha, Laxminagar, Thergaon, Pune - 33. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Admission;