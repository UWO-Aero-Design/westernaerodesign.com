import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tier: 'supersonic',
    message: ''
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const messageOptions = [
    { id: 'general', label: 'General sponsorship inquiry', message: 'Hi! I\'m interested in learning more about sponsorship opportunities with Western Aero Design.' },
    { id: 'custom', label: 'Custom partnership discussion', message: 'I\'d like to discuss a custom partnership opportunity that could benefit both our organizations.' },
    { id: 'equipment', label: 'In-kind donations (equipment/materials)', message: 'Our company may be able to provide equipment or materials for your projects. Let\'s discuss what you need.' },
    { id: 'hiring', label: 'Internship/hiring opportunities', message: 'We\'re interested in connecting with your students for potential internships or full-time positions.' },
    { id: 'tour', label: 'Facility tour or design review', message: 'I\'d love to schedule a tour of your facilities or attend a design review to see your work firsthand.' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionToggle = (option) => {
    const isSelected = selectedOptions.includes(option.id);
    let newSelected;
    
    if (isSelected) {
      newSelected = selectedOptions.filter(id => id !== option.id);
    } else {
      newSelected = [...selectedOptions, option.id];
    }
    
    setSelectedOptions(newSelected);
    
    // Update message based on selected options
    const selectedMessages = messageOptions
      .filter(opt => newSelected.includes(opt.id))
      .map(opt => opt.message);
    
    const combinedMessage = selectedMessages.length > 0 
      ? selectedMessages.join('\n\n') + '\n\nPlease send me your sponsorship package with more details.'
      : '';
    
    setFormData({
      ...formData,
      message: combinedMessage
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        tier: formData.tier,
        message: formData.message,
        to_name: 'Western Aero Design',
      };

      await emailjs.send(
        'service_lg6nvu7',     // Your EmailJS service ID
        'template_sg1tjms',  // Replace with the real Template ID from dashboard
        templateParams,
        'j36J06jbfMKUNlBCM'      // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        tier: 'supersonic',
        message: ''
      });
      setSelectedOptions([]);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Support Our Team</h2>
            <p className="contact-intro">
              Your sponsorship directly funds materials, tools, and competition costs 
              that enable 80+ students to design and build real aircraft.
            </p>
            
            <div className="support-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Student-Led Innovation</h4>
                  <p>Support 80+ students from all engineering disciplines building real aircraft</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>25 Years of Competition</h4>
                  <p>Enable our proven team to continue competing at the highest level</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Advanced Manufacturing</h4>
                  <p>Fund composite layups, CNC machining, and custom electronics production</p>
                </div>
              </div>
            </div>
            
            <div className="impact-statement">
              <p>
                <strong>Your investment builds more than aircraft.</strong> 
                You're creating opportunities for students to solve real engineering problems 
                and develop skills they can't get in any classroom.
              </p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Get Our Sponsorship Package</h3>
                <p>We'll send you our sponsorship package with all the details</p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Thank you! We'll send you our sponsorship package soon.
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
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
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
                  <label htmlFor="tier">Interested Level *</label>
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    required
                  >
                    <option value="subsonic">Subsonic - $500+</option>
                    <option value="supersonic">Supersonic - $1500+</option>
                    <option value="hypersonic">Hypersonic - $4000+</option>
                    <option value="custom">Custom Partnership</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>I'm interested in: (optional)</label>
                <div className="interest-options">
                  {messageOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`interest-option ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
                      onClick={() => handleOptionToggle(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Select options above or tell us about your company and any questions you have..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Get Sponsorship Package'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 