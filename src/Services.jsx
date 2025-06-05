import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import servicesMainImage from "../assets/services-main.jpg";

const services = [
  { 
    icon: "✏️", 
    title: "Content Production", 
    description: "From concept development to final delivery, we craft compelling narratives that resonate with your audience.", 
    isActive: false 
  },
  { 
    icon: "🎥", 
    title: "Film Production", 
    description: "Full-service production including pre-production planning, filming, and post-production editing.", 
    isActive: false 
  },
  { 
    icon: "🎤", 
    title: "Voice Production", 
    description: "Professional voice-over recording and audio post-production services.", 
    isActive: true 
  },
  { 
    icon: "💻", 
    title: "Creative Direction", 
    description: "Strategic vision and art direction to elevate your project's visual storytelling.", 
    isActive: false 
  },
  { 
    icon: "📊", 
    title: "Post-Production", 
    description: "Professional editing, color grading, VFX, and finishing services to polish your footage to perfection.", 
    isActive: false 
  },
  { 
    icon: "📱", 
    title: "Social Media Content", 
    description: "Platform-optimized video content designed to maximize engagement across all social channels.", 
    isActive: false 
  },
  { 
    icon: "🎧", 
    title: "Sound Design", 
    description: "Immersive audio experiences with custom sound effects, mixing, and spatial audio for film and VR.", 
    isActive: false 
  },
  { 
    icon: "🖥️", 
    title: "Motion Graphics", 
    description: "Dynamic animated visuals and title sequences that bring your brand story to life.", 
    isActive: false 
  }
];

const steps = [
  {
    icon: "🔍",
    title: "Discovery",
    desc: "We analyze your vision, target audience, and objectives.",
    duration: "1-3 days"
  },
  {
    icon: "✍️",
    title: "Scripting",
    desc: "Crafting compelling narratives and storyboards.",
    duration: "3-5 days"
  },
  {
    icon: "🎬", 
    title: "Production",
    desc: "Filming with cinematic equipment and professional crew.",
    duration: "Varies by project"
  },
  {
    icon: "🎚️",
    title: "Post-Production",
    desc: "Editing, color grading, sound design, and final delivery.",
    duration: "7-14 days"
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <div 
        className="services-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${servicesMainImage})`,
        }}
      >
        <div className="services-hero-content">
          <h1>What We Do</h1>
          <p>We provide a range of world-class production services tailored to bring your vision to life.</p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Our Proven Production Process</h2>
        <p className="subtitle">Transparent workflow from concept to delivery</p>
        
        <div className="timeline-container">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="duration-badge">{step.duration}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="connector-line"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-intro">
          <h2>Our Comprehensive Services</h2>
          <p>Each service is customized to meet your specific production needs.</p>
        </div>
        
        <div className="cards-container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isActive={service.isActive}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
