import React from 'react';
import Header from './Header/Header';
import ResourcesPage from './ResourcesPage/ResourcesPage';
import ResourcesPage2 from './ResourcesPage2/ResourcesPage';
import LevelUpHealth from './LevelUpHealth/LevelUpHealth';
import Footer from './Footer/Footer';

function Services() {
  return (
    <div className="App">
      <Header />
      <ResourcesPage />
      <ResourcesPage2 />
      <LevelUpHealth />
      <Footer />
    </div>
  );
}

export default Services;