import React from 'react';
import Header from './Header/Header';
import ImageWithThinText from './Intro/ImageWithThinText';
import imageUrl from './Assets/FirstImg.jpeg';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import CombinedSection from './UnlockMotivationSection/UnlockMotivationSection';
import OurServicesSection from './OurServicesSection/OurServicesSection';
import LevelUpHealth from './LevelUpHealth/LevelUpHealth';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import StartSessions from './StartSessions/StartSessions';
import Footer from './Footer/Footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <ImageWithThinText imageUrl={imageUrl} imageAlt="A woman making a salad." />
      <WhyChooseUs />
      <CombinedSection />
      <OurServicesSection />
      <LevelUpHealth />
      <TestimonialSection />
      <StartSessions />
      <Footer />
    </div>
  );
}

export default Home;