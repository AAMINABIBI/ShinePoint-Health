import React from 'react';
import './FindUsNow.css';
import image1 from '../Assets/Lady.jpeg';
import image2 from '../Assets/Service1.jpeg';
import image3 from '../Assets/Service3.jpeg';

function FindUsNow() {
  const cards = [
    {
      backgroundImage: image1,
      icon: '↓',
      iconClass: 'icon-download',
      title: 'Download App',
      subtitle: 'Lorem ipsum',
    },
    {
      backgroundImage: image2,
      icon: '📱',
      iconClass: 'icon-mobile',
      title: 'Follow Us',
      subtitle: 'Lorem ipsum',
    },
    {
      backgroundImage: image3,
      icon: '💬',
      iconClass: 'icon-email',
      title: 'Email',
      subtitle: 'support@shinepointhealth.com',
    },
  ];

  return (
    <section className="find-us-now-container">
      <div className="find-us-now-content">
        <h1 className="find-us-now-heading">Find Us Now</h1>
        <h2 className="find-us-now-subheading">Ready for Change</h2>
        <div className="find-us-now-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="find-us-now-card"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="card-overlay">
                <div className="card-icon">
                  <span className={card.iconClass}>{card.icon}</span>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindUsNow;