import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { personalInfo } from '../assets/placeholder';

const SocialLinks = ({ vertical = false }) => {
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
    gap: vertical ? 'var(--space-4)' : 'var(--space-6)',
    alignItems: 'center'
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: 'var(--color-text-secondary)',
    transition: 'var(--transition-all)',
    '&:hover': {
      color: 'var(--color-primary-500)',
      transform: 'translateY(-2px)'
    }
  };

  return (
    <div style={containerStyle}>
      <motion.a
        href={personalInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={socialVariants}
        whileHover={{ y: -5 }}
        style={iconStyle}
      >
        <FiLinkedin />
      </motion.a>
      
      <motion.a
        href={personalInfo.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={socialVariants}
        whileHover={{ y: -5 }}
        style={iconStyle}
      >
        <FiGithub />
      </motion.a>
      
      <motion.a
        href={personalInfo.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={socialVariants}
        whileHover={{ y: -5 }}
        style={iconStyle}
      >
        <FiInstagram />
      </motion.a>
    </div>
  );
};

export default SocialLinks;