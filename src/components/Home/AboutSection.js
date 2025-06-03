import React, { useState, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosPerView, setPhotosPerView] = useState(4);
  
  const photos = [
    '/photos/filler/candid1.jpg',
    '/photos/filler/inthesky.jpg',
    '/photos/filler/candid2.jpg',
    '/photos/team_photos/2024-2025.jpg',
    '/photos/filler/team_canada_planes.jpg',
    '/photos/filler/drop.png',
    '/photos/captain_dave/2016.jpg',
    '/photos/filler/channey_will_plane.jpg',
    '/photos/filler/pada_throw.jpeg',
    '/photos/filler/capstone1.png',
  ];

  // Update photos per view based on screen size
  useEffect(() => {
    const updatePhotosPerView = () => {
      if (window.innerWidth <= 480) {
        setPhotosPerView(1);
      } else if (window.innerWidth <= 768) {
        setPhotosPerView(2);
      } else if (window.innerWidth <= 1024) {
        setPhotosPerView(3);
      } else {
        setPhotosPerView(4);
      }
    };

    updatePhotosPerView();
    window.addEventListener('resize', updatePhotosPerView);
    return () => window.removeEventListener('resize', updatePhotosPerView);
  }, []);

  // Reset currentIndex when photosPerView changes to avoid out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [photosPerView]);

  const maxIndex = Math.max(0, photos.length - photosPerView);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextPhotos = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevPhotos = () => {
    setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1);
  };

  const slideWidth = 100 / photosPerView;

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Western Aero Design</h2>
            <p>
              We are Western Aero Design, the aerospace engineering team at Western University. 
              For over 25 years, we have been designing, building, and flying aircraft 
              to develop real engineering skills through hands-on application.
            </p>
            <p>
              We compete annually in the SAE Aero Design competition, where we apply 
              fundamental engineering principles to solve complex design challenges against 
              teams from universities worldwide.
            </p>
            <p>
              As Western University's aircraft design team, we provide students with 
              practical engineering experience that can't be found in the classroom. 
              We build high-lift RC planes, drones, and VTOL UAVs to learn 
              the fundamentals of aircraft design, manufacturing, and flight testing.
            </p>
          </div>
          
          <div className="what-sets-us-apart">
            <h3>What Sets Us Apart</h3>
            <div className="highlight-box">
              <p>
                <strong>Self-Taught:</strong> We are one of the few teams competing 
                without an aerospace program, making us completely self-taught and driven by 
                pure passion for aviation and engineering.
              </p>
            </div>
          </div>
        </div>
        
        <div className="photo-carousel">
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevPhotos}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="carousel-viewport">
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * slideWidth}%)`,
                }}
              >
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="carousel-slide"
                    style={{ flex: `0 0 ${slideWidth}%` }}
                  >
                    <img 
                      src={photo} 
                      alt={`Team ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-btn next" onClick={nextPhotos}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 