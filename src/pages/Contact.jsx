import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../assets/placeholder';

const Contact = () => {
  const contactItems = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`
    }
  ];

  return (
    <main style={{ paddingTop: 'var(--space-32)' }}>
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1>Get In Touch</h1>
              <p style={{
                maxWidth: '600px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </AnimatedSection>

          <div className="two-col-grid">
            {/* Contact Info */}
            <AnimatedSection
              className="contact-info col-span-5"
              direction="left"
            >
              <div style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
                height: '100%'
              }}>
                <h3 style={{ marginBottom: 'var(--space-6)' }}>Contact Information</h3>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                  marginBottom: 'var(--space-10)'
                }}>
                  {contactItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.label === 'Location' ? '_blank' : undefined}
                      rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                      className="contact-item"
                      style={{
                        display: 'flex',
                        gap: 'var(--space-4)',
                        color: 'var(--color-text-primary)',
                        textDecoration: 'none',
                        transition: 'var(--transition-colors)'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary-500)',
                        color: 'white',
                        flexShrink: 0
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: '500', marginBottom: 'var(--space-1)' }}>
                          {item.label}:
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <h4 style={{ marginBottom: 'var(--space-4)' }}>Follow Me</h4>
                <SocialLinks />
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection
              className="contact-form col-span-7"
              direction="right"
            >
              <div style={{
                padding: 'var(--space-8)',
                backgroundColor: 'var(--color-bg-primary)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px var(--color-shadow)'
              }}>
                <h3 style={{ marginBottom: 'var(--space-6)' }}>Send Me a Message</h3>

                <ContactForm />

                <p style={{
                  marginTop: 'var(--space-8)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center'
                }}>
                  Would rather connect on a project basis?{' '}
                  <Link
                    to="/projects"
                    style={{
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)'
                    }}
                  >
                    View my projects <FiArrowRight size={12} />
                  </Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;