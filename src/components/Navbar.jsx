import { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        zIndex: 'var(--z-header)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: scrolled ? 'var(--color-bg-primary)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px var(--color-shadow)' : 'none',
        transition: 'var(--transition-all)'
      }}
    >
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <NavLink to="/" style={{ color: 'var(--color-text-primary)' }}>
          Portfolio
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" style={{ 
        display: 'flex', 
        gap: 'var(--space-6)',
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path}
            className={({ isActive }) => isActive ? 'active-link' : ''}
            style={({ isActive }) => ({
              color: 'var(--color-text-primary)',
              fontWeight: isActive ? '600' : '400',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: isActive ? '100%' : '0',
                height: '2px',
                bottom: '-4px',
                left: '0',
                backgroundColor: 'var(--color-primary-500)',
                transition: 'var(--transition-all)'
              },
              '&:hover::after': {
                width: '100%'
              }
            })}
          >
            {link.label}
          </NavLink>
        ))}
        
        <button 
          onClick={toggleTheme} 
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            padding: '0.5rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="mobile-nav-toggle" style={{ 
        display: 'none',
        '@media (max-width: 768px)': {
          display: 'block'
        }
      }}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: '4rem',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-bg-primary)',
            padding: 'var(--space-4)',
            boxShadow: '0 4px 10px var(--color-shadow)',
            borderRadius: '0 0 var(--radius-md) var(--radius-md)',
            zIndex: 'var(--z-header)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}
        >
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => isActive ? 'active-link' : ''}
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-primary-500)' : 'var(--color-text-primary)',
                fontWeight: isActive ? '600' : '400',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isActive ? 'var(--color-bg-secondary)' : 'transparent'
              })}
            >
              {link.label}
            </NavLink>
          ))}
          
          <button 
            onClick={toggleTheme} 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-4)',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              justifyContent: 'flex-start'
            }}
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;