// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import ImageWithThinText from './components/Intro/ImageWithThinText';
import imageUrl from './components/Assets/FirstImg.jpeg'; // Corrected Path.
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CombinedSection from './components/UnlockMotivationSection/UnlockMotivationSection';
import OurServicesSection from './components/OurServicesSection/OurServicesSection';
import LevelUpHealth from './components/LevelUpHealth/LevelUpHealth';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageWithThinText imageUrl={imageUrl}  imageAlt="A woman making a salad."/>
      <WhyChooseUs />
      <CombinedSection />
      <OurServicesSection />

      <LevelUpHealth />
      <TestimonialSection/>
      <main>
        {/* Your page content goes here */}
      </main>
    </div>
  );
}

export default App;