import React, { useState, useEffect } from 'react';
import './HandsOnSection.css';

const HandsOnSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosPerView, setPhotosPerView] = useState(4);
  
  const photos = [
    '/photos/filler/sanding_fiberglass.jpg',
    '/photos/filler/pcb_solder.jpg',
    '/photos/filler/composite-wing-manufacturing.jpg',
    '/photos/filler/spar-ribs-assembly.jpg',
    '/photos/filler/composite-fuselage-dry-layup.jpg',
    '/photos/filler/hotwire_cut.jpeg',
    '/photos/filler/groundstation_pcb.jpg',
    
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

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

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
    <section className="hands-on-section">
      <div className="container">
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
                      alt={`Students working hands-on ${index + 1}`}
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
          
          <div className="carousel-indicators">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandsOnSection; 