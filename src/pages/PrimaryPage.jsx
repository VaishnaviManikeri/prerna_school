import {
  FaBookOpen, FaComments, FaLightbulb, FaPaintBrush, FaFutbol,
  FaHandsHelping, FaHeart, FaMusic, FaSchool, FaShieldAlt,
  FaStar, FaUsers,
} from 'react-icons/fa';
import './PrimaryPage.css';

const learningApproach = [
  { icon: <FaBookOpen />, title: 'Strong Academic Foundation', text: 'Helping children develop essential knowledge and fundamental concepts for their future education.' },
  { icon: <FaHandsHelping />, title: 'Activity-Based Learning', text: 'Encouraging children to participate, observe, discuss, and learn through meaningful experiences.' },
  { icon: <FaLightbulb />, title: 'Creativity & Curiosity', text: 'Creating space for questions, ideas, imagination, exploration, and independent thinking.' },
  { icon: <FaShieldAlt />, title: 'Values & Discipline', text: 'Encouraging responsibility, respect, positive habits, discipline, and strong values from an early age.' },
];

const developmentAreas = [
  { icon: <FaBookOpen />, title: 'Academic Growth', text: 'Building fundamental learning skills.' },
  { icon: <FaComments />, title: 'Communication', text: 'Expressing ideas with growing confidence.' },
  { icon: <FaPaintBrush />, title: 'Creativity', text: 'Developing imagination through creative work.' },
  { icon: <FaFutbol />, title: 'Physical Development', text: 'Encouraging movement and active participation.' },
  { icon: <FaUsers />, title: 'Social Skills', text: 'Learning cooperation, responsibility, and respect.' },
  { icon: <FaHeart />, title: 'Values & Character', text: 'Developing discipline and positive habits.' },
];

const studentJourney = [
  { icon: <FaSchool />, label: 'Morning Assembly' },
  { icon: <FaBookOpen />, label: 'Classroom Learning' },
  { icon: <FaHandsHelping />, label: 'Activities' },
  { icon: <FaUsers />, label: 'Break & Interaction' },
  { icon: <FaPaintBrush />, label: 'Creative Learning' },
  { icon: <FaFutbol />, label: 'Sports & Co-curricular' },
];

const gallery = [
  { image: '/assets/images/learning.png', label: 'Classroom Learning' },
  { image: '/assets/images/activity.png', label: 'Student Activities' },
  { image: '/assets/images/sports.png', label: 'Sports & Physical Activities' },
  { image: '/assets/images/p2.png', label: 'Learning Together' },
  { image: '/assets/images/p3.png', label: 'Creative Activities' },
  { image: '/assets/images/studentp.png', label: 'Student Participation' },
  { image: '/assets/images/schoolcel.png', label: 'School Celebrations' },
];

const PrimaryPage = () => (
  <div className="primary-school-page">
    <section className="primary-hero">
      <img src="/assets/images/p2.png" alt="Students of Prerana Primary School" />
      <div className="primary-hero-overlay">
        <div className="primary-container primary-hero-content">
          <span>Primary Education</span>
          <h1>Building Strong Foundations for a Brighter Future</h1>
          <p>At Prerana Primary School, we aim to create a positive and encouraging environment where young learners can develop knowledge, confidence, creativity, discipline, and strong values.</p>
          <div className="primary-identity">Learn <i>•</i> Explore <i>•</i> Participate <i>•</i> Grow</div>
        </div>
      </div>
    </section>

    <section className="primary-welcome">
      <div className="primary-container primary-welcome-grid">
        <div className="primary-welcome-image"><img src="/assets/images/p4.png" alt="Young learners at Prerana Primary School" /><span>A positive beginning</span></div>
        <div className="primary-welcome-copy">
          <span className="primary-label">Welcome to Our Primary Section</span>
          <h2>A Strong Beginning to Every Child’s Learning Journey</h2>
          <p>Primary education plays an important role in shaping a child’s academic and personal development. At Prerana, our focus is on helping children understand fundamental concepts while encouraging curiosity, communication, creativity, and independent thinking.</p>
          <p>We strive to create a learning environment where students feel encouraged to learn, explore, participate, and grow at their own pace.</p>
        </div>
      </div>
    </section>

    <section className="primary-approach">
      <div className="primary-container">
        <div className="primary-heading"><span className="primary-label">Our Approach to Learning</span><h2>Purposeful learning for young minds.</h2><p>Four principles guide the learning experience we aim to create.</p></div>
        <div className="primary-approach-grid">
          {learningApproach.map((item, index) => <article className="primary-approach-card" key={item.title}><small>0{index + 1}</small><div>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="primary-development">
      <div className="primary-container">
        <div className="primary-heading"><span className="primary-label">Learning & Development</span><h2>Developing Every Aspect of a Child</h2></div>
        <div className="primary-development-grid">
          {developmentAreas.map((item) => <article className="primary-development-card" key={item.title}><div>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="primary-beyond">
      <div className="primary-container primary-beyond-grid">
        <div className="primary-beyond-copy"><span className="primary-label light">Beyond the Classroom</span><h2>Learning is more than textbooks.</h2><p>Age-appropriate activities give children opportunities to participate, work with others, express ideas, build confidence, and discover new interests.</p><div className="primary-activity-tags"><span><FaFutbol /> Sports</span><span><FaPaintBrush /> Art</span><span><FaMusic /> Culture</span><span><FaStar /> Performances</span></div></div>
        <div className="primary-beyond-images"><img src="/assets/images/p3.png" alt="Creative learning activities" /><img src="/assets/images/s1.png" alt="Students participating beyond the classroom" /></div>
      </div>
    </section>

    <section className="primary-day">
      <div className="primary-container">
        <div className="primary-heading"><span className="primary-label">A Day at Prerana</span><h2>A balanced journey through learning and interaction.</h2><p>This sequence presents the rhythm of the student experience without publishing unconfirmed timings.</p></div>
        <div className="primary-day-track">
          {studentJourney.map((item, index) => <div className="primary-day-step" key={item.label}><span>{index + 1}</span><div>{item.icon}</div><strong>{item.label}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="primary-gallery-section">
      <div className="primary-container">
        <div className="primary-heading"><span className="primary-label">Student Life</span><h2>Learning moments at Prerana.</h2><p>Real school photographs help families experience the energy of our learning community.</p></div>
        <div className="primary-gallery-grid">
          {gallery.map((item) => <figure key={item.label}><img src={item.image} alt={`${item.label} at Prerana`} /><figcaption>{item.label}</figcaption></figure>)}
        </div>
      </div>
    </section>

    <section className="primary-parents">
      <div className="primary-container primary-parents-grid">
        <div><img src="/assets/images/p1.png" alt="Teacher supporting primary students" /></div>
        <div className="primary-parents-copy"><span className="primary-label">Message for Parents</span><h2>Growing Together: School & Parents</h2><p>We believe that a child’s development is strengthened when teachers and parents work together. Regular communication, shared understanding, and encouragement can help children become confident, responsible, and enthusiastic learners.</p></div>
      </div>
    </section>

    <section className="primary-highlight-strip"><div className="primary-container">{['Learning','Creativity','Discipline','Confidence','Values','Growth'].map((item)=><span key={item}>{item}</span>)}</div></section>
  </div>
);

export default PrimaryPage;
