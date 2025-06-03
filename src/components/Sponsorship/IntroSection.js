import React, { useState, useEffect } from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [
    '/photos/industry_partners/diamond1.jpg',
    '/photos/industry_partners/trackunit.jpg',
    '/photos/industry_partners/armatec.jpg',
    '/photos/industry_partners/amphenol.jpg',
  ];

  // Auto-rotate photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro-section section">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h1>Support Student Learning</h1>
            <h2>Help Us Learn, Build, and Compete</h2>
            <p className="intro-description">
              Your sponsorship helps 80+ passionate engineering students buy materials, 
              access better tools, and focus on learning instead of fundraising. 
              Support hands-on engineering education that builds tomorrow's engineers.
            </p>
            <div className="intro-actions">
              <button className="cta-primary" onClick={scrollToContact}>
                Become a Sponsor
              </button>
              <div className="intro-stats-inline">
                <div className="stat-inline">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-inline">
                  <span className="stat-number">80+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-inline">
                  <div className="stat-with-tooltip">
                    <span className="stat-number">100%</span>
                    <div className="info-icon">i</div>
                    <div className="tooltip">
                      Western has no aerospace program - we learn everything through 
                      hands-on experience and industry mentorship.
                    </div>
                  </div>
                  <span className="stat-label">Self Taught</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="photo-rotator">
              <img 
                src={photos[currentPhotoIndex]} 
                alt="Western Aero Design team"
                className="rotating-photo"
              />
              <div className="photo-indicators">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    className={`photo-indicator ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 