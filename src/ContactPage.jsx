import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Swal from 'sweetalert2';
import './ContactPage.css';

// Fix Leaflet marker icons
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cellphone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been sent successfully. Thank you for reaching out!',
          confirmButtonColor: '#3085d6',
        });
        setFormData({
          name: '',
          surname: '',
          cellphone: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send your message. Please try again later.',
          confirmButtonColor: '#d33',
        });
      });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cellphone">Cellphone</label>
            <input
              type="tel"
              name="cellphone"
              id="cellphone"
              value={formData.cellphone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="location-section">
          <h2>Our Location</h2>
          <div className="map-wrapper">
            <MapContainer
              center={[-26.02375, 27.978611]}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-26.02375, 27.978611]}>
                <Popup>47 Selbourne Road, Johannesburg</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;