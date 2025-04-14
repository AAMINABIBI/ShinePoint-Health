import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindUsNow from './FindUsNow/FindUsNow';
import AboutUS from './AboutUS/AboutUS';
import ImageWithThinText from './Intro/ImageWithThinText';
import imageUrl from './Assets/FirstImg.jpeg';

function ContactUs() {
  return (
    <div className="App">
      <Header />
      <AboutUS />
      <FindUsNow />
      <ImageWithThinText imageUrl={imageUrl} imageAlt="A woman making a salad." />
      <Footer />
    </div>
  );
}

export default ContactUs;