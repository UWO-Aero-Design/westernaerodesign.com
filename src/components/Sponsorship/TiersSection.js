import React from 'react';
import './TiersSection.css';

const TiersSection = () => {
  const tiers = [
    {
      name: "Subsonic",
      subtitle: "Materials & Components",
      price: "$500+",
      popular: false,
      className: "subsonic",
      benefits: [
        "Thank you social media post",
        "Logo on website",
      ]
    },
    {
      name: "Supersonic", 
      subtitle: "Tools & Equipment",
      price: "$1500+",
      popular: true,
      className: "supersonic",
      benefits: [
        "Thank you social media post", 
        "Logo on website",
        "Logo on team banner (small)",
        "Logo on t-shirt (small)",
        "Logo on plane (small)"
      ]
    },
    {
      name: "Hypersonic",
      subtitle: "Manufacturing & Testing", 
      price: "$4000+",
      popular: false,
      className: "hypersonic",
      benefits: [
        "Thank you social media post",
        "Logo on website",
        "Logo on team banner (large)",
        "Logo on t-shirt (large)", 
        "Logo on plane (large)"
      ],
      specialNote: "We feature our largest sponsor's logo on the front of team shirts"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tiers" className="tiers-section section">
      <div className="container">
        <div className="tiers-header">
          <h2>Sponsorship Levels</h2>
          <p>Every contribution helps our student team learn and grow</p>
        </div>
        
        <div className="tiers-grid">
          {tiers.map((tier, index) => (
            <div key={index} className={`tier-card ${tier.className} ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">Most Common</div>}
              
              <div className="tier-header">
                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-subtitle">{tier.subtitle}</p>
                <div className="tier-price">{tier.price}</div>
              </div>
              
              <div className="tier-benefits">
                <ul>
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              {tier.specialNote && (
                <div className="tier-special-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {tier.specialNote}
                </div>
              )}
              
              <button className="tier-cta" onClick={scrollToContact}>
                Support Our Team
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiersSection; 