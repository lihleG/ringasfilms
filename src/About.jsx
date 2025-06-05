import React from 'react';
import './About.css';
import aboutHero from '../assets/about-hero.jpg'; // If About.js is in src/components
import directorImage from '../assets/director.jpg';
import CeoImage from '../assets/CeoImage.jpg';
import HeadWriterImage from '../assets/Head writer.jpg';
import ProductManagerImage from '../assets/Production Manager.jpg';
import FinancialAdvisorImage from '../assets/FinacialAdvisor.jpg';
import ProducerImage from '../assets/producer.jpg';

const About = () => {
    return (
        <div className='about-page'>
            {/* Hero Section */}
            <section
                className='about-hero'
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${aboutHero})`,
                }}
            >
                <div className='about-hero-content'>
                    <h1>About Ringa Films</h1>
                    <p>South Africa's premier film production house since 2000</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className='mission-section'>
                <div className='mission-content'>
                    <div className='mission-text'>
                        <span className='section-tag'>Exceptional directors since 2000</span>
                        <h2>Our Mission & Vision</h2>
                        <div className='mission-statement'>
                            <p>
                                Filmmaking is the process by which a motion picture is produced.
                                Filmmaking involves a number of complex & discrete stages, starting
                                with an initial story, idea or dream.
                            </p>
                            <p>
                                At Ringa Films, we bring global production standards to authentic
                                African storytelling, creating cinematic experiences that resonate
                                worldwide.
                            </p>
                        </div>
                        <button className='cta-button'>LEARN MORE</button>
                    </div>
                    <div className='mission-image'>
                        <img src={directorImage} alt='Our Director' />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className='values-section'>
                <h2>Our Core Values</h2>
                <div className='values-grid'>
                    <div className='value-card'>
                        <div className='value-icon'>🎥</div>
                        <h3>Innovation</h3>
                        <p>Pushing creative boundaries with cutting-edge techniques</p>
                    </div>
                    <div className='value-card'>
                        <div className='value-icon'>🌍</div>
                        <h3>Authenticity</h3>
                        <p>True African stories told with a genuine voice</p>
                    </div>
                    <div className='value-card'>
                        <div className='value-icon'>⭐</div>
                        <h3>Excellence</h3>
                        <p>Award-winning quality in every production</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='team-section'>
                <div className='section-header'>
                    <span className='section-tag'>Meet the visionaries</span>
                    <h2>Our Creative Team</h2>
                </div>

                <div className='team-grid'>
                    <div className='team-card'>
                        <img src={CeoImage} alt='CEO' />
                        <h3>Simon Ringa</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className='team-card'>
                        <img src={HeadWriterImage} alt='Head Writer' />
                        <h3>Carl Roddam</h3>
                        <p>Head Writer</p>
                    </div>
                    <div className='team-card'>
                        <img src={ProducerImage} alt='Producer' />
                        <h3>John Langa</h3>
                        <p>Producer</p>
                    </div>
                    <div className='team-card'>
                        <img src={ProductManagerImage} alt='Production Manager' />
                        <h3>Violet Ndou</h3>
                        <p>Production Manager</p>
                    </div>
                    <div className='team-card'>
                        <img src={FinancialAdvisorImage} alt='Financial Advisor' />
                        <h3>Siphiwe Ndlangamandla</h3>
                        <p>Financial Advisor</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
