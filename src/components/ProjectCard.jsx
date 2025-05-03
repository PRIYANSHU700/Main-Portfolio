import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: 'easeOut'
      }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: '0 4px 20px var(--color-shadow)',
        transition: 'var(--transition-all)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div className="project-image" style={{ position: 'relative', overflow: 'hidden', paddingTop: '60%' }}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: 'var(--space-3)',
            right: 'var(--space-3)',
            backgroundColor: 'var(--color-accent-500)',
            color: 'var(--color-secondary-900)',
            padding: 'var(--space-1) var(--space-2)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'bold',
            borderRadius: 'var(--radius-sm)',
            textTransform: 'uppercase'
          }}>
            Featured
          </div>
        )}
      </div>

      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
        <h3 style={{ fontSize: 'var(--font-size-xl)', margin: 0 }}>{project.title}</h3>
        
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', flex: 1 }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-2)' }}>
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-xs)',
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-full)',
                fontWeight: '500'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--font-size-sm)',
              padding: 'var(--space-2) var(--space-4)'
            }}
          >
            <FiExternalLink /> Live Demo
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="button secondary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--font-size-sm)',
              padding: 'var(--space-2) var(--space-4)'
            }}
          >
            <FiGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;