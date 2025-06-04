import React, { useState, useEffect } from 'react';
import './History.css';

const MediaCarousel = ({ media, year, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'next') return (prev + 1) % media.length;
      return (prev - 1 + media.length) % media.length;
    });
  };

  const renderMedia = (src, index) => {
    const isVideo = /\.(mp4|webm|mov)$/i.test(src);
    
    if (isVideo) {
      return (
        <video
          key={index}
          src={src}
          className="carousel-media"
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    
    return (
      <img
        key={index}
        src={src}
        alt={`${year} - ${title} - Media ${index + 1}`}
        className="carousel-media"
        onError={(e) => e.target.src = '/photos/filler/candid1.jpg'}
      />
    );
  };

  if (media.length === 1) {
    return <div className="media-single">{renderMedia(media[0], 0)}</div>;
  }

  return (
    <div className="media-carousel">
      <div className="carousel-container">
        {renderMedia(media[currentIndex], currentIndex)}
        
        <button className="carousel-nav prev" onClick={() => navigate('prev')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="carousel-nav next" onClick={() => navigate('next')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="carousel-indicators">
          {media.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [yearsActive, setYearsActive] = useState(0);
  const [timelineDirection, setTimelineDirection] = useState('ascending');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const firstCompetitionYear = 2001;
    setYearsActive(currentYear - firstCompetitionYear + 1);
  }, []);

  const timelineEvents = [
    {
      year: 2001,
      title: "Competition Debut",
      description: "SAE Aero Design West",
      highlights: [],
      images: ["/photos/planes/2001.jpg"],
      highlight: true
    },
    {
      year: 2006,
      title: "",
      description: "Aero Design West",
      highlights: [],
      images: ["/photos/team_photos/2006.jpg"]
    },
    {
      year: 2007,
      title: "",
      description: "Aero Design East",
      highlights: [],
      images: ["/photos/planes/2007.jpg"]
    },
    {
      year: 2011,
      title: "Return from Hiatus",
      description: "Aero Design West",
      highlights: [],
      images: ["/photos/team_photos/2010-2011.jpg"],
      highlight: true
    },
    {
      year: 2013,
      title: "Dual Class Debut",
      description: "Aero Design East",
      highlights: [],
      images: ["/photos/planes/2012-2013-Micro.jpg", "/photos/planes/2012-2013-Regular.jpg", "/photos/planes/2012-2013-Regular_2.jpg"]
    },
    {
      year: 2014,
      title: "Dual Class Success",
      description: "Aero Design West",
      highlights: ["Advanced: 2nd Overall", "Micro: 3rd Overall", "Micro: 1st in Payload"],
      images: ["/photos/team_photos/2013-2014.jpg", "/photos/planes/2013-2014-Regular.jpg", "/photos/planes/2013-2014-Micro.jpg"],
      highlight: true
    },
    {
      year: 2015,
      title: "",
      description: "Aero Design East",
      highlights: ["Advanced: 1st in Design Report", "Micro: 2nd in Design Report"],
      images: ["/photos/team_photos/2014-2015_2.jpg", "/photos/team_photos/2014-2015.jpg", "/photos/planes/2014-2015-Micro.jpg", "/photos/planes/2014-2015-Regular.jpg"]
    },
    {
      year: 2016,
      title: "",
      description: "Aero Design East",
      highlights: ["Advanced: 2nd in Design Report", "Micro: 4th in Design Report"],
      images: ["/photos/team_photos/2015-2016.jpg", "/photos/planes/2015-2016.jpg"]
    },
    {
      year: 2017,
      title: "",
      description: "Aero Design West",
      highlights: ["1st in Design Report", "4th Overall"],
      images: ["/photos/planes/2016-2017.jpg", "/photos/team_photos/2016-2017.jpg"]
    },
    {
      year: 2018,
      title: "",
      description: "Aero Design East",
      highlights: [],
      images: ["/photos/team_photos/2017-2018.jpg"]
    },
    {
      year: 2019,
      title: "",
      description: "Aero Design East",
      highlights: ["4th in Mission Performance"],
      images: ["/photos/team_photos/2018-2019.jpg", "/photos/planes/2018-2019_2.jpg",]
    },
    {
      year: 2020,
      title: "",
      description: "Aero Design East",
      highlights: ["6th Overall", "5th in Technical Presentation"],
      images: ["/photos/team_photos/2019-2020.jpg", "/photos/planes/2019-2020.png"]
    },
    {
      year: 2022,
      title: "New Rules",
      description: "Autonomous aircraft delivery - Aero Design East",
      highlights: [],
      images: ["/photos/team_photos/2021-2022.jpg", "/photos/planes/2021-2022.jpg"]
    },
    {
      year: 2023,
      title: "",
      description: "Aero Design East",
      highlights: [],
      images: ["/photos/team_photos/2022-2023.jpg", "/photos/planes/2022-2023.jpg"],
      highlight: true
    },
    {
      year: 2024,
      title: "",
      description: "Aero Design East",
      highlights: ["6th Overall", "4th in Technical Presentation"],
      images: ["/photos/team_photos/2023-2024.jpg", "/photos/planes/2023-2024.jpg"]
    },
    {
      year: 2025,
      title: "VTOL Era",
      description: "Hyrbid package delivery - Aero Design East",
      highlights: ["6th in Mission Performance"],
      images: ["/photos/team_photos/2024-2025.jpg", "/photos/planes/2024-2025.jpg", '/videos/2025-takeoff.mp4'],
      highlight: true
    }
  ];

  const sortedEvents = [...timelineEvents].sort((a, b) => 
    timelineDirection === 'ascending' ? a.year - b.year : b.year - a.year
  );

  return (
    <div className="history-page">
      <div className="container">
        <div className="history-header">
          <h1>Our Story</h1>
          <p className="history-subtitle">
            From our first competition in 2001 to <span className="years-active">{yearsActive} years</span> of 
            students who believe engineering is about more than textbooks. We design, build, and compete with 
            real aircraft in international competitions because we refuse to learn aerospace from theory alone. 
          </p>
          <p className='history-subtitle'>
            This team is a proving ground for students—those who commit, push through challenges, and show the grit it takes to succeed.
          </p>
        </div>

        <div className="timeline-container" data-direction={timelineDirection}>
          <div className="timeline-controls">
            <div className="direction-toggle" data-direction={timelineDirection}>
              <div className="toggle-background"></div>
              <button 
                className={`toggle-option ${timelineDirection === 'ascending' ? 'active' : ''}`}
                onClick={() => setTimelineDirection('ascending')}
              >
                Past to Present
              </button>
              <button 
                className={`toggle-option ${timelineDirection === 'descending' ? 'active' : ''}`}
                onClick={() => setTimelineDirection('descending')}
              >
                Present to Past
              </button>
            </div>
          </div>
          
          <div className="timeline-line"></div>
          
          {sortedEvents.map((event, index) => {
            const hasMedia = event.images?.length > 0;
            const animationDelay = `${0.1 + (index * 0.05)}s`;
            const zIndex = Math.max(1, 10 - index);
            
            return (
              <div 
                key={event.year}
                className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${event.highlight ? 'highlight' : ''} ${!hasMedia ? 'text-only' : ''}`}
                style={{ animationDelay, zIndex }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-year">{event.year}</div>
                </div>
                
                <div className="timeline-content">
                  <div className="content-card">
                    {hasMedia && (
                      <div className="card-media">
                        <MediaCarousel 
                          media={event.images} 
                          year={event.year} 
                          title={event.title}
                        />
                      </div>
                    )}
                    <div className="card-text">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <ul className="event-highlights">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History; 