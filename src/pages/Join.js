import React, { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const DisciplineCard = ({ discipline, isExpanded, onToggle }) => {
  const {
    title,
    subtitle,
    description,
    responsibilities,
    media,
    skills,
    highlights
  } = discipline;

  // Function to determine if media item is a video
  const isVideo = (src) => {
    return src.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);
  };

  return (
    <div className={`discipline-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="discipline-header" onClick={onToggle}>
        <div className="discipline-title-section">
          <h3 className="discipline-title">{title}</h3>
          <p className="discipline-subtitle">{subtitle}</p>
        </div>
        <div className="discipline-toggle">
          <svg 
            className={`toggle-arrow ${isExpanded ? 'rotated' : ''}`}
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="discipline-content">
        {media && media.length > 0 && (
          <div className="discipline-media">
            {media.map((mediaItem, index) => (
              <div key={index} className="discipline-media-container">
                {isVideo(mediaItem.src) ? (
                  <video 
                    src={mediaItem.src}
                    className="discipline-media"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => e.target.src = '/photos/filler/candid1.jpg'}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={mediaItem.src} 
                    alt={mediaItem.alt}
                    className="discipline-media"
                    onError={(e) => e.target.src = '/photos/filler/candid1.jpg'}
                  />
                )}
                <div className="media-caption">{mediaItem.caption}</div>
              </div>
            ))}
          </div>
        )}

        <div className="discipline-details">
          <div className="discipline-description">
            <p>{description}</p>
          </div>

          <div className="discipline-section">
            <h4>What You'll Do</h4>
            <ul className="responsibility-list">
              {responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div className="discipline-section">
            <h4>Skills You'll Develop</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {highlights && (
            <div className="discipline-section">
              <h4>Cool Projects</h4>
              <div className="highlights-list">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    year: '',
    program: '',
    discipline: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        program: formData.program,
        year: formData.year,
        discipline: formData.discipline,
        experience: formData.experience || 'No experience provided',
        motivation: formData.motivation,
        to_name: 'Western Aero Design Team',
      };

      await emailjs.send(
        'service_lg6nvu7',
        'template_3qrt6xi',
        templateParams,
        'j36J06jbfMKUNlBCM'
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        year: '',
        program: '',
        discipline: '',
        experience: '',
        motivation: ''
      });
    } catch (error) {
      console.error('Application submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="application-form">
      <h2>Apply to Join Our Team</h2>
      <p className="application-intro">
        Ready to get your hands dirty and learn real engineering?
      </p>

      {submitStatus === 'success' && (
        <div className="success-message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Application submitted successfully! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="error-message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Something went wrong. Please try again or email us directly.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year of Study</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>
              <option value="5+">Year 5+</option>
              <option value="graduate">Graduate Student</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="program">Program</label>
          <input
            type="text"
            id="program"
            name="program"
            placeholder="e.g., Mechatronics Systems Engineering"
            value={formData.program}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discipline">Preferred Discipline</label>
          <select
            id="discipline"
            name="discipline"
            value={formData.discipline}
            onChange={handleChange}
            required
          >
            <option value="">Select Discipline</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="software">Software Engineering</option>
            <option value="operations">Business Operations</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Relevant Experience (optional)</label>
          <textarea
            id="experience"
            name="experience"
            placeholder="Tell us about any relevant projects, coursework, or experience..."
            value={formData.experience}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivation">Why do you want to join?</label>
          <textarea
            id="motivation"
            name="motivation"
            placeholder="What motivates you to be part of Western Aero Design?"
            value={formData.motivation}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="loading-spinner"></div>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </div>
  );
};

const PhotoCarousel = ({ photos, altTextPrefix = "Students working hands-on", maxPhotosPerView = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosPerView, setPhotosPerView] = useState(maxPhotosPerView);
  const [isHovered, setIsHovered] = useState(false);

  // Update photos per view based on screen size
  useEffect(() => {
    const updatePhotosPerView = () => {
      if (window.innerWidth <= 480) {
        setPhotosPerView(1);
      } else if (window.innerWidth <= 768) {
        setPhotosPerView(Math.min(2, maxPhotosPerView));
      } else if (window.innerWidth <= 1024) {
        setPhotosPerView(Math.min(3, maxPhotosPerView));
      } else {
        setPhotosPerView(maxPhotosPerView);
      }
    };

    updatePhotosPerView();
    window.addEventListener('resize', updatePhotosPerView);
    return () => window.removeEventListener('resize', updatePhotosPerView);
  }, [maxPhotosPerView]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [photosPerView]);

  const maxIndex = Math.max(0, photos.length - photosPerView);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          return prev >= maxIndex ? 0 : prev + 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [maxIndex, isHovered]);

  const nextPhotos = () => {
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevPhotos = () => {
    setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1);
  };

  const slideWidth = 100 / photosPerView;

  return (
    <section className="join-photo-carousel">
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
                  alt={`${altTextPrefix} ${index + 1}`}
                  className="carousel-image"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
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
    </section>
  );
};

// Move mediaItems outside the component to avoid recreating on every render
const mediaItems = [
  {
    type: 'image',
    src: '/photos/team_photos/2024-2025.jpg',
    alt: '2024-2025 Team Photo',
    caption: '2024-2025 Team',
    duration: 4000
  },
  {
    type: 'image',
    src: '/photos/filler/inthesky.jpg',
    alt: '2024-2025 Team Photo',
    caption: 'In the sky',
    duration: 4000
  },
  {
    type: 'video',
    src: '/videos/2025-takeoff.mp4',
    alt: 'Aircraft Takeoff',
    caption: 'Competition Takeoff',
    duration: 8000,
    playbackRate: 1.0 // Normal speed
  },
  {
    type: 'video',
    src: '/videos/vtol_edited2.mp4',
    alt: 'VTOL Aircraft Flight',
    caption: 'VTOL Flight',
    duration: 4000,
    playbackRate: 0.8 // 20% faster
  },
];

const HeroMediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const nextVideoRef = useRef(null);

  const nextMedia = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setVideoError(false);
    
    // If next item is a video, start it playing right as transition begins
    const nextItem = mediaItems[nextIndex];
    if (nextItem.type === 'video' && nextVideoRef.current) {
      const video = nextVideoRef.current;
      if (video) {
        video.currentTime = 0.2; // Start video 0.2 seconds in to skip static first frame
        video.playbackRate = nextItem.playbackRate || 1.0; // Set playback speed
        video.play().catch(console.error);
      }
    }
    
    // Start crossfade transition
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % mediaItems.length);
      setIsTransitioning(false);
    }, 800); // 800ms crossfade duration
  }, [isTransitioning, nextIndex]);

  const handleVideoEnded = () => {
    setTimeout(nextMedia, 1000); // Small delay before transitioning
  };

  const handleVideoError = (e) => {
    console.log('Video error:', e);
    setVideoError(true);
    // Auto-advance to next item if video fails
    setTimeout(nextMedia, 2000);
  };

  const handleVideoLoaded = () => {
    setVideoError(false);
  };

  // Set playback rate for current video when it loads
  const handleCurrentVideoLoaded = (video, item) => {
    if (video && item.playbackRate) {
      video.playbackRate = item.playbackRate;
    }
    handleVideoLoaded();
  };

  useEffect(() => {
    const currentItem = mediaItems[currentIndex];
    
    // For images, use the specified duration
    if (currentItem.type === 'image') {
      const timer = setTimeout(nextMedia, currentItem.duration);
      return () => clearTimeout(timer);
    }
    
    // For videos, set a maximum duration fallback in case video doesn't end
    if (currentItem.type === 'video') {
      const maxTimer = setTimeout(() => {
        console.log('Video max duration reached, advancing...');
        nextMedia();
      }, currentItem.duration);
      
      return () => clearTimeout(maxTimer);
    }
  }, [currentIndex, nextMedia]);

  const currentItem = mediaItems[currentIndex];
  const nextItem = mediaItems[nextIndex];

  const renderMedia = (item, index, isNext = false) => (
    <div key={`layer-${index}`} className={`hero-media-layer ${isNext ? 'next-layer' : 'current-layer'} ${isTransitioning ? 'transitioning' : ''}`}>
      {item.type === 'image' ? (
        <img 
          src={item.src}
          alt={item.alt}
          className="hero-media-item hero-image"
          onError={(e) => {
            console.log('Image error:', e);
            e.target.src = '/photos/filler/candid1.jpg';
          }}
        />
      ) : (
        <video 
          ref={isNext ? nextVideoRef : null}
          key={`video-${item.src}`}
          src={item.src}
          className="hero-media-item hero-video"
          autoPlay={!isNext}
          muted
          playsInline
          onEnded={!isNext ? handleVideoEnded : undefined}
          onError={!isNext ? handleVideoError : undefined}
          onLoadedData={!isNext ? (e) => handleCurrentVideoLoaded(e.target, item) : undefined}
          onCanPlay={!isNext ? (e) => handleCurrentVideoLoaded(e.target, item) : undefined}
        >
          Your browser does not support the video tag.
        </video>
      )}
      
      {videoError && item.type === 'video' && !isNext && (
        <div className="video-error-fallback">
          <div className="error-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M23 7l-7 5 7 5V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <p>Video Loading...</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="hero-media-carousel">
      <div className="hero-media-container">
        {renderMedia(currentItem, currentIndex, false)}
        {renderMedia(nextItem, nextIndex, true)}
      </div>
      
      <div className="hero-media-indicators">
        {mediaItems.map((_, index) => (
          <div
            key={index}
            className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

const Join = () => {
  const [expandedDiscipline, setExpandedDiscipline] = useState(null);

  // Add smooth scroll function with offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const disciplines = [
    {
      title: "Mechanical Engineering",
      subtitle: "Design and build the aircraft structure",
      description: "Design and manufacture the complete airframe - wings, fuselage, control surfaces. You'll work with CAD software, run simulations, and get hands-on with composite manufacturing. Create robust structures that can handle real flight conditions.",
      responsibilities: [
        "Design wing and fuselage structures using SolidWorks",
        "Run aerodynamic analysis and structural simulations",
        "Manufacture composite components (carbon fiber, fiberglass)",
        "Build and test prototypes",
        "Analyze failures and implement design improvements"
      ],
      skills: [
        "SolidWorks",
        "Composite Manufacturing", 
        "FEA Analysis",
        "CFD Simulation"
      ],
      highlights: [
        "Hand-layup carbon fiber composites",
        "Resin infusion manufacturing",
        "Custom jigs and fixtures"
      ],
      media: [
        {
          src: "/photos/filler/composite-wing-manufacturing.jpg",
          alt: "Composite wing layup",
          caption: "Carbon fiber wing manufacturing"
        },
        {
          src: "/photos/filler/fea-wing.jpg",
          alt: "FEA structural analysis",
          caption: "Structural analysis simulation"
        },
        {
          src: "/photos/filler/fuselage-truss-structure.jpg",
          alt: "Fuselage structure",
          caption: "Balsa truss fuselage frame"
        }
      ]
    },
    {
      title: "Electrical Engineering", 
      subtitle: "Power and control systems",
      description: "Design the electrical systems that make the plane work. Custom PCBs, sensor integration, power distribution - all the systems that connect software to hardware.",
      responsibilities: [
        "Design custom PCBs for flight controllers",
        "Develop wiring harnesses and electrical systems",
        "Integrate sensors like IMUs and airspeed sensors", 
        "Ensure safe and reliable electrical operation"
      ],
      skills: [
        "PCB Design (Altium/KiCad)",
        "Embedded Systems",
        "Sensor Integration"
      ],
      highlights: [
        "Custom flight controller PCBs",
        "Telemetry radio systems", 
        "Motor control circuits"
      ],
      media: [
        {
          src: "/photos/filler/pcb_solder.jpg",
          alt: "Custom PCB design",
          caption: "Flight controller PCB design"
        },
        {
          src: "/photos/filler/wiring_harness.png",
          alt: "Wire harness manufacturing",
          caption: "Custom wire harness assembly"
        },
      ]
    },
    {
      title: "Software Engineering",
      subtitle: "Flight software and tools",
      description: "Write the code that controls the aircraft and build tools to make the team more efficient. From embedded C++ on microcontrollers to web apps for team management.",
      responsibilities: [
        "Write flight control software in C++",
        "Build web applications for team tools",
        "Develop and maintain testing frameworks for reliable operation"
      ],
      skills: [
        "C/C++ Programming",
        "React/JavaScript", 
        "Python",
        "Git/Version Control"
      ],
      highlights: [
        "Autonomous flight control algorithms",
        "Mission planning software"
      ],
      media: [
        {
          src: "/videos/computer_vision_code.mp4",
          alt: "Computer vision simulation",
          caption: "SITL Flight Simulation"
        },
        {
          src: "/photos/filler/px4_code.png",
          alt: "Flight software development",
          caption: "Embedded flight controller code"
        },
        {
          src: "/photos/filler/react_code.jpg",
          alt: "Web development tools",
          caption: "Custom team management tools"
        }
      ]
    },
    {
      title: "Business Operations",
      subtitle: "Strategy and team operations", 
      description: "Manage the business side that keeps the team running. Secure sponsorships, coordinate events, build industry partnerships, and ensure the team has the resources needed to succeed.",
      responsibilities: [
        "Write sponsorship proposals and manage partnerships",
        "Coordinate social media and outreach events",
        "Organize competitions and team travel",
        "Build relationships with industry partners"
      ],
      skills: [
        "Social Media Marketing",
        "Graphic Design"
      ],
      highlights: [
        "Securing $50K+ in annual sponsorships",
        "Managing team social media presence"
      ]
    }
  ];

  const handleToggle = (index) => {
    setExpandedDiscipline(expandedDiscipline === index ? null : index);
  };

  return (
    <div className="join-page">
      {/* Hero Section */}
      <section className="join-hero">
        <div className="hero-background-elements">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
        
        <div className="container">
          <div className="join-hero-content">
            <div className="hero-badge">
              <span>25+ Years of Building Planes</span>
            </div>
            <h1>Join Western Aero Design</h1>
            <p className="join-hero-subtitle">
              Build actual aircraft. Compete internationally. Learn stuff you can't get in class.
            </p>
            <p className="join-hero-description">
              We're not just another engineering club. We design, build, and fly real aircraft 
              for SAE Aero Design competition. If you want hands-on experience and real engineering 
              challenges, this is it.
            </p>
            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('application')} 
                className="btn btn-primary"
              >
                Apply
              </button>
              <button 
                onClick={() => scrollToSection('disciplines')} 
                className="btn btn-outline"
              >
                See What We Do
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">80+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Disciplines</span>
              </div>
            </div>
          </div>
          
          <div className="join-hero-media">
            <HeroMediaCarousel />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Why Join Section */}
        <section className="why-join-section">
          <h2>Why Join?</h2>
          <div className="why-join-grid">
            <div className="why-join-card">
              <div className="why-join-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Real Aircraft</h3>
              <p>Actually build and fly planes. 10-foot RC aircraft, autonomous drones, VTOL systems. Not just theory.</p>
            </div>
            <div className="why-join-card">
              <div className="why-join-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Internnational Competition</h3>
              <p>Compete against schools like UofT and UBC at SAE Aero Design East.</p>
            </div>
            <div className="why-join-card">
              <div className="why-join-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Learn by Doing</h3>
              <p>Composite manufacturing, PCB design, embedded programming. Skills you actually use in industry.</p>
            </div>
          </div>
        </section>

        {/* Photo Carousel */}
        <PhotoCarousel 
          photos={[
            '/photos/filler/sanding_fiberglass.jpg',
            '/photos/filler/pcb_solder.jpg',
            '/photos/filler/composite-wing-manufacturing.jpg',
            '/photos/filler/spar-ribs-assembly.jpg',
            '/photos/filler/composite-fuselage-dry-layup.jpg',
            '/photos/filler/hotwire_cut.jpeg',
            '/photos/filler/groundstation_pcb.jpg'
          ]} 
          altTextPrefix="Students working hands-on"
        />

        {/* Disciplines Section */}
        <section id="disciplines" className="disciplines-section">
          <h2>Pick Your Focus</h2>
          <p className="disciplines-intro">
            Every aircraft needs different engineering skills. Pick what interests you most, 
            but you'll learn from everyone.
          </p>
          
          <div className="disciplines-container">
            {disciplines.map((discipline, index) => (
              <DisciplineCard
                key={index}
                discipline={discipline}
                isExpanded={expandedDiscipline === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </section>

        {/* Team & Events Photo Carousel */}
        <div className="team-events-text">
          <h2>Make friends. Make memories.</h2>
        </div>
        <PhotoCarousel 
          photos={[
            '/photos/team_social/apple_bees_2025.jpg',
            '/photos/team_social/cooking_airbnb.jpg',
            '/photos/team_social/drone_sleep.jpg',
            '/photos/team_social/alex_and_artemis.jpg',
            '/photos/team_social/in_the_pits3.jpg',
            '/photos/team_social/team_dinner_2023.jpg',
            '/photos/team_social/om_yeah.jpg',
            '/photos/team_social/plane_crash.jpg',
            '/photos/team_social/assemblying_plane.jpg',
            '/photos/team_social/under_the_plane.jpg',
            '/photos/team_social/waiting.jpg',
            '/photos/team_social/pizza_and_testing.jpg',
          ]} 
          altTextPrefix="Team life and events"
          maxPhotosPerView={3}
        />

        {/* Application Section */}
        <section id="application" className="application-section">
          <ApplicationForm />
        </section>
      </div>
    </div>
  );
};

export default Join; 