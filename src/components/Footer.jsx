import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { personalInfo } from '../assets/placeholder';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-secondary)',
      color: 'var(--color-text-secondary)',
      padding: 'var(--space-10) 0 var(--space-6)',
      marginTop: 'var(--space-20)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-10)'
        }}>
          {/* Brand column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-3)' }}>
              {personalInfo.name}
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', maxWidth: '300px' }}>
              {personalInfo.title} based in {personalInfo.location}
            </p>
            <div className="footer-social" style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Pages column */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-4)' }}>
              Pages
            </h4>
            <ul className="footer-links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-4)' }}>
              Contact
            </h4>
            <address style={{
              fontStyle: 'normal',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)'
            }}>
              <p style={{ margin: 0 }}>{personalInfo.email}</p>
              <p style={{ margin: 0 }}>{personalInfo.phone}</p>
              <p style={{ margin: 0 }}>{personalInfo.location}</p>
            </address>
          </div>
        </div>

        {/* Copyright & credits */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <p style={{ margin: 0 }}>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;