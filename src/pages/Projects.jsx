import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../assets/placeholder';

const Projects = () => {
  // Extract unique tags from all projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (tag) => {
    setActiveFilter(tag);
    
    if (tag === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return (
    <main style={{ paddingTop: 'var(--space-32)' }}>
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h1>My Projects</h1>
              <p style={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                color: 'var(--color-text-secondary)'
              }}>
                A collection of my work and passion projects that showcase my skills and experience
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection delay={0.2}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-12)'
            }}>
              {allTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  onClick={() => handleFilterClick(tag)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: activeFilter === tag ? 'var(--color-primary-500)' : 'var(--color-bg-secondary)',
                    color: activeFilter === tag ? 'white' : 'var(--color-text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '500',
                    transition: 'var(--transition-all)'
                  }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', 
                gap: 'var(--space-8)' 
              }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <AnimatedSection>
              <div style={{ 
                textAlign: 'center', 
                padding: 'var(--space-16) 0',
                color: 'var(--color-text-secondary)'
              }}>
                <h3>No projects found</h3>
                <p>No projects match the selected filter.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;