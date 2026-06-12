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
      lead: 'Study material supports classroom learning with notes, worksheets, practice questions, and revision guidance.',
      details: ['Students can use these resources to revise important topics and prepare for assessments.', 'Teachers may share subject-wise support material based on class needs.'],
      highlights: ['Notes', 'Worksheets', 'Practice sets', 'Revision guidance'],
    },
    result: {
      label: 'Results',
      title: 'Clear academic feedback for students and parents.',
      image: '/assets/images/h2.png',
      lead: 'The results section supports transparent communication about student performance and progress.',
      details: ['Assessment outcomes help identify strengths and areas needing improvement.', 'Teachers and parents can work together to support each student after results are shared.'],
      highlights: ['Exam results', 'Progress tracking', 'Teacher feedback', 'Parent support'],
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
      label: 'Library',
      title: 'A reading culture for knowledge and imagination.',
      image: '/assets/images/h4.png',
      lead: 'The library encourages students to read beyond textbooks and build language, curiosity, and research skills.',
      details: ['Students are guided to use books and reference material for assignments, projects, and independent reading.', 'Reading habits strengthen vocabulary, confidence, and comprehension.'],
      highlights: ['Reference books', 'Story reading', 'Project support', 'Language growth'],
    },
    sports: {
      label: 'Sports & Activities',
      title: 'Confidence, fitness, teamwork, and leadership.',
      image: '/assets/images/h1.png',
      lead: 'Sports and activities help students develop discipline, teamwork, stamina, and a healthy competitive spirit.',
      details: ['Students are encouraged to participate in games, fitness activities, competitions, and house events.', 'Activities also support confidence, communication, creativity, and leadership.'],
      highlights: ['Fitness', 'Teamwork', 'Competitions', 'Leadership'],
    },
    scholarship: {
      label: 'Scholarships',
      title: 'Encouraging merit, effort, and opportunity.',
      image: '/assets/images/h2.png',
      lead: 'Scholarship guidance helps deserving students and families explore available support opportunities.',
      details: ['Students may receive guidance for government, merit-based, or institution-supported scholarship processes where applicable.', 'The school encourages sincere effort and academic consistency.'],
      highlights: ['Merit support', 'Application guidance', 'Student encouragement', 'Academic motivation'],
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
    hostel: {
      label: 'Hostel',
      title: 'Residential support information for families.',
      image: '/assets/images/h1.png',
      lead: 'The hostel information page helps parents understand available residential support and related school guidance.',
      details: ['Families can contact the school office to confirm current hostel availability, process, rules, and facilities.', 'The focus remains student safety, discipline, and academic routine.'],
      highlights: ['Residential guidance', 'Safety focus', 'Routine support', 'Office information'],
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

  return (
    <div className="dropdown-page">
      <section className="dropdown-hero">
        <img src={page.image} alt={page.title} className="dropdown-hero-img" />
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

      <section className="dropdown-cta">
        <div className="dropdown-container dropdown-cta-box">
          <div>
            <h2>Need more information?</h2>
            <p>Contact the school office for current details, schedules, and admission guidance.</p>
          </div>
          <a href="#contact">Contact School <FaArrowRight /></a>
        </div>
      </section>
    </div>
  );
};

export default DropdownPage;
