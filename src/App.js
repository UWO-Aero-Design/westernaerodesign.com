import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollToTop from './utils/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import Home from './pages/Home';
import Team from './pages/Team';
import History from './pages/History';
import Join from './pages/Join';
import Sponsorship from './pages/Sponsorship';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ScrollProgress />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/history" element={<History />} />
            <Route path="/join" element={<Join />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
