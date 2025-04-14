import React from 'react';
import './ResourcesPage.css';
import imgURL from '../Assets/GirlBoxing.jpeg'; // Use an existing image
import imgURL2 from '../Assets/Lady.jpeg'; // Use an existing image

function ResourcesPage() {
  const cards = [
    { id: 1, image: imgURL, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri', label: '410 ≡ 400' },
    { id: 2, image: imgURL2, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 3, image: imgURL, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 4, image: imgURL2, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 5, image: imgURL, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 6, image: imgURL2, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 7, image: imgURL, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
    { id: 8, image: imgURL2, time: '15:00 PM', title: 'Body Weight Classes', schedule: 'Mon, Sun, Wed, Fri' },
  ];

  return (
    <div className="resources-page">
      {/* Filter Bar */}
      <div className="filter-bar">
        <button className="filter-button active">SHOW ALL</button>
        <button className="filter-button">Weight Loss</button>
        <button className="filter-button">Nutrition</button>
        <button className="filter-button">Movement</button>
      </div>

      {/* Card Grid */}
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            {/* Image */}
            <div className="card-image" style={{ backgroundImage: `url(${card.image})` }}></div>

            {/* Label (only for the first card) */}
            {card.label && <div className="card-label">{card.label}</div>}

            {/* Card Content */}
            <div className="card-content">
              <p className="card-time">{card.time}</p>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-schedule">{card.schedule}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourcesPage;