import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faTiktok, 
  faYoutube, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Ensure this file exists and has styles

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Ringa Films</h4>
          <p>47 Selbourne Road, Johannesburg, South Africa</p>
          <p>ringafilms@gmail.com</p>
          <p>081 492 8010</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Film Production</li>
            <li>Commercials</li>
            <li>Documentaries</li>
            <li>Photography</li>
          </ul>
        </div>
        

       
        <div className="social-links">
          <a
            href="https://www.instagram.com/ringafilms?igsh=NHNrY2xuMDN6bzR0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.tiktok.com/ZMS6mFxQT/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://www.youtube.com/@simonmaringa5302"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.facebook.com/ringafilms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
