import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '', 
  once = true, 
  style = {},
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });
  
  // Define animation variants based on the direction
  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        }
      }
    };
    
    // Add direction-specific properties
    switch (direction) {
      case 'up':
        baseVariants.hidden.y = 40;
        baseVariants.visible.y = 0;
        break;
      case 'down':
        baseVariants.hidden.y = -40;
        baseVariants.visible.y = 0;
        break;
      case 'left':
        baseVariants.hidden.x = 40;
        baseVariants.visible.x = 0;
        break;
      case 'right':
        baseVariants.hidden.x = -40;
        baseVariants.visible.x = 0;
        break;
      case 'scale':
        baseVariants.hidden.scale = 0.95;
        baseVariants.visible.scale = 1;
        break;
      default:
        break;
    }
    
    return baseVariants;
  };
  
  const variants = getVariants();
  
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;