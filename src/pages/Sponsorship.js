import React from 'react';
import IntroSection from '../components/Sponsorship/IntroSection';
import TiersSection from '../components/Sponsorship/TiersSection';
import HandsOnSection from '../components/Sponsorship/HandsOnSection';
import ContactSection from '../components/Sponsorship/ContactSection';
// import FAQSection from '../components/Sponsorship/FAQSection';
import './Sponsorship.css';

const Sponsorship = () => {
  return (
    <div className="sponsorship-page">
      <IntroSection />
      <TiersSection />
      <HandsOnSection />
      <ContactSection />
      {/* <FAQSection /> */}
    </div>
  );
};

export default Sponsorship; 