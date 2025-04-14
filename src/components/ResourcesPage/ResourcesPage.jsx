import React from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
  return (
    <div className="resources-container">
      <div className="content-wrapper">
      <h1 className="heading">Resources</h1>
        <nav className="breadcrumb">
          <a href="#" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">{">"}</span>
          <span>Resources</span>
        </nav>
      </div>
    </div>
  );
}

export default ResourcesPage;

window.ResourcesPage = ResourcesPage;