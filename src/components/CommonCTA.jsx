import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CommonCTA.css';

const CommonCTA = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith('/admin')) return null;

  return (
    <section className="common-cta" aria-labelledby="common-cta-title">
      <div className="common-cta-inner">
        <div className="common-cta-copy">
          <span className="common-cta-kicker">A place to learn, belong, and grow</span>
          <h2 id="common-cta-title">Build a confident future with Prerana.</h2>
          <p>
            Prerana Primary, Secondary &amp; Tukaram Gujar Jr. College offers a
            continuous learning journey supported by dedicated teachers,
            strong values, and a caring school community.
          </p>
        </div>
        <div className="common-cta-actions">
          <Link to="/admissions" className="common-cta-primary">Explore Admissions <FaArrowRight /></Link>
          <Link to="/contact" className="common-cta-secondary">Contact the School</Link>
        </div>
      </div>
    </section>
  );
};

export default CommonCTA;
