import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaCamera,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaGraduationCap,
  FaLaptop,
  FaFlask,
  FaFutbol,
  FaBus,
  FaFirstAid,
  FaTint,
  FaVideo,
  FaMapMarkedAlt,
  FaNewspaper,
  FaSchool,
  FaShieldAlt,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import './DropdownPage.css';

const iconMap = {
  academics: <FaGraduationCap />,
  gallery: <FaCamera />,
  student: <FaUsers />,
  notices: <FaNewspaper />,
  facilities: <FaSchool />,
  about: <FaBookOpen />,
};

const infrastructureFacilities = [
  { icon: <FaLaptop />, title: 'Smart Classrooms', text: 'Bright classrooms supported by digital teaching tools and audio-visual learning resources.' },
  { icon: <FaFlask />, title: 'Science Laboratories', text: 'Dedicated practical spaces that help students understand scientific concepts through experiments.' },
  { icon: <FaBookOpen />, title: 'School Library', text: 'A calm reading and reference space with academic resources for learning beyond textbooks.' },
  { icon: <FaFutbol />, title: 'Sports & Activity Areas', text: 'Safe spaces for physical education, team games, fitness, cultural practice, and student activities.' },
  { icon: <FaVideo />, title: 'Campus Security', text: 'Monitored common areas and disciplined entry procedures support a secure school environment.' },
  { icon: <FaBus />, title: 'School Transport', text: 'Organized transport support designed around student safety, punctuality, and convenient access.' },
  { icon: <FaFirstAid />, title: 'Health & First Aid', text: 'Basic first-aid assistance and student wellbeing support are available during school hours.' },
  { icon: <FaTint />, title: 'Clean Water & Hygiene', text: 'Clean drinking-water access and regularly maintained sanitation facilities across the campus.' },
];

const pageContent = {
  about: {
    overview: {
      label: 'Institution Overview',
      title: 'A trusted learning home in Laxminagar, Thergaon.',
      image: '/assets/images/h1.png',
      lead: 'प्रेरणा शिक्षण संस्था is dedicated to shaping confident, disciplined, and socially responsible students through academics, values, activities, and personal guidance.',
      details: [
        'Located at Laxminagar, Thergaon, Pune - 33, the institution serves families who want a school environment that is caring, structured, and future-oriented.',
        'The school brings together primary, secondary, and junior college education so students can grow in a familiar academic culture with consistent mentoring.',
        'Its approach balances classroom learning, practical exposure, communication skills, cultural participation, sports, and moral development.',
      ],
      highlights: ['Primary to Junior College pathway', 'Value-based education', 'Supportive teacher guidance', 'Strong community connection'],
      cards: [
        { icon: <FaChalkboardTeacher />, title: 'Teaching Philosophy', text: 'Clear concepts, regular revision, practical learning, and steady feedback help students build confidence.' },
        { icon: <FaShieldAlt />, title: 'Student Care', text: 'A safe and disciplined campus culture supports attendance, wellbeing, respect, and focused learning.' },
        { icon: <FaTrophy />, title: 'Holistic Growth', text: 'Students are encouraged to participate in academics, cultural events, leadership activities, and sports.' },
      ],
    },
    'mission-vision': {
      label: 'Mission & Vision',
      title: 'Education with purpose, discipline, and direction.',
      image: '/assets/images/h2.png',
      lead: 'Our mission is to provide quality education that develops knowledge, confidence, values, and life skills.',
      details: ['The vision is to become a trusted institution known for academic excellence and responsible citizenship.', 'Students are guided to think clearly, communicate respectfully, and prepare for higher education and life beyond school.'],
      highlights: ['Academic excellence', 'Moral values', 'Future readiness', 'Responsible citizenship'],
    },
    'principal-message': {
      label: "Principal's Message",
      title: 'Every child carries potential worth nurturing.',
      image: '/assets/images/principle.png',
      lead: 'Our school believes that education should strengthen both the mind and character of every student.',
      details: ['Teachers work with sincerity to create a learning environment where curiosity, discipline, and confidence can grow together.', 'The partnership between school and parents is central to student progress.'],
      highlights: ['Careful mentoring', 'Parent partnership', 'Student confidence', 'Character formation'],
    },
    history: {
      label: 'History & Milestones',
      title: 'A growing educational journey in Thergaon.',
      image: '/assets/images/h3.png',
      lead: 'The institution has steadily grown by responding to the educational needs of families in and around Laxminagar, Thergaon.',
      details: ['From foundational learning to higher secondary preparation, the school continues to improve its academic systems and campus facilities.', 'Its milestones reflect a commitment to accessible, disciplined, and quality education.'],
      highlights: ['Community trust', 'Academic expansion', 'Modern facilities', 'Future-focused growth'],
    },
    infrastructure: {
      label: 'Infrastructure',
      title: 'Campus spaces that support focused learning.',
      image: '/assets/images/h4.png',
      lead: 'The campus is planned to support classroom education, practical learning, reading habits, activities, and student safety.',
      details: ['Classrooms, laboratories, library resources, and activity spaces work together to create an environment where students can learn with confidence.', 'The school continues to strengthen facilities with student comfort and academic growth in mind.'],
      highlights: ['Smart classrooms', 'Labs and library', 'Activity areas', 'Safe environment'],
    },
  },
  academics: {
    primary: {
      label: 'Primary Academics',
      title: 'Strong foundations for Classes 1st to 4th.',
      image: '/assets/images/h1.png',
      lead: 'The primary section focuses on literacy, numeracy, environmental awareness, creativity, and classroom confidence.',
      details: ['Students learn through stories, activities, writing practice, observation, and guided revision.', 'Teachers help children build habits of neat work, curiosity, discipline, and respectful classroom participation.'],
      highlights: ['Language foundation', 'Math confidence', 'Activity learning', 'Good study habits'],
    },
    secondary: {
      label: 'Secondary Academics',
      title: 'Focused learning for Classes 5th to 10th.',
      image: '/assets/images/h2.png',
      lead: 'The secondary section strengthens concepts, exam readiness, practical understanding, and self-study habits.',
      details: ['Regular tests, subject guidance, project work, and revision plans help students prepare for board-level expectations.', 'Equal attention is given to discipline, communication, teamwork, and confidence.'],
      highlights: ['Concept clarity', 'Board preparation', 'Regular assessment', 'Personal guidance'],
    },
    'higher-secondary': {
      label: 'Higher Secondary',
      title: 'Guidance for Classes 11th and 12th.',
      image: '/assets/images/h3.png',
      lead: 'The junior college stage helps students prepare for higher education, career choices, and competitive academic expectations.',
      details: ['Subject teachers guide students with structured lessons, revision support, and examination practice.', 'Students are encouraged to become independent learners with clear goals and consistent effort.'],
      highlights: ['Career direction', 'Exam practice', 'Subject depth', 'Independent study'],
    },
    curriculum: {
      label: 'Curriculum & Syllabus',
      title: 'Structured academics with meaningful learning outcomes.',
      image: '/assets/images/h4.png',
      lead: 'The curriculum is designed to support subject knowledge, values, communication, creativity, and practical understanding.',
      details: ['Lessons are planned with clear objectives, regular assignments, revision, and assessment.', 'The syllabus is supported by classroom activities, projects, reading, and remedial guidance where needed.'],
      highlights: ['Clear learning goals', 'Project work', 'Revision support', 'Balanced development'],
    },
    'academic-calendar': {
      label: 'Academic Calendar',
      title: 'A planned year for learning, events, and assessments.',
      image: '/assets/images/h1.png',
      lead: 'The academic calendar helps students and parents track important dates across lessons, tests, activities, holidays, and school events.',
      details: ['A planned calendar keeps learning consistent and helps families prepare for school responsibilities.', 'Updates are shared through notices and school communication channels.'],
      highlights: ['Term planning', 'Exam dates', 'Events schedule', 'Holiday updates'],
    },
    'exam-schedule': {
      label: 'Exam Schedule',
      title: 'Transparent assessment planning for students.',
      image: '/assets/images/h2.png',
      lead: 'Exam schedules help students prepare systematically and manage revision with confidence.',
      details: ['Periodic tests, term exams, oral assessments, practical work, and assignments form part of the evaluation process.', 'Teachers guide students with revision plans, practice questions, and feedback after assessment.'],
      highlights: ['Periodic tests', 'Revision plans', 'Feedback system', 'Result preparation'],
    },
  },
  gallery: {
    'photo-gallery': {
      label: 'Photo Gallery',
      title: 'Moments from school life and campus learning.',
      image: '/assets/images/h1.png',
      lead: 'The photo gallery showcases classrooms, events, celebrations, competitions, activities, and student achievements.',
      details: ['Photos help parents and visitors see the energy of the school community.', 'The gallery reflects academic, cultural, sports, and social experiences throughout the year.'],
      highlights: ['Campus photos', 'Student activities', 'Celebrations', 'Achievements'],
    },
    'video-gallery': {
      label: 'Video Gallery',
      title: 'Stories of learning, celebration, and achievement.',
      image: '/assets/images/h2.png',
      lead: 'Videos capture important school programs, performances, events, and educational moments.',
      details: ['Video updates help families stay connected with the school experience.', 'They also document annual events, competitions, cultural programs, and campus highlights.'],
      highlights: ['Event videos', 'Student performances', 'Campus updates', 'Program highlights'],
    },
    'campus-tour': {
      label: 'Campus Tour',
      title: 'Explore the spaces where students learn and grow.',
      image: '/assets/images/h3.png',
      lead: 'The campus tour introduces classrooms, labs, activity spaces, library resources, and student support areas.',
      details: ['Families can understand the learning environment before visiting the school in person.', 'The tour highlights safety, cleanliness, accessibility, and academic infrastructure.'],
      highlights: ['Classrooms', 'Labs', 'Library', 'Activity spaces'],
    },
    events: {
      label: 'Events & Celebrations',
      title: 'A lively calendar of learning beyond textbooks.',
      image: '/assets/images/h4.png',
      lead: 'Events and celebrations help students express talent, build confidence, and learn teamwork.',
      details: ['The school celebrates national days, cultural programs, sports events, competitions, exhibitions, and awareness activities.', 'Students get opportunities to lead, perform, organize, and participate.'],
      highlights: ['Cultural programs', 'Sports day', 'Competitions', 'Exhibitions'],
    },
  },
  student: {
    'study-material': {
      label: 'Study Material',
      title: 'Learning resources for steady academic progress.',
      image: '/assets/images/h1.png',
      lead: 'विद्यार्थ्यांना पाठ्यपुस्तके, संदर्भ साहित्य, सराव प्रश्नपत्रिका, प्रकल्प, उपक्रम, डिजिटल अध्ययन साहित्य आणि शिक्षकांचे मार्गदर्शन उपलब्ध करून दिले जाते.',
      details: ['Study material supports classroom learning with notes, worksheets, practice questions, projects, activities, digital resources, and teacher guidance.', 'Students can use these resources to revise important topics and prepare for assessments.'],
      highlights: ['पाठ्यपुस्तके', 'संदर्भ साहित्य', 'सराव प्रश्नपत्रिका', 'प्रकल्प व उपक्रम', 'डिजिटल अध्ययन साहित्य', 'शिक्षकांचे मार्गदर्शन'],
    },
    result: {
      label: 'Results',
      title: 'Results | निकाल',
      image: '/assets/images/h2.png',
      lead: 'प्रेरणा शिक्षण संस्थेच्या विद्यार्थ्यांनी शैक्षणिक क्षेत्रात उल्लेखनीय कामगिरी केली आहे.',
      details: ['The results section supports transparent communication about student performance and progress.', 'Assessment outcomes help identify strengths and areas needing improvement. Teachers and parents can work together to support each student after results are shared.'],
      highlights: ['शैक्षणिक कामगिरी', 'निकाल व प्रगती', 'शिक्षकांचे मार्गदर्शन', 'पालकांचा सहभाग'],
    },
    timetable: {
      label: 'Time Table',
      title: 'Daily structure for disciplined learning.',
      image: '/assets/images/h3.png',
      lead: 'The timetable helps students organize books, homework, study time, and classroom expectations.',
      details: ['A clear timetable supports punctuality, subject balance, and consistent attendance.', 'Updates are communicated when class schedules or exam schedules change.'],
      highlights: ['Class schedule', 'Subject balance', 'Exam timing', 'Daily discipline'],
    },
    library: {
      label: 'Library | ग्रंथालय',
      title: 'वाचन संस्कृती, स्व-अध्ययन आणि ज्ञानाची आवड.',
      image: '/assets/images/h4.png',
      lead: 'शाळेच्या ग्रंथालयामध्ये कथा, कादंबऱ्या, चरित्रे, संदर्भग्रंथ, सामान्यज्ञान, विज्ञान व विविध विषयांवरील शैक्षणिक साहित्य उपलब्ध आहे.',
      details: ['वाचन संस्कृती, स्व-अध्ययन, चिंतनशीलता आणि ज्ञानाची आवड विद्यार्थ्यांमध्ये निर्माण करण्यावर विशेष भर दिला जातो.', 'The library also supports independent reading, assignments, projects, language development, and learning beyond textbooks.'],
      highlights: ['कथा व कादंबऱ्या', 'चरित्रे', 'संदर्भग्रंथ', 'सामान्यज्ञान', 'विज्ञान साहित्य', 'शैक्षणिक साहित्य'],
    },
    sports: {
      label: 'Sports & Activities | क्रीडा व उपक्रम',
      title: 'शारीरिक व मानसिक विकासासाठी क्रीडा आणि उपक्रम.',
      image: '/assets/images/h1.png',
      lead: 'विद्यार्थ्यांच्या शारीरिक व मानसिक विकासासाठी क्रीडेला विशेष महत्त्व दिले जाते.',
      details: ['थेरगाव येथील विद्यालयात संस्थेने विद्यार्थ्यांसाठी अत्याधुनिक टर्फ मैदान उपलब्ध करून दिले आहे. याशिवाय प्रशस्त क्रीडांगण व विविध क्रीडा साधने उपलब्ध आहेत.', 'विद्यार्थ्यांसाठी विविध क्रीडा स्पर्धा, सांस्कृतिक कार्यक्रम, वक्तृत्व, कला, विज्ञान, पर्यावरण आणि सामाजिक उपक्रम आयोजित केले जातात.'],
      highlights: ['अत्याधुनिक Turf Ground', 'प्रशस्त क्रीडांगण', 'क्रीडा साधने', 'क्रीडा स्पर्धा', 'सांस्कृतिक कार्यक्रम', 'वक्तृत्व, कला व विज्ञान', 'पर्यावरण व सामाजिक उपक्रम'],
    },
    scholarship: {
      label: 'Scholarships | शिष्यवृत्ती',
      title: 'शैक्षणिक सहाय्य आणि संधींबाबत मार्गदर्शन.',
      image: '/assets/images/h2.png',
      lead: 'शासनाच्या विविध शिष्यवृत्ती योजना व शैक्षणिक सहाय्य योजनांची माहिती पात्र विद्यार्थ्यांना दिली जाते.',
      details: ['अर्ज प्रक्रिया, पात्रता व आवश्यक कागदपत्रांबाबत विद्यार्थ्यांना व पालकांना मार्गदर्शन केले जाते.', 'Eligible students and families can receive guidance about government, merit-based, and educational assistance schemes.'],
      highlights: ['शासकीय शिष्यवृत्ती योजना', 'शैक्षणिक सहाय्य योजना', 'अर्ज प्रक्रिया', 'पात्रता मार्गदर्शन', 'आवश्यक कागदपत्रे', 'पालकांचे मार्गदर्शन'],
    },
  },
  notices: {
    'latest-notices': {
      label: 'Latest Notices',
      title: 'Important updates for students and parents.',
      image: '/assets/images/h3.png',
      lead: 'Latest notices keep families informed about academics, events, admissions, holidays, examinations, and school activities.',
      details: ['Students and parents should check notices regularly for timely action.', 'Notices may include instructions, deadlines, meeting schedules, and school announcements.'],
      highlights: ['Announcements', 'Deadlines', 'Events', 'Parent updates'],
    },
    'holiday-list': {
      label: 'Holiday List',
      title: 'Planned holidays for the academic year.',
      image: '/assets/images/h4.png',
      lead: 'The holiday list helps families plan while keeping school attendance and academic continuity in mind.',
      details: ['Holiday updates are shared according to the academic calendar and official instructions.', 'Any changes are communicated through school notices.'],
      highlights: ['Annual holidays', 'Festival breaks', 'Official updates', 'Planning support'],
    },
    circulars: {
      label: 'Circulars',
      title: 'Formal school communication in one place.',
      image: '/assets/images/h1.png',
      lead: 'Circulars communicate important instructions, policy updates, event details, academic expectations, and parent information.',
      details: ['Parents and students should read circulars carefully and follow any action points mentioned.', 'Circulars support clear and consistent school communication.'],
      highlights: ['Instructions', 'Policy updates', 'Parent information', 'School planning'],
    },
    newsletter: {
      label: 'Newsletter',
      title: 'Highlights from the school community.',
      image: '/assets/images/h2.png',
      lead: 'The newsletter shares achievements, events, student work, campus updates, and important stories from school life.',
      details: ['It celebrates student participation and keeps the community connected.', 'Newsletters may include academic updates, activity reports, competitions, and special features.'],
      highlights: ['Achievements', 'Event stories', 'Student work', 'Campus updates'],
    },
  },
  facilities: {
    overview: {
      label: 'Facilities | आधुनिक सुविधा',
      title: 'थेरगाव परिसरातील विद्यालयाच्या आधुनिक सुविधा.',
      image: '/assets/images/i1.png',
      lead: 'थेरगाव परिसरातील विद्यालयामध्ये विद्यार्थ्यांना ज्ञान, तंत्रज्ञान, प्रयोगशीलता आणि क्रीडा यांचा प्रत्यक्ष अनुभव देणाऱ्या विविध आधुनिक सुविधा उपलब्ध आहेत.',
      details: ['प्रशस्त व सुसज्ज इमारत, अत्याधुनिक टर्फ मैदान, प्रशस्त क्रीडांगण, दोन संगणक प्रयोगशाळा, STEM Lab, तीन Digital Classrooms आणि स्वतंत्र कार्यक्रम सभागृह उपलब्ध आहे.', 'ग्रंथालय, क्रीडा साहित्य, डिजिटल शिक्षण सुविधा, आरोग्यविषयक सुविधा व उपक्रम, आपत्ती व्यवस्थापन प्रशिक्षण आणि पर्यावरणपूरक उपक्रमांमुळे विद्यार्थ्यांचा सर्वांगीण विकास साधला जातो.'],
      highlights: ['प्रशस्त व सुसज्ज इमारत', 'अत्याधुनिक Turf Ground', 'प्रशस्त क्रीडांगण', 'दोन संगणक प्रयोगशाळा', 'STEM Lab', 'तीन Digital Classrooms', 'स्वतंत्र कार्यक्रम सभागृह', 'ग्रंथालय', 'क्रीडा साहित्य', 'डिजिटल शिक्षण सुविधा', 'आरोग्यविषयक सुविधा', 'आपत्ती व्यवस्थापन प्रशिक्षण', 'पर्यावरणपूरक उपक्रम'],
    },
    'smart-class': {
      label: 'Smart Classes',
      title: 'Interactive classrooms for modern learning.',
      image: '/assets/images/smart-class.png',
      lead: 'Smart classes make lessons clearer and more engaging through visual explanation and digital teaching support.',
      details: ['Technology supports concept clarity, revision, examples, and classroom participation.', 'Teachers use digital tools where useful while maintaining personal guidance and written practice.'],
      highlights: ['Digital lessons', 'Visual learning', 'Interactive teaching', 'Better revision'],
    },
    lab: {
      label: 'Laboratories',
      title: 'Practical spaces for science and discovery.',
      image: '/assets/images/h2.png',
      lead: 'Laboratories help students understand scientific concepts through observation, experiments, and hands-on learning.',
      details: ['Practical work strengthens curiosity, accuracy, safety awareness, and subject confidence.', 'Students learn to connect textbook concepts with real demonstrations.'],
      highlights: ['Experiments', 'Observation', 'Safety habits', 'Science confidence'],
    },
    'sports-facility': {
      label: 'Sports Facilities',
      title: 'Spaces for fitness, discipline, and teamwork.',
      image: '/assets/images/h3.png',
      lead: 'Sports facilities encourage students to build physical fitness, teamwork, confidence, and healthy competition.',
      details: ['Games and physical activities are part of holistic education.', 'Students learn discipline, patience, leadership, and respect through sports.'],
      highlights: ['Fitness', 'Team spirit', 'Competitions', 'Discipline'],
    },
    transport: {
      label: 'Transport',
      title: 'Convenient travel support for students.',
      image: '/assets/images/h4.png',
      lead: 'Transport support helps families manage safe and timely school travel where available.',
      details: ['Routes and availability may be confirmed through the school office.', 'Parents are encouraged to contact the school for current transport details.'],
      highlights: ['Route guidance', 'Timely travel', 'Parent coordination', 'Office support'],
    },
    medical: {
      label: 'Medical Facility',
      title: 'Student wellbeing and first-aid support.',
      image: '/assets/images/h2.png',
      lead: 'Medical support focuses on first-aid readiness, basic health attention, and timely parent communication.',
      details: ['The school promotes cleanliness, safety awareness, and health-conscious habits.', 'In case of illness or injury, parents are informed according to school procedure.'],
      highlights: ['First-aid support', 'Health awareness', 'Parent communication', 'Safe campus'],
    },
  },
};

const fallbackPage = {
  label: 'School Page',
  title: 'Page details are being updated.',
  image: '/assets/images/h1.png',
  lead: 'This page will be updated with complete information soon.',
  details: ['Please contact the school office for the latest information.'],
  highlights: ['Information', 'Updates', 'Support', 'School office'],
};

const DropdownPage = () => {
  const { category, pageId } = useParams();
  const page = pageContent[category]?.[pageId] || fallbackPage;
  const isOverview = category === 'about' && pageId === 'overview';
  const isInfrastructure = category === 'about' && pageId === 'infrastructure';
  const isPrincipalMessage = category === 'about' && pageId === 'principal-message';
  const isMissionVision = category === 'about' && pageId === 'mission-vision';
  const isHistory = category === 'about' && pageId === 'history';

  if (isPrincipalMessage) {
    const principalFocus = [
      { icon: <FaGraduationCap />, title: 'Academic Excellence', text: 'Clear learning, steady guidance, and confidence in every subject.' },
      { icon: <FaShieldAlt />, title: 'Character & Values', text: 'Respect, discipline, empathy, and responsibility in daily life.' },
      { icon: <FaTrophy />, title: 'Holistic Development', text: 'Equal opportunity across academics, sports, culture, and activities.' },
      { icon: <FaLaptop />, title: 'Future-Ready Education', text: 'Strong foundations supported by modern methods and technology.' },
    ];

    return (
      <div className="principal-message-page">
        <section className="principal-message-hero">
          <div className="dropdown-container principal-message-hero-inner">
            <span className="principal-message-label">From the Principal's Desk</span>
            <h1>Principal's Message</h1>
            <p>Guiding every learner with knowledge, care, discipline, and purpose.</p>
          </div>
        </section>

        <section className="principal-message-main">
          <div className="dropdown-container principal-message-layout">
            <aside className="principal-message-aside">
              <div className="principal-photo-frame">
                <img src="/assets/m/principle.png" alt="Principal of Prerana Shikshan Sanstha" />
              </div>
              <div className="principal-quote-card">
                <FaBookOpen aria-hidden="true" />
                <blockquote>“Education inspires knowledge, builds character, and empowers every child to create a brighter future.”</blockquote>
              </div>
            </aside>

            <article className="principal-letter">
              <span className="principal-letter-kicker">Principal's Message | प्राचार्यांचा संदेश</span>
              <h2>मराठी</h2>
              <p>“प्रिय विद्यार्थी, पालक आणि हितचिंतक,</p>
              <p>प्रेरणा शिक्षण संस्था ही केवळ शिक्षण देणारी संस्था नसून ज्ञानासोबत संस्कार, कौशल्यासोबत आत्मविश्वास आणि शिक्षणासोबत सामाजिक बांधिलकी निर्माण करणारी संस्था आहे.</p>
              <p>संस्थापक तुकारामभाऊ गुजर यांनी १ एप्रिल १९८१ रोजी लावलेल्या शिक्षणाच्या या रोपट्याचे आज एका विशाल वटवृक्षात रूपांतर झाले आहे. या संस्थेतून शिक्षण घेतलेले २५,००० हून अधिक विद्यार्थी आज विविध क्षेत्रांत आपल्या कर्तृत्वाचा ठसा उमटवत आहेत, ही आमच्यासाठी अभिमानाची बाब आहे.</p>
              <p>आजच्या तंत्रज्ञानाच्या युगात विद्यार्थ्यांनी केवळ परीक्षेत यश मिळविणे पुरेसे नाही. त्यांनी ज्ञानसंपन्न, संस्कारक्षम, तंत्रज्ञानस्नेही, सर्जनशील, संवेदनशील आणि जबाबदार नागरिक म्हणून घडणे आवश्यक आहे.</p>
              <p>याच उद्देशाने आमच्या विद्यालयांमध्ये आधुनिक तंत्रज्ञान, डिजिटल क्लासरूम, संगणक प्रयोगशाळा, STEM Lab, क्रीडा सुविधा आणि विविध सहशालेय उपक्रमांच्या माध्यमातून विद्यार्थ्यांच्या सर्वांगीण विकासासाठी सातत्याने प्रयत्न केले जात आहेत.</p>
              <p>‘विद्या धनं श्रेष्ठम्’ या संस्थेच्या ब्रीदवाक्याला केंद्रस्थानी ठेवून प्रत्येक विद्यार्थ्याला आपल्या आयुष्यात यशस्वी होण्यासाठी योग्य दिशा, संधी आणि संस्कार देणे हे आमचे ध्येय आहे.”</p>
              <p className="principal-closing-line"><strong>शुभेच्छांसह,</strong></p>
              <h2>Principal's Message | English</h2>
              <p>“Dear Students, Parents and Well-wishers,</p>
              <p>Prerana Shikshan Sanstha is not merely an institution that imparts education; it strives to create a meaningful blend of knowledge and values, skills and confidence, and education and social responsibility.</p>
              <p>The educational journey initiated by the Founder President, Hon. Tukaram Bhau Gujar, on 1 April 1981 has grown into a strong and inspiring institution. More than 25,000 students have been educated through our schools and are now contributing successfully to various fields in India and abroad.</p>
              <p>In today's technology-driven world, academic success alone is not enough. Students must grow into knowledgeable, value-oriented, technology-enabled, creative, sensitive and responsible citizens.</p>
              <p>With this vision, our schools continuously provide opportunities for holistic development through digital classrooms, computer laboratories, STEM education, sports facilities and diverse co-curricular activities.</p>
              <p>Guided by our motto ‘Vidya Dhanam Shreshtham’ – Knowledge is the Greatest Wealth, we strive to provide every student with the right direction, opportunities and values to succeed in life.”</p>
              <div className="principal-signature">
                <span>With best wishes,</span>
                <strong>प्राचार्य शिवले जे. के. | J. K. Shivle</strong>
                <span>Prerana Highschool &amp; Tukaram Gujar Junior College</span>
                <span>Secondary &amp; Higher Secondary Section</span>
                <span>Laxminagar, Thergaon, Pune 411033</span>
              </div>
            </article>
          </div>
        </section>

        <section className="principal-focus-section">
          <div className="dropdown-container">
            <div className="principal-focus-heading">
              <span>Our Educational Focus</span>
              <h2>Preparing students for life, not only examinations.</h2>
            </div>
            <div className="principal-focus-grid">
              {principalFocus.map((item) => (
                <article className="principal-focus-card" key={item.title}>
                  <div className="principal-focus-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isMissionVision) {
    const missionPoints = [
      'Provide a safe, supportive, and student-centered learning environment.',
      'Build strong foundations in academics while encouraging curiosity and creativity.',
      'Promote discipline, integrity, respect, responsibility, and compassion.',
      'Encourage participation in sports, cultural activities, technology, and extracurricular learning.',
      'Help students develop communication, leadership, problem-solving, and life skills.',
      'Create equal opportunities for students to identify and develop their individual talents.',
      'Build a strong partnership between students, teachers, parents, and the community.',
      'Prepare students to confidently face the opportunities and challenges of the future.',
    ];
    const coreValues = [
      { icon: <FaBookOpen />, marathi: 'ज्ञान', title: 'Knowledge', text: 'Building strong academic foundations and encouraging lifelong learning.' },
      { icon: <FaShieldAlt />, marathi: 'संस्कार', title: 'Values', text: 'Developing respect, honesty, discipline, empathy, and responsibility.' },
      { icon: <FaTrophy />, marathi: 'उत्कृष्टता', title: 'Excellence', text: 'Encouraging every student to continuously improve and achieve their best.' },
      { icon: <FaLaptop />, marathi: 'सर्जनशीलता', title: 'Creativity', text: 'Giving students opportunities to think independently, explore ideas, and innovate.' },
      { icon: <FaUsers />, marathi: 'समानता', title: 'Inclusivity', text: 'Creating an environment where every learner is respected, supported, and given opportunities to grow.' },
      { icon: <FaCheckCircle />, marathi: 'जबाबदारी', title: 'Responsibility', text: 'Preparing students to become responsible citizens who contribute positively to society.' },
    ];

    return (
      <div className="mission-vision-page">
        <section className="mission-vision-hero">
          <div className="dropdown-container mission-vision-hero-inner">
            <span className="mission-vision-label">Our Purpose &amp; Direction</span>
            <h1>Mission &amp; Vision</h1>
            <p>ज्ञान <i>•</i> संस्कार <i>•</i> प्रगती</p>
            <small>Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College</small>
          </div>
        </section>

        <section className="vision-section">
          <div className="dropdown-container vision-layout">
            <div className="vision-visual">
              <img src="/assets/images/vision.png" alt="Prerana students inspired by a shared educational vision" />
              <div className="vision-mark" aria-hidden="true"><FaGraduationCap /></div>
            </div>
            <div className="vision-copy">
              <span>Vision | दृष्टी</span>
              <h2>ज्ञान, संस्कार, कौशल्य आणि सामाजिक बांधिलकी.</h2>
              <p>“ज्ञान, संस्कार, कौशल्य आणि सामाजिक बांधिलकी यांचा समन्वय साधून सक्षम, संवेदनशील आणि जबाबदार नागरिक घडविणे.”</p>
              <p>“To nurture capable, sensitive and responsible citizens through a harmonious blend of knowledge, values, skills and social responsibility.”</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="dropdown-container">
            <div className="mission-heading">
              <span>Mission | ध्येय</span>
              <h2>गुणवत्तापूर्ण, सर्वसमावेशक आणि सर्वांगीण शिक्षण.</h2>
              <p>“गुणवत्तापूर्ण व सर्वसमावेशक शिक्षणाच्या माध्यमातून प्रत्येक विद्यार्थ्याच्या सुप्त क्षमतांना वाव देणे, आधुनिक तंत्रज्ञानाचा प्रभावी वापर करणे आणि विद्यार्थ्यांचा शैक्षणिक, सामाजिक, सांस्कृतिक, क्रीडा व नैतिक विकास साधणे.”</p>
              <p>“To provide quality and inclusive education, nurture the potential of every student, effectively integrate modern technology and promote the academic, social, cultural, physical and moral development of every learner.”</p>
            </div>
            <div className="mission-points-grid">
              {missionPoints.map((point, index) => (
                <div className="mission-point" key={point}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="dropdown-container philosophy-card">
            <div className="philosophy-symbol"><FaBookOpen /></div>
            <div>
              <span>Our Educational Philosophy</span>
              <h2>शिक्षणातून प्रेरणा, संस्कारातून व्यक्तिमत्त्व आणि ज्ञानातून उज्ज्वल भविष्य.</h2>
              <p>At Prerana, we believe that education is not limited to textbooks and examinations. True education develops the mind, character, confidence, creativity, and values of a child.</p>
              <p>From primary education through secondary and junior college, our aim is to provide students with an environment where they can <strong>Learn, Explore, Grow, and Succeed.</strong></p>
            </div>
          </div>
        </section>

        <section className="core-values-section">
          <div className="dropdown-container">
            <div className="core-values-heading">
              <span>Our Core Values</span>
              <h2>The principles that shape the Prerana experience.</h2>
            </div>
            <div className="core-values-grid">
              {coreValues.map((value) => (
                <article className="core-value-card" key={value.title}>
                  <div className="core-value-icon">{value.icon}</div>
                  <span>{value.marathi}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="commitment-section">
          <div className="dropdown-container commitment-inner">
            <span>Our Commitment</span>
            <h2>Every Child. Every Dream. Every Opportunity.</h2>
            <p>At Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College, we are committed to nurturing every learner with knowledge, values, confidence, and opportunities so they can build a meaningful and successful future.</p>
          </div>
        </section>
      </div>
    );
  }

  if (isHistory) {
    const journeyMilestones = [
      { icon: <FaSchool />, title: '१९८१ – प्रेरणेची सुरुवात', text: '१ एप्रिल १९८१ रोजी संस्थापक अध्यक्ष माननीय तुकारामभाऊ लक्ष्मणराव गुजर यांनी आपल्या वडिलांच्या स्मरणार्थ प्रेरणा शिक्षण संस्थेची स्थापना केली.', image: '/assets/images/h1.png' },
      { icon: <FaUsers />, title: '२५,०००+ विद्यार्थी', text: 'आजपर्यंत २५,००० हून अधिक विद्यार्थ्यांनी संस्थेच्या विविध विद्यालयांमधून शिक्षण घेतले आहे.', image: '/assets/images/h2.png' },
      { icon: <FaTrophy />, title: 'विविध क्षेत्रांतील यशस्वी माजी विद्यार्थी', text: 'संस्थेचे माजी विद्यार्थी आज देश-विदेशात सरकारी अधिकारी, डॉक्टर, वकील, सीए, आर्किटेक्ट, कलाकार, खेळाडू, उद्योजक आणि विविध व्यावसायिक क्षेत्रांत कार्यरत आहेत.', image: '/assets/images/h3.png' },
      { icon: <FaLaptop />, title: 'आधुनिक शैक्षणिक सुविधा', text: 'काळानुरूप संस्थेने आधुनिक शिक्षणाचा स्वीकार करून Digital Classrooms, Computer Labs, STEM Lab, Turf Ground आणि विविध आधुनिक शैक्षणिक सुविधा विद्यार्थ्यांसाठी उपलब्ध करून दिल्या आहेत.', image: '/assets/images/i1.png' },
      { icon: <FaGraduationCap />, title: 'नव्या पिढीचा सहभाग', text: 'कांतीलाल तुकारामभाऊ गुजर, शालिनीताई गुजर, अक्षय गुजर आणि ॲड. आकाश गुजर यांच्या सक्रिय सहभागातून संस्थेची पुढील वाटचाल अधिक सक्षम करण्याचा प्रयत्न सुरू आहे.', image: '/assets/images/h4.png' },
    ];

    return (
      <div className="history-page">
        <section className="history-hero">
          <div className="dropdown-container history-hero-inner">
            <span className="history-label">Our Journey</span>
            <h1>A Legacy of Learning,<br />A Future of Possibilities</h1>
            <p>प्रेरणा शिक्षण संस्था · Laxminagar, Thergaon, Pune – 33</p>
          </div>
        </section>

        <section className="history-intro">
          <div className="dropdown-container history-intro-layout">
            <div className="history-intro-heading">
              <span>History &amp; Milestones | इतिहास व महत्त्वाचे टप्पे</span>
              <h2>परंपरेचा वारसा, वर्तमानाची गुणवत्ता आणि भविष्याची दृष्टी.</h2>
            </div>
            <div className="history-intro-copy">
              <p>१ एप्रिल १९८१ रोजी सुरू झालेल्या प्रेरणा शिक्षण संस्थेने आजपर्यंत २५,००० हून अधिक विद्यार्थ्यांना शिक्षणाची आणि विकासाची संधी दिली आहे.</p>
              <p>माजी विद्यार्थ्यांनी विविध क्षेत्रांत उल्लेखनीय यश मिळविले असून संस्थेने काळानुरूप Digital Classrooms, Computer Labs, STEM Lab, Turf Ground आणि इतर आधुनिक सुविधा उपलब्ध करून दिल्या आहेत.</p>
              <p>कांतीलाल तुकारामभाऊ गुजर, शालिनीताई गुजर, अक्षय गुजर आणि ॲड. आकाश गुजर यांच्या सक्रिय सहभागातून संस्थेची पुढील वाटचाल अधिक सक्षम करण्याचा प्रयत्न सुरू आहे.</p>
            </div>
          </div>
        </section>

        <section className="history-milestones">
          <div className="dropdown-container">
            <div className="history-section-heading">
              <span>Our Milestones | महत्त्वाचे टप्पे</span>
              <h2>प्रेरणा शिक्षण संस्थेच्या प्रगतीची वाटचाल.</h2>
              <p>संस्थेच्या इतिहासातील महत्त्वाचे टप्पे आणि पुढील पिढीच्या सहभागातून सुरू असलेली विकासयात्रा.</p>
            </div>
            <div className="journey-timeline">
              {journeyMilestones.map((milestone, index) => (
                <article className="journey-entry" key={milestone.title}>
                  <div className="journey-image"><img src={milestone.image} alt={`${milestone.title} at Prerana Shikshan Sanstha`} /></div>
                  <div className="journey-marker"><span>{index + 1}</span></div>
                  <div className="journey-content">
                    <div className="journey-icon">{milestone.icon}</div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="then-now-section">
          <div className="dropdown-container">
            <div className="history-section-heading">
              <span>Then &amp; Now</span>
              <h2>Growing with Every Generation</h2>
            </div>
            <div className="then-now-grid">
              <figure><img src="/assets/images/h1.png" alt="The developing journey of Prerana campus" /><figcaption>The Journey</figcaption></figure>
              <figure><img src="/assets/images/h4.png" alt="Learning environment at Prerana today" /><figcaption>Prerana Today</figcaption></figure>
            </div>
            <p className="then-now-message">From its early beginnings to the institution it is today, Prerana's journey has been shaped by the dedication of its founders, management, teachers, staff, students, parents, and well-wishers.</p>
          </div>
        </section>

        <section className="journey-continues">
          <img src="/assets/images/h5.png" alt="Students continuing the Prerana educational journey" />
          <div className="journey-continues-overlay">
            <div className="dropdown-container">
              <span>Looking Ahead</span>
              <h2>Our Journey Continues…</h2>
              <p>With every learner, every lesson, and every new opportunity, Prerana continues to move forward with purpose—rooted in values and inspired by the future.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`dropdown-page ${isOverview ? 'about-overview-page' : ''}`}>
      <section className="dropdown-hero dropdown-hero-no-image">
        <div className="dropdown-hero-overlay">
          <div className="dropdown-container dropdown-hero-content">
            <div className="dropdown-icon-pill">
              {iconMap[category] || <FaSchool />}
              <span>{page.label}</span>
            </div>
            <h1>{page.title}</h1>
            <p>{page.lead}</p>
          </div>
        </div>
      </section>

      <section className="dropdown-main">
        <div className="dropdown-container dropdown-main-grid">
          <div className="dropdown-copy">
            <span className="dropdown-section-label">Prerana Shikshan Sanstha</span>
            <h2>{isOverview ? 'Complete School Overview' : page.label}</h2>
            {page.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <aside className="dropdown-info-panel">
            <h3>Key Highlights</h3>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}><FaCheckCircle /> {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {isInfrastructure && (
        <section className="infrastructure-showcase" aria-labelledby="infrastructure-heading">
          <div className="dropdown-container">
            <div className="infrastructure-heading">
              <span className="dropdown-section-label">Campus Infrastructure</span>
              <h2 id="infrastructure-heading">Infrastructure in Our School</h2>
              <p>Purposeful spaces and essential facilities create a safe, engaging, and student-friendly learning environment.</p>
            </div>

            <div className="infrastructure-grid">
              {infrastructureFacilities.map((facility) => (
                <article className="infrastructure-card" key={facility.title}>
                  <div className="infrastructure-logo" aria-hidden="true">{facility.icon}</div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {isOverview && (
        <section className="overview-depth">
          <div className="dropdown-container">
            <div className="overview-depth-heading">
              <span className="dropdown-section-label">More About Us</span>
              <h2>What makes the institution meaningful for students and parents?</h2>
            </div>
            <div className="overview-card-grid">
              {page.cards.map((card) => (
                <div className="overview-card" key={card.title}>
                  {card.icon}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
            <div className="overview-profile">
              <div>
                <h3>School Identity</h3>
                <p>
                  प्रेरणा शिक्षण संस्था combines local community trust with a
                  professional educational approach. The institution supports
                  students through structured academics, regular guidance,
                  co-curricular opportunities, and a disciplined campus culture.
                </p>
              </div>
              <div>
                <h3>Location Advantage</h3>
                <p>
                  Being situated at Laxminagar, Thergaon, Pune - 33 makes the
                  school accessible for nearby families while keeping students
                  connected to their community and cultural roots.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="dropdown-feature-strip">
        <div className="dropdown-container dropdown-strip-grid">
          <div><FaClipboardList /><span>Structured Planning</span></div>
          <div><FaCalendarAlt /><span>Regular Updates</span></div>
          <div><FaEnvelopeOpenText /><span>Parent Communication</span></div>
          <div><FaMapMarkedAlt /><span>Laxminagar, Thergaon</span></div>
        </div>
      </section>

    </div>
  );
};

export default DropdownPage;
