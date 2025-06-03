import React, { useState, useEffect } from 'react';
import './SponsorsSection.css';
import { sponsors } from '../../data/sponsors';

const SponsorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.sponsors-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Group sponsors by tier
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  // Define tier order and styling
  const tierConfig = {
    'Hypersonic': {
      badge: 'Hypersonic Partners',
      className: 'tier-hypersonic',
      ctaText: 'Join Hypersonic Tier'
    },
    'Supersonic': {
      badge: 'Supersonic Supporters',
      className: 'tier-supersonic',
      ctaText: 'Join Supersonic Tier'
    },
    'Subsonic': {
      badge: 'Subsonic Sponsors', 
      className: 'tier-subsonic',
      ctaText: 'Join Subsonic Tier'
    }
  };

  const tierOrder = ['Hypersonic', 'Supersonic', 'Subsonic'];

  return (
    <section className={`sponsors-section section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="sponsors-header">
          <h2>Our Sponsors</h2>
          <p>Supporting hands-on engineering education and the next generation of engineering talent</p>
          <a href="/sponsorship" className="sponsors-header-cta">
            Support Our Team
          </a>
        </div>
        
        <div className="sponsors-content">
          {tierOrder.map((tierName, tierIndex) => {
            const sponsorsInTier = groupedSponsors[tierName];
            if (!sponsorsInTier || sponsorsInTier.length === 0) return null;
            
            const config = tierConfig[tierName];
            
            return (
              <div 
                key={tierName} 
                className={`sponsor-tier ${config.className}`}
                style={{ animationDelay: `${tierIndex * 0.2}s` }}
              >
                <div className="tier-header">
                  <div className="tier-badge">{config.badge}</div>
                  <a href="/sponsorship" className="tier-cta-link">
                    {config.ctaText}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                
                <div className="sponsors-grid">
                  {sponsorsInTier.map((sponsor, index) => (
                    <a
                      key={index}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsor-card"
                      style={{ 
                        animationDelay: `${(tierIndex * 0.2) + (index * 0.1)}s`
                      }}
                    >
                      <div className="sponsor-logo-container">
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="sponsor-logo"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Only Hypersonic tier shows location and description */}
                      {tierName === 'Hypersonic' && (
                        <div className="sponsor-info">
                          <div className="sponsor-location">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                            </svg>
                            {sponsor.location}
                          </div>
                          <div className="sponsor-description">{sponsor.description}</div>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 