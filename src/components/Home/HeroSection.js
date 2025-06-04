import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [achievements, setAchievements] = useState({ years: 0, competitions: 0, podiums: 0 });
  const [currentActionIndex, setCurrentActionIndex] = useState(0);
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const achievementsRef = useRef(null);

  const actions = ["Design", "Build", "Fly", "Test", "Engineer", "Code"];
  const objects = ["Heavy Lift Planes", "Autonomous Drones", "VTOL Aircraft", "Flight Systems", "Composite Wings", "Flight Software"];

  // Simplified counter animation
  const animateCounter = (end, key, duration) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
      
      setAchievements(prev => ({ ...prev, [key]: current }));
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  // Counter intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          
          // Animate counters with staggered delays
          [
            { key: 'years', end: 25, delay: 300, duration: 2000 },
            { key: 'competitions', end: 80, delay: 600, duration: 2200 },
            { key: 'podiums', end: 8, delay: 900, duration: 2400 }
          ].forEach(({ key, end, delay, duration }) => {
            setTimeout(() => animateCounter(end, key, duration), delay);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (achievementsRef.current) observer.observe(achievementsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  // Fixed rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      
      setTimeout(() => {
        setCurrentActionIndex(prev => (prev + 1) % actions.length);
        setCurrentObjectIndex(prev => (prev + 1) % objects.length);
        setTimeout(() => setIsRotating(false), 300);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, [actions.length, objects.length]);

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/flight_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/photos/logo/western_aero_design.png" alt="Western Aero Design" />
          </div>
          
          <p className="hero-slogan">Design. Build. Fly.</p>
          
          <div className="achievement-counters" ref={achievementsRef}>
            <div className="achievement-item">
              <div className="achievement-number">{achievements.years}+</div>
              <div className="achievement-label">Years Active</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">{achievements.competitions}+</div>
              <div className="achievement-label">Team Members</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">{achievements.podiums}</div>
              <div className="achievement-label">Podium Finishes</div>
            </div>
          </div>

          <div className="dynamic-text-container">
            <span className="we-text">We </span>
            <div className="rotating-words">
              <span className={`action-word ${isRotating ? 'rotating-up' : ''}`}>
                {actions[currentActionIndex]}
              </span>
              <span className={`object-word ${isRotating ? 'rotating-down' : ''}`}>
                {objects[currentObjectIndex]}
              </span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">Learn More</a>
            <a href="/join" className="btn btn-outline">Join Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 