import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage from '../assets/ServiceImage.jpg';

const Services = () => {
    return (
    <div className='services-page'>
      <nav className="navbar">
              <div className="logo">
                <img 
                  src={logo}
                  alt="Ringa Film Productions Logo" 
                  style={{ 
                    height: "60px",
                    width: "auto" 
                  }} 
                /> 
              </div>
              
              <div className="nav-links">
                <a href="#">HOME</a>
                <a href="#">SERVICES</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">STUDIOS</a>
                <a href="#">CONTACT</a>
              </div>  
    </nav>

    <div className='service-page'>
    <h1>Ringa Films video production</h1>
    <div className='media-grid'>
    <img 
     src={ServiceImage}
     alt='video production Team'
     className='service-main-image'
     />
     

     <div className="video-list">
            <h2>Our Portfolio</h2>
            <div className="video-thumbnail">
              <img src={require('../assets/thumbnail1.jpg')} alt="Project 1" />
              <h3>Corporate Videos</h3>
            </div>
            <div className="video-thumbnail">
              <img src="/images/thumbnail2.jpg" alt="Project 2" />
              <h3>Event Coverage</h3>
            </div>
          </div>
        </div>
        
       {/*
        <Link to="/" className="home-button">
          ← Back to Home
        </Link>
        */}
      </div>
    </div>
  );
};

export default Services;