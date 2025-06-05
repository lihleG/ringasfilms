import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import Modal from "react-modal"; // Import React Modal
import "./Home.css";
import heroImage from "../assets/hero-image.png";
import studioImage from "../assets/production studio.jpg";
import CalendlyModal from "./CalendlyModal";
import BehindTheScenesGallery from "./BehindTheSceneGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import directorImage1 from '../assets/director 1.jpg'
import directorImage2 from '../assets/director 2.jpg'
import directorImage3 from '../assets/director 3.jpg';


const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    // SweetAlert for confirmation
    Swal.fire({
      title: "Get a Quote",
      text: "We'd love to hear about your project!",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setModalOpen(true); // Open the modal if confirmed
      }
    });
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // SweetAlert2 for form submission feedback
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Simulate an email submission using EmailJS
    setTimeout(() => {
      Swal.fire({
        title: "Request Submitted",
        text: `Thank you, ${name}! We'll get back to you at ${email} shortly.`,
        icon: "success",
        confirmButtonText: "Close",
      });
      closeModal();
    }, 2000); // Simulate a delay for form submission
  };

  const services = [
    { title: "Film Production", icon: "🎬" },
    { title: "Commercial Shoots", icon: "📽️" },
    { title: "Documentaries", icon: "🎥" },
    { title: "Photography", icon: "📸" },
    { title: "Post-Production", icon: "✂️" },
    { title: "Equipment Rental", icon: "📦" },
  ];


  const handleAboutClick = () => {
  navigate("/about"); // Replace "/about" with the correct route for your About page
};

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>RINGAS FILM PRODUCTIONS</h1>
          <h2>SOUTH AFRICAN STUDIOS</h2>
          <p>
            Award-winning production services across Southern Africa.<br />
            Specializing in feature films, commercials, and digital content.
          </p>
          <button className="cta-button" onClick={openModal}>
            GET A QUOTE
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Get a Quote"
      >
        <h2>Request a Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" onClick={closeModal} className="close-button">
            Close
          </button>
        </form>
      </Modal>

      {/* Other sections remain unchanged */}
      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Films produced</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Photos taken</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Where African stories meet world-class Production!</h2>
            <p>
              Ringa Films is a South African production house specializing in premium film and digital
              content. Based in Johannesburg, we bring global production standards to authentic African
              storytelling.
            </p>
            <button className="cta-button" onClick={handleAboutClick}>LEARN MORE</button>
          </div>
          <div className="about-image">
            <img src={studioImage} alt="Production Studio" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Calendly Modal */}
        <div className="calendly-modal-container">
          <CalendlyModal />
        </div>
      </section>

      {/* Lights, Camera, Action Section */}
      <section className="full-width-heading">
        <h1>Lights, Camera, Action</h1>
      </section>

    
    {/* Testimonials Section */}
{/* Testimonials Section */}
<section className="testimonials">
  <div className="container">
    <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
    <p className="section-subtitle">Trusted by industry leaders worldwide</p>
    <div className="testimonial-cards">
      <div className="testimonial-card">
        <div className="quote-icon">“</div>
        <p className="quote">"Ringa Films delivered beyond our expectations. Their attention to detail is unmatched."</p>
        <div className="client-info">
          <img src={directorImage1} alt="Rob Neuhold" className="client-avatar" />
          <div>
            <span className="client-name">Rob Neuhold</span>
            <span className="client-company">Producer at Motion Digital Studio</span>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="quote-icon">“</div>
        <p className="quote">"The team’s creativity elevated our project to award-winning levels. Absolute professionals!"</p>
        <div className="client-info">
          <img src={directorImage2} alt="Alan Farber" className="client-avatar" />
          <div>
            <span className="client-name">Alan Farber</span>
            <span className="client-company">Director at Straight 2DvD</span>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="quote-icon">“</div>
        <p className="quote">"From concept to delivery, Ringa Films was collaborative, innovative, and deadline-driven."</p>
        <div className="client-info">
          <img src={directorImage3} alt="Glany Van Halter" className="client-avatar" />
          <div>
            <span className="client-name">Glany Van Halter</span>
            <span className="client-company">Director at Zizanani</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Behind the Scenes Gallery */}
      <BehindTheScenesGallery />
    </div>
  );
};

export default Home;



