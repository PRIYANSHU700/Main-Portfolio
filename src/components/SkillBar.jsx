import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100 * index);
      
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  };
  
  const labelVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <div 
      ref={ref}
      style={{
        marginBottom: 'var(--space-6)'
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-2)'
        }}
      >
        <motion.span
          variants={labelVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            fontWeight: '500'
          }}
        >
          {skill.name}
        </motion.span>
        <motion.span
          variants={labelVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            color: 'var(--color-text-secondary)'
          }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div 
        style={{
          height: '8px',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden'
        }}
      >
        <motion.div
          variants={barVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            height: '100%',
            backgroundColor: 'var(--color-primary-500)',
            borderRadius: 'var(--radius-full)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;