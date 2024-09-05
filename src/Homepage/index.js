

import './index.css';
import React, { useState, useRef, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const InteractiveBox = () => {
   return (
       <div className='interactiveBox'>
           <p className="box-text">"Videos coming soon! Stay tuned."</p>
       </div>
   );
};

const Podcast = () => {
   return (
       <div className='title'>
           <h1 className="title">Podcast</h1>
           <br />
           <p className="dynamic-text">Get Ready for Excitement!</p>
           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
               {[...Array(3)].map((_, index) => (
                   <InteractiveBox key={index} />
               ))}
           </div>
       </div>
   );
};

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef();
  const podcastRef = useRef();
  const videosRef = useRef();
  const portfolioRef = useRef();
  const teamRef = useRef();

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
        { ref: podcastRef, id: 'podcast' },
        { ref: videosRef, id: 'videos' },
        { ref: teamRef, id: 'team' },
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
            <img src="./images/logo.png" alt="Logo" id="logo" />
          </div>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollToSection(homeRef, 'home')}>Home</li>
            <li onClick={() => scrollToSection(podcastRef, 'podcast')}>Podcast</li>
            <li onClick={() => scrollToSection(videosRef, 'videos')}>Videos</li>
            <li onClick={() => scrollToSection(teamRef, 'team')}>Team</li>
          </ul>
        </div>

        <div ref={homeRef} className='landing-page'>
          <div className='content'>
            <h2>The Laughter Rescue</h2>
            <p>Dive into the wild world where humor turns struggles into strength! Each episode is packed with hilarious stories and uplifting insights, proving that laughter is really the best medicine. Join us for a fun ride of comedy and inspiration—let’s laugh through life’s twists and turns together!</p>
          </div>
        </div>
      </div>

      <div ref={podcastRef} className='podcast-section'>
      </div>

       <div className='title'>
           <h1 className="title">Podcast</h1>
           <br />
           <p className="dynamic-text">Get Ready for Excitement!</p>
           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
               {[...Array(3)].map((_, index) => (
                   <InteractiveBox key={index} />
               ))}
           </div>
       </div>


       <div ref={videosRef} className='videos-section'>
        <h1 className={activeSection === 'videos' ? 'active' : ''}>Videos</h1>
      </div>


      <h1>Blog</h1>
      <div id='blog'>
        <div>
          <h2>A Dive into Born A Crime</h2>
          <p>In the realm  of literature, books often serve as mirrors reflecting society's
         complexities. One such book that has captivated
         readers worldwide is “Born a Crime,” penned by Trevor Noah. This memoir
         offers an intimate glimpse into the life of one of the world's most beloved
         comedians, but beyond the laughter lies a profound exploration of identity,
         resilience, and the enduring power of love. As we navigate through a world
         grappling with social, political, and economic upheavals, “Born a Crime”
         emerges as a beacon of understanding and empathy, illuminating the paths
         less traveled and the stories too often overlooked.</p>
          <button id='view more'>view more</button>
        </div>
        <div>
          <h2>Navigating the Complexities of Identity</h2>
          <p>
      Trevor Noah's journey is not just about his rise to fame; it's a narrative woven
      with threads of racial identity, cultural heritage, and personal struggle. Born
      to a white Swiss father and a black Xhosa mother during South Africa's apartheid
      era, Noah's experiences highlight the intricate dance between identity and societal norms.
      His story serves as a reminder that identity is not a monolith but a tapestry of experiences,
      histories, and cultures that shape who we are. In today's increasingly globalized world, where 
      hybrid identities are becoming the norm, Noah's exploration of his own identity resonates
      deeply, challenging us to reconsider our preconceived notions of race and belonging.
       </p>
          <button id='view more'>view more</button>
        </div>
        <div>
          <h2>Resilience in the Face of Adversity</h2>
          <p>
      “Born a Crime” is not merely a tale of survival; it's a testament to the human spirit's ability
       to thrive amidst adversity. Through Noah's eyes, we witness the strength of the human will as he
       navigates a system designed to break him. His story is a powerful reminder that resilience is not just
       about bouncing back from hardship; it's about finding joy, humor, and purpose within the chaos.
       In a world where many face systemic barriers and discrimination, Noah's journey offers hope and
       inspiration, showing that even in the darkest times, there is room for growth, change, and ultimately, freedom.
       </p>
          <button id='view more'>view more</button>
        </div>
        <div>
          <h2>Love as a Catalyst for Change</h2>
          <p>
      At the heart of “Born a Crime” is the transformative power of love. Noah's relationship with his mother,
      Patricia, stands out as a beacon of hope and strength. Despite the odds stacked against them, they found
      solace and support in each other, embodying the idea that love can transcend boundaries and inspire change.
      In a time when families are being torn apart by policies and ideologies that seek to divide us, Noah's portrayal
      of familial bonds offers a counter-narrative, reminding us of the importance of unity, compassion, and mutual understanding.</p>
          <button id='view more'>view more</button>
        </div>
      </div>

      <div ref={teamRef} className='team-section'>
        <div className="div-container">
          <div className="Uppercards">
            <h1 className='services-heading'>Team</h1>
            <div className='cardsContainer'>
              <div className="cardsText">
                <h1 className="h1Tag">Mercy Chemtai</h1>
                <img src='/images/Mercy.png' alt='Chemtai'/>
                <h2>Software Developer</h2>
                <a href="https://www.canva.com/design/DAGKtHEmj2Y/hYxejRMlaYNjUoFCrV8e6Q/view?utm_content=DA[...]j2Y&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                  Mercy Chemtai's portfolio
                </a>
              </div>
              <div className="cardsText">
                <h1 className="h1Tag">Edna Kesa</h1>
                <img src='/images/Edna .png' alt='Edna'/>
                <h2>Software Developer</h2>
                <a href="https://www.canva.com/design/DAGKtct4ecQ/1ht2rCTGrnDDkSRfmpCB2w/view?utm_content=DA[...]ecQ&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                  Edna Kesa's portfolio
                </a>
              </div>
              <div className="cardsText">
                <h1 className="h1Tag">Zippy Waluse</h1>
                <img src='/images/Zippy.png' alt='Zippy'/>
                <h2>Software Developer</h2>
                <a href="https://www.canva.com/design/DAGKq0DmGl4/eUstjzJ-YKbspYzwsjNPxQ/view?utm_content=DA[...]Gl4&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                  Zippy Waluse's portfolio
                </a>
              </div>
            </div>
          </div>

          <div className="bottomcards">
            <div className='cardsContainer'>
              <div className="cardsText">
                <h1 className="h1Tag">Mumina Abdo</h1>
                <img src='/images/Mumina.png' alt='Mumina'/>
                <h2>Software Developer</h2>
                <a href="https://www.canva.com/design/DAGKtMYsO4Y/bKTjkEzz54vVzj2IA8yyaA/view?utm_content=DA[...]O4Y&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                  Mumina Abdo's portfolio
                </a>
              </div>
              <div className="cardsText">
                <h1 className="h1Tag">Scarlet Alkeyo</h1>
                <img src='/images/Scarlet.png' alt='Scarlet'/>
                <h2>Software Developer</h2>
                <a href="https://www.canva.com/design/DAGKsx6frxQ/xCoZ6ZggWUUKM3Yq-3OmJQ/view?utm_content=DA[...]rxQ&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">
                  Scarlet Alkeyo's portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={videosRef} className='footer-section'>
        <h1 className={activeSection === 'footer' ? 'active' : ''}></h1>
      </div>

      <div className='container'>
      <div className='color'>
  <div>
  <h1 className='follow'>Follow Us On</h1>

   <div className="images">
          <p><FaFacebook size='1.9rem' /></p>
          <p><RiInstagramFill size='1.9rem' /></p>
          <p><FaXTwitter size='1.9rem' /></p>
        
          </div>
       
      </div>
      <div className='subscribe'>
      <h1>Contact us</h1>
    
      </div>
    
      <div className='bottomfooter'>
          <div id="whatsapp">
          <p><FaSquareWhatsapp size='2.5rem' /></p>
          <p>0725680764</p>
          </div>
          <div id="calling">
              <p><IoCall size='2.5rem' /></p>
          <p>+254769071112</p>
          </div>
          <div id="email">
              <p><TfiEmail size='2.5rem' /></p>
          <p>saviors@gmail.com</p>
          </div>
      </div>
      </div>
      </div>

    </div>
  );
}

export default Homepage;