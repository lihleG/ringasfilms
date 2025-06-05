import React, { useState } from "react"; // Add useState import
import './AboutPage.css';
import Aboutus from '../assets/aboutus.jpg';
import ContactForm from './ContactForm'; // Make sure to import ContactForm

const AboutPage = () => {
    // Add state management for the contact form
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <div className='about-page'>
            {/* Hero Section */}
            <section className='about-hero'>
                <div className='about-hero-content'>
                    <h1>Where Vision meets African Authenticity</h1>
                    <p className='tagline'>Bridging continents through compelling visual narratives</p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className='about-content'>
                <div className='about-text'>
                    <h2>Our Story</h2>
                    <p>Founded in 2010 in Johannesburg, Ringa Films began as a passionate collective determined to elevate African stories to global standards.Today we're one of the Southern Africa's most respected production houses, serving clients worldwide.</p>

                    <h2>Our Philosophy</h2>
                    <p>We believe African stories deserve world-class execution. Our approach combines deep local knowledge with international production values, creating content that resonates globally while staying true to its roots</p>

                    <div className='signature'>
                        <p><strong>Simon</strong></p>
                        <p>Founder & Creative Director</p>
                    </div>
                </div>

                <div className='about-image'>
                    <img src={Aboutus} alt="About Ringa Films" />
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="capabilities">
                <h2>Our Capabilities</h2>
                <div className="capabilities-grid">
                    {[
                        {
                            title: "Film Production",
                            description: "Feature films, short films, and series with full production services"
                        },
                        {
                            title: "Commercial Work",
                            description: "High-end commercials for local and international brands"
                        },
                        {
                            title: "Documentaries",
                            description: "Authentic storytelling with cinematic quality"
                        },
                        {
                            title: "Photography",
                            description: "Studio and location photography for campaigns and editorial"
                        },
                        {
                            title: "Voice Production",
                            description: "High-end film production for global brands and African storytellers."
                        },
                        {
                            title: "Content Production",
                            description: "Studio-quality content production, scaled for your needs."
                        }
                    ].map((item, index) => (
                        <div key={index} className="capability-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Updated */}
            <section className="cta-section">
                <h2>Ready to create something extraordinary?</h2>
                <button 
                    className="cta-button" 
                    onClick={() => setShowContactForm(true)}
                >
                    GET IN TOUCH
                </button>
            </section>

            {/* Contact Form Modal */}
            {showContactForm && (
                <ContactForm onClose={() => setShowContactForm(false)} />
            )}
        </div>
    );
};

export default AboutPage;