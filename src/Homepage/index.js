import './index.css';
import React, { useState, useRef, useEffect } from 'react';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef();
  const episodesRef = useRef();
  const portfolioRef = useRef();
  const articleRef = useRef();
  const contactRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref, section) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section); 
    }
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: 'home' },
        { ref: episodesRef, id: 'episodes' },
        { ref: portfolioRef, id: 'portfolio' },
        { ref: articleRef, id: 'article' },
        { ref: contactRef, id: 'contact' },
      ];

      sections.forEach(({ ref, id }) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      <div className='whole'>
      <div className="navbar">
        <div className="navbar-logo">
          {/* <img src="#" alt="Logo" id="logo" /> Add logo here if needed */}
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection(homeRef, 'home')}>Home</li>
          <li onClick={() => scrollToSection(episodesRef, 'episodes')}>Episodes</li>
          <li onClick={() => scrollToSection(portfolioRef, 'portfolio')}>Portfolio</li>
          <li onClick={() => scrollToSection(articleRef, 'article')}>Article</li>
          <li onClick={() => scrollToSection(contactRef, 'contact')}>Contact</li>
        </ul>
      </div>

      <div ref={homeRef} className='landing-page'>

        <div className='content'>
          <h2>The Laughter Rescue</h2>
          <p>Dive into the wild world where humor turns struggles into strength! Each episode is packed with hilarious stories and uplifting insights, proving that laughter really is the best medicine. Join us for a fun ride of comedy and inspiration—let’s laugh through life’s twists and turns together!</p>

        </div>

      </div>

      </div>

      <div ref={episodesRef} className='episodes-section'>
        <h1 className={activeSection === 'episodes' ? 'active' : ''}>Episodes</h1>

      </div>

      <div ref={portfolioRef} className='portfolio-section'>
        <h1 className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</h1>
      </div>

      <div ref={articleRef} className='article-section'>
        <h1 className={activeSection === 'article' ? 'active' : ''}>Article</h1>
      </div>

      <div ref={contactRef} className='contact-section'>
        <h1 className={activeSection === 'contact' ? 'active' : ''}>Contact</h1>
      </div>
    </div>
  );
}

export default Homepage;

