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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
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
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-xl)',
                  transition: 'var(--transition-colors)',
                  '&:hover': {
                    color: 'var(--color-primary-500)'
                  }
                }}
              >
                <FiLinkedin />
              </a>
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-xl)',
                  transition: 'var(--transition-colors)',
                  '&:hover': {
                    color: 'var(--color-primary-500)'
                  }
                }}
              >
                <FiGithub />
              </a>
              <a 
                href={personalInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-xl)',
                  transition: 'var(--transition-colors)',
                  '&:hover': {
                    color: 'var(--color-primary-500)'
                  }
                }}
              >
                <FiInstagram />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                aria-label="Email"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-xl)',
                  transition: 'var(--transition-colors)',
                  '&:hover': {
                    color: 'var(--color-primary-500)'
                  }
                }}
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
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>
                <Link 
                  to="/" 
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    transition: 'var(--transition-colors)',
                    '&:hover': {
                      color: 'var(--color-primary-500)'
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    transition: 'var(--transition-colors)',
                    '&:hover': {
                      color: 'var(--color-primary-500)'
                    }
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    transition: 'var(--transition-colors)',
                    '&:hover': {
                      color: 'var(--color-primary-500)'
                    }
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    transition: 'var(--transition-colors)',
                    '&:hover': {
                      color: 'var(--color-primary-500)'
                    }
                  }}
                >
                  Contact
                </Link>
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
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
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