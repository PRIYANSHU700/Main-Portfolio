import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages using lazy loading
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const Loading = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <div className="loader"></div>
    <style>
      {`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: var(--color-primary-500);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;