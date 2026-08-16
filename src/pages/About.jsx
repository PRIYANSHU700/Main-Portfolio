import { Link } from 'react-router-dom';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import SkillBar from '../components/SkillBar';
import { personalInfo, skills, experiences, education } from '../assets/placeholder';

const About = () => {
  return (
    <main style={{ paddingTop: 'var(--space-32)' }}>
      {/* About Me Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h1>About Me</h1>
              <p style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                Get to know more about me, my experience, and my skills
              </p>
            </div>
          </AnimatedSection>

          <div className="two-col-grid">
            {/* Profile Image */}
            <AnimatedSection
              className="profile-image col-span-5"
              direction="left"
            >
              <div style={{
                position: 'relative',
                maxWidth: '90%',
                margin: '0 auto'
              }}>
                <div style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px var(--color-shadow)',
                  border: '4px solid var(--color-bg-primary)'
                }}>
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-primary-500)',
                  opacity: '0.2',
                  zIndex: '-1'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '70px',
                  height: '70px',
                  borderRadius: 'var(--radius-full)',
                  border: '10px solid var(--color-accent-500)',
                  opacity: '0.3',
                  zIndex: '-1'
                }} />
              </div>
            </AnimatedSection>

            {/* Bio */}
            <AnimatedSection
              className="bio col-span-7"
              direction="right"
            >
              <h2>Who am I?</h2>
              <p style={{
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-secondary)'
              }}>
                I'm {personalInfo.name}, a {personalInfo.title} based in {personalInfo.location}.
              </p>

              <div style={{ marginBottom: 'var(--space-6)' }}>
                {personalInfo.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: 'var(--space-4)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bio-actions">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  Download Resume <FiDownload />
                </a>
                <Link
                  to="/contact"
                  className="button secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  Contact Me <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2>My Skills</h2>
              <p style={{
                maxWidth: '600px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                Here are my technical skills and proficiency levels
              </p>
            </div>
          </AnimatedSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-8)'
          }}>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2>Experience & Education</h2>
              <p style={{
                maxWidth: '600px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                My professional journey and educational background
              </p>
            </div>
          </AnimatedSection>

          <div className="two-col-grid">
            {/* Experience */}
            <div className="col-span-6-left">
              <AnimatedSection direction="left">
                <h3 style={{ marginBottom: 'var(--space-8)' }}>Work Experience</h3>
              </AnimatedSection>

              <div className="timeline">
                {experiences.map((exp, index) => (
                  <AnimatedSection key={exp.id} delay={0.2 * index} direction="left">
                    <div className="timeline-item" style={{ marginBottom: 'var(--space-8)' }}>
                      <div style={{ marginBottom: 'var(--space-2)' }}>
                        <h4 style={{ marginBottom: 'var(--space-1)', fontSize: 'var(--font-size-lg)' }}>
                          {exp.position}
                        </h4>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: 'var(--space-2)',
                          marginBottom: 'var(--space-2)'
                        }}>
                          <span style={{ fontWeight: '500', color: 'var(--color-primary-500)' }}>
                            {exp.company}
                          </span>
                          <span style={{ color: 'var(--color-text-secondary)' }}>
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        {exp.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="col-span-6-right">
              <AnimatedSection direction="right">
                <h3 style={{ marginBottom: 'var(--space-8)' }}>Education</h3>
              </AnimatedSection>

              <div className="timeline">
                {education.map((edu, index) => (
                  <AnimatedSection key={edu.id} delay={0.2 * index} direction="right">
                    <div className="timeline-item" style={{ marginBottom: 'var(--space-8)' }}>
                      <div style={{ marginBottom: 'var(--space-2)' }}>
                        <h4 style={{ marginBottom: 'var(--space-1)', fontSize: 'var(--font-size-lg)' }}>
                          {edu.degree}
                        </h4>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: 'var(--space-2)',
                          marginBottom: 'var(--space-2)'
                        }}>
                          <span style={{ fontWeight: '500', color: 'var(--color-primary-500)' }}>
                            {edu.institution}
                          </span>
                          <span style={{ color: 'var(--color-text-secondary)' }}>
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        {edu.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;