import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo, projects } from '../assets/placeholder';

const Home = () => {
  // Only display featured projects on the home page
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Text Content */}
            <div className="hero-text">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: 'var(--color-primary-500)',
                  fontWeight: '500',
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--space-3)'
                }}
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.1',
                  marginBottom: 'var(--space-4)'
                }}
              >
                {personalInfo.name}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '500',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-6)'
                }}
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hero-bio"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hero-actions"
              >
                <Link
                  to="/projects"
                  className="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  View My Work <FiArrowRight />
                </Link>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  Resume <FiDownload />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="hero-social"
                style={{ marginTop: 'var(--space-10)' }}
              >
                <SocialLinks />
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="hero-image-wrap"
            >
              <div
                style={{
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden',
                  aspectRatio: '1',
                  boxShadow: '0 20px 40px var(--color-shadow)',
                  border: '4px solid var(--color-bg-primary)'
                }}
              >
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div className="hero-deco-accent" />
              <div className="hero-deco-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
              <h2>Featured Projects</h2>
              <p style={{
                maxWidth: '600px',
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                A selection of my recent work and passion projects
              </p>
            </div>
          </AnimatedSection>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
            gap: 'var(--space-8)'
          }}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'var(--space-16)'
            }}>
              <Link
                to="/projects"
                className="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                View All Projects <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{
              backgroundColor: 'var(--color-primary-500)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(var(--space-10), 5vw, var(--space-16))',
              textAlign: 'center',
              color: 'white'
            }}>
              <h2 style={{ color: 'white' }}>Let's Work Together</h2>
              <p style={{
                maxWidth: '600px',
                margin: '0 auto var(--space-8)',
                opacity: '0.9'
              }}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Link
                to="/contact"
                className="button"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-primary-500)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-3) var(--space-8)'
                }}
              >
                Get in Touch <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Home;