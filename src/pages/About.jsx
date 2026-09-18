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
    { year: '1981', title: 'प्रेरणेची सुरुवात', text: '१ एप्रिल १९८१ रोजी संस्थापक अध्यक्ष माननीय तुकारामभाऊ लक्ष्मणराव गुजर यांनी आपल्या वडिलांच्या स्मरणार्थ संस्थेची स्थापना केली.' },
    { year: '25,000+', title: 'विद्यार्थ्यांचा प्रवास', text: 'आजपर्यंत २५,००० हून अधिक विद्यार्थ्यांनी संस्थेच्या विविध विद्यालयांमधून शिक्षण घेतले आहे.' },
    { year: 'आज', title: 'यशस्वी माजी विद्यार्थी', text: 'माजी विद्यार्थी देश-विदेशात अधिकारी, डॉक्टर, वकील, सीए, आर्किटेक्ट, कलाकार, खेळाडू, उद्योजक आणि विविध क्षेत्रांत कार्यरत आहेत.' },
    { year: 'भविष्य', title: 'आधुनिक शैक्षणिक सुविधा', text: 'Digital Classrooms, Computer Labs, STEM Lab, Turf Ground आणि नव्या पिढीच्या नेतृत्वातून संस्था पुढे जात आहे.' },
  ];

  const facilities = [
    { icon: <FaSchool />, title: 'प्रशस्त व सुसज्ज इमारत', text: 'विद्यार्थ्यांच्या सुरक्षित, आनंददायी आणि गुणवत्तापूर्ण शिक्षणासाठी अनुकूल परिसर.' },
    { icon: <FaLaptop />, title: 'तीन Digital Classrooms', text: 'तंत्रज्ञानाच्या साहाय्याने अनुभवाधारित आणि संवादात्मक अध्यापन.' },
    { icon: <FaFlask />, title: 'दोन Computer Labs व STEM Lab', text: 'प्रयोगशीलता, वैज्ञानिक दृष्टिकोन आणि डिजिटल कौशल्यांना चालना.' },
    { icon: <FaBookOpen />, title: 'ग्रंथालय व कार्यक्रम सभागृह', text: 'वाचन संस्कृती, स्व-अध्ययन आणि सांस्कृतिक उपक्रमांसाठी सुविधा.' },
    { icon: <FaAward />, title: 'अत्याधुनिक Turf Ground', text: 'क्रीडा, शारीरिक शिक्षण आणि संघभावना विकसित करण्यासाठी मैदान.' },
    { icon: <FaUsers />, title: 'आरोग्य व आपत्ती व्यवस्थापन', text: 'आरोग्यविषयक उपक्रम, सुरक्षा प्रशिक्षण आणि विद्यार्थ्यांची काळजी.' },
  ];

  const schools = [
    'प्रेरणा बालक व प्राथमिक विद्यामंदिर, थेरगाव',
    'तुकारामभाऊ गुजर माध्यमिक व कनिष्ठ महाविद्यालय, थेरगाव',
    'बबन रामा भोंडवे प्राथमिक विद्यामंदिर, वाल्हेकरवाडी',
    'प्रेरणा माध्यमिक विद्यालय, वाल्हेकरवाडी',
    'तुकाई माध्यमिक विद्यालय, नेरे, ता. मुळशी',
  ];

  const activities = ['संस्कार वर्ग', 'सांस्कृतिक कार्यक्रम', 'क्रीडा स्पर्धा', 'विज्ञान प्रदर्शन', 'इन्स्पायर अवॉर्ड', 'आरोग्य शिबिरे', 'आपत्ती व्यवस्थापन', 'पर्यावरण संवर्धन', 'पालक-शिक्षक संवाद', 'समुपदेशन'];

  const institutionFacts = [
    { icon: <FaSchool />, title: 'संस्था', text: 'प्रेरणा शिक्षण संस्था, लक्ष्मणनगर, थेरगाव, पुणे - ४११०३३' },
    { icon: <FaMapMarkerAlt />, title: 'ब्रीदवाक्य', text: '“विद्या धनं श्रेष्ठम्”' },
    { icon: <FaGraduationCap />, title: 'शैक्षणिक व्याप्ती', text: 'दोन पूर्व प्राथमिक, दोन प्राथमिक, तीन माध्यमिक आणि एक उच्च माध्यमिक विद्यालय' },
    { icon: <FaChalkboardTeacher />, title: 'माध्यम', text: 'महाराष्ट्र राज्य मंडळावर आधारित मराठी व सेमी-इंग्रजी माध्यम' },
    { icon: <FaFlask />, title: 'विद्यार्थी संख्या', text: 'आजपर्यंत २५,००० हून अधिक विद्यार्थ्यांनी शिक्षण घेतले' },
    { icon: <FaUsers />, title: 'नेतृत्व', text: 'कांतीलाल तुकारामभाऊ गुजर, शालिनीताई गुजर, अक्षय गुजर आणि ॲड. आकाश गुजर' },
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
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-intro-copy">
            <span className="about-section-label">Overview</span>
            <h2>A school community built around learning, values, and opportunity.</h2>
            <p>
              प्रेरणा शिक्षण संस्था ही शिक्षण, संस्कार आणि सामाजिक बांधिलकी यांचा
              सुंदर समन्वय साधणारी शैक्षणिक संस्था आहे. परिसरातील सर्वसामान्य
              कुटुंबातील मुला-मुलींना दर्जेदार शिक्षण मिळावे, या हेतूने संस्थेची
              स्थापना १ एप्रिल १९८१ रोजी झाली.
            </p>
            <p>
              संस्थापक अध्यक्ष माननीय तुकारामभाऊ लक्ष्मणराव गुजर यांनी आपल्या
              वडिलांच्या स्मरणार्थ सुरू केलेल्या या प्रवासातून आजपर्यंत २५,०००
              हून अधिक विद्यार्थी घडले आहेत. माजी विद्यार्थी देश-विदेशातील
              विविध क्षेत्रांत कार्यरत आहेत.
            </p>
            <p>
              आज संस्थेची धुरा मानद सचिव श्री. कांतीलाल तुकारामभाऊ गुजर यांच्या
              नेतृत्वाखाली पुढे जात आहे. विश्वस्त शालिनीताई गुजर तसेच अक्षय गुजर
              आणि ॲड. आकाश गुजर यांच्या सहभागातून परंपरेचा वारसा, वर्तमानाची
              गुणवत्ता आणि भविष्याची दृष्टी जपली जात आहे.
            </p>
            <p>
              “विद्या धनं श्रेष्ठम्” हे ब्रीदवाक्य केंद्रस्थानी ठेवून प्रत्येक
              विद्यार्थ्याच्या शैक्षणिक, सामाजिक, सांस्कृतिक, क्रीडा आणि नैतिक
              विकासासाठी संस्था सातत्याने कार्यरत आहे.
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

      <section className="about-facts" aria-labelledby="institution-facts-title">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">Prerana at a Glance</span>
            <h2 id="institution-facts-title">An institution rooted in Thergaon and focused on every learner.</h2>
            <p>Key information about the school, its learning journey, and the community it serves.</p>
          </div>
          <div className="about-facts-grid">
            {institutionFacts.map((fact) => (
              <article className="about-fact-card" key={fact.title}>
                <div className="about-fact-icon">{fact.icon}</div>
                <div>
                  <h3>{fact.title}</h3>
                  <p>{fact.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-schools" id="schools">
        <div className="about-container about-schools-grid">
          <div>
            <span className="about-section-label">Our Schools | आमची विद्यालये</span>
            <h2>एकाच शैक्षणिक परिवारातून विविध टप्प्यांवरील शिक्षण.</h2>
            <p>प्रेरणा शिक्षण संस्थेच्या माध्यमातून पूर्व प्राथमिक, प्राथमिक, माध्यमिक आणि उच्च माध्यमिक शिक्षण मराठी व सेमी-इंग्रजी माध्यमातून दिले जाते.</p>
          </div>
          <div className="about-school-list">
            {schools.map((school, index) => (
              <div className="about-school-item" key={school}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{school}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-academics" id="academics-overview">
        <div className="about-container">
          <div className="about-centered-heading">
            <span className="about-section-label">Academics | शैक्षणिक विभाग</span>
            <h2>पायाभूत कौशल्यांपासून करिअरच्या दिशेपर्यंत.</h2>
            <p>महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळाच्या अभ्यासक्रमासोबत विद्यार्थ्यांच्या सर्वांगीण विकासाला समान महत्त्व दिले जाते.</p>
          </div>
          <div className="about-academic-grid">
            <article className="about-academic-card"><FaGraduationCap /><h3>Primary | इयत्ता १ ली ते ४ थी</h3><p>मराठी, इंग्रजी, गणित, परिसर अभ्यास, हिंदी, कला, शारीरिक शिक्षण आणि संगणक शिक्षण. कृतीआधारित, अनुभवाधारित व आनंददायी शिक्षणपद्धतीचा वापर.</p></article>
            <article className="about-academic-card"><FaFlask /><h3>Secondary | इयत्ता ५ वी ते १० वी</h3><p>गुणवत्तापूर्ण शिक्षणासोबत विज्ञाननिष्ठ दृष्टिकोन, तंत्रज्ञान, व्यक्तिमत्त्व विकास, क्रीडा, कला, सामाजिक बांधिलकी आणि जीवनकौशल्यांवर भर.</p></article>
            <article className="about-academic-card"><FaChalkboardTeacher /><h3>Higher Secondary | इयत्ता ११ वी ते १२ वी</h3><p>कला व वाणिज्य शाखांमधून उच्च शिक्षण, स्पर्धात्मक परीक्षा आणि भविष्यातील करिअरसाठी मार्गदर्शन. विज्ञान शाखा लवकरच सुरू करण्यात येणार आहे.</p></article>
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
            <img src="/assets/m/principle.png" alt="Principal of Prerana Shikshan Sanstha" />
          </div>
          <div className="about-principal-copy">
            <FaQuoteLeft className="about-quote-icon" />
            <span className="about-section-label">Principal's Message</span>
            <h2>Every child deserves guidance that sees their potential.</h2>
            <p>“प्रेरणा शिक्षण संस्था ही केवळ शिक्षण देणारी संस्था नसून ज्ञानासोबत संस्कार, कौशल्यासोबत आत्मविश्वास आणि शिक्षणासोबत सामाजिक बांधिलकी निर्माण करणारी संस्था आहे.”</p>
            <p>आजच्या तंत्रज्ञानाच्या युगात विद्यार्थ्यांनी ज्ञानसंपन्न, संस्कारक्षम, सर्जनशील, संवेदनशील आणि जबाबदार नागरिक म्हणून घडणे आवश्यक आहे. Digital Classrooms, Computer Labs, STEM Lab, क्रीडा सुविधा आणि विविध उपक्रमांद्वारे हा सर्वांगीण विकास साधला जातो.</p>
            <h4>प्राचार्य शिवले जे. के.</h4>
            <span>प्रेरणा माध्यमिक व तुकाराम गुजर ज्युनिअर कॉलेज, थेरगाव</span>
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

          <div className="about-activities" id="activities">
            <div>
              <span className="about-section-label">Activities | उपक्रम</span>
              <h2>शिक्षणाच्या पलीकडे घडणारा अनुभव.</h2>
              <p>क्रीडा, कला, संस्कार, विज्ञान, पर्यावरण आणि सामाजिक जाणीव यांमधून विद्यार्थ्यांना आत्मविश्वास, नेतृत्व आणि जीवनकौशल्ये विकसित करण्याची संधी दिली जाते.</p>
            </div>
            <div className="about-activity-list">
              {activities.map((activity) => <span key={activity}>{activity}</span>)}
            </div>
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
