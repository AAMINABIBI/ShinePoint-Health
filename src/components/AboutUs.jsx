import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import AboutUSSection from './AboutUS/AboutUS.jsx'; // A new component for the About Us section
import AboutUS2 from './AboutUS2/AboutUS.jsx';
import StatsSection from './StatsSection/StatsSection.jsx';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs.jsx';
import StartSessions from './StartSessions/StartSessions.jsx';
import './AboutUs.css';

function AboutUS({ standalone = true }) {
  const content = (
    <>
      <AboutUSSection />
      <AboutUS2 standalone={false} />
      <StatsSection />
      <WhyChooseUs />
      <StartSessions />
    </>
  );

  // If used as a standalone page (e.g., /about route), include Header and Footer
  if (standalone) {
    return (
      <div className="App">
        <Header />
        {content}
        <Footer />
      </div>
    );
  }

  // If used as a section within another page, just return the content
  return content;
}

export default AboutUS;