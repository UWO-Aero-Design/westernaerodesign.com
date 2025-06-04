import React from 'react';
import VideoSection from '../components/Home/VideoSection';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import SponsorsSection from '../components/Home/SponsorsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <SponsorsSection />
    </div>
  );
};

export default Home; 