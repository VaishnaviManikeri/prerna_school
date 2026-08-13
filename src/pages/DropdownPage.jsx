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
              <span className="principal-letter-kicker">Dear Parents, Students and Well-Wishers,</span>
              <p>It gives me immense pleasure to welcome you to <strong>प्रेरणा शिक्षण संस्था – Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College, Laxminagar, Thergaon, Pune – 33.</strong></p>
              <p>At Prerana, we believe that education is not merely about academic achievement; it is about nurturing responsible, confident, compassionate, and capable individuals who are prepared to face the opportunities and challenges of the future.</p>
              <p>Our aim is to provide every student with a supportive and inspiring learning environment where they can discover their potential, develop curiosity, build strong values, and grow academically as well as personally. We encourage our students to participate actively in academics, sports, cultural activities, and other co-curricular opportunities that contribute to their overall development.</p>
              <p>Our dedicated teachers play an important role in this journey by guiding students with knowledge, care, discipline, and encouragement. We also strongly believe that a meaningful partnership between <strong>students, teachers, parents, and the institution</strong> is essential for a child’s success.</p>
              <p>As we continue to grow, our commitment remains to provide <strong>quality education rooted in strong values while embracing modern learning methods and technology.</strong> We want our students not only to succeed in examinations but also to become thoughtful, responsible citizens who contribute positively to society.</p>
              <p>I extend my sincere gratitude to our parents for their trust and cooperation, to our teachers and staff for their dedication, and to our students for making our institution proud.</p>
              <p className="principal-closing-line"><strong>Together, let us continue to learn, grow, and inspire.</strong></p>
              <div className="principal-signature">
                <span>Warm Regards,</span>
                <strong>Principal</strong>
                <span>Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College</span>
                <span>Laxminagar, Thergaon, Pune – 33</span>
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
              <span>Our Vision</span>
              <h2>Inspiring Minds, Building Character, Shaping the Future</h2>
              <p>To create a progressive and nurturing educational environment where every student is encouraged to discover their potential, develop strong values, and grow into a confident, responsible, and compassionate citizen.</p>
              <p>We envision Prerana Shikshan Sanstha as a place where academic excellence goes hand in hand with character building, creativity, discipline, and lifelong learning.</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="dropdown-container">
            <div className="mission-heading">
              <span>Our Mission</span>
              <h2>Quality, inclusive, and value-based education for every learner.</h2>
              <p>Our mission supports the intellectual, emotional, social, and physical development of every student. We strive to:</p>
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
      { icon: <FaSchool />, title: 'Foundation of Prerana Shikshan Sanstha', text: "The beginning of the institution's journey with a vision to make meaningful and value-based education accessible to students.", image: '/assets/images/h1.png' },
      { icon: <FaBookOpen />, title: 'Beginning of Primary Education', text: 'Expansion into foundational education with an emphasis on building strong academic habits, curiosity, confidence, and personal values.', image: '/assets/images/h2.png' },
      { icon: <FaChalkboardTeacher />, title: 'Growth into Secondary Education', text: 'The institution expanded its educational offerings to guide students through the important years of secondary-school learning.', image: '/assets/images/h3.png' },
      { icon: <FaGraduationCap />, title: 'Tukaram Gujar Junior College', text: 'A significant step extending the educational journey into junior college and helping learners prepare for higher education and future careers.', image: '/assets/images/h4.png' },
      { icon: <FaLaptop />, title: 'Development of Campus & Facilities', text: 'Continuous improvement of classrooms, learning resources, laboratories, sports facilities, technology, and student-support infrastructure.', image: '/assets/images/i1.png' },
      { icon: <FaTrophy />, title: 'Academic & Co-curricular Achievements', text: "Celebrating students' efforts and accomplishments across academics, sports, cultural activities, competitions, and many other fields.", image: '/assets/images/h5.png' },
      { icon: <FaUsers />, title: 'Prerana Today', text: 'A growing educational community continuing its commitment to knowledge, character, discipline, confidence, and holistic development.', image: '/assets/images/image.png' },
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
              <span>Our Story</span>
              <h2>An educational journey shaped by purpose and community.</h2>
            </div>
            <div className="history-intro-copy">
              <p>Prerana Shikshan Sanstha has been committed to providing quality education and creating an environment where students can learn, grow, and develop into responsible individuals.</p>
              <p>Through <strong>Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College</strong>, the institution supports students through important stages of their educational journey—from foundational learning in the primary years to secondary and junior college education.</p>
              <p>Located at <strong>Laxminagar, Thergaon, Pune – 33</strong>, the institution continues to work toward academic development while encouraging discipline, values, confidence, creativity, and the overall growth of every student.</p>
            </div>
          </div>
        </section>

        <section className="history-milestones">
          <div className="dropdown-container">
            <div className="history-section-heading">
              <span>Our Milestones</span>
              <h2>Important chapters in the Prerana journey.</h2>
              <p>Presented without dates until the institution's historical records are formally verified.</p>
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
