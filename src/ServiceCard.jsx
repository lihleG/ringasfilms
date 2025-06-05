import React from "react";
import "./App.css"; // Ensure this path is correct

const ServiceCard = ({ icon, title, description, isActive }) => {
  return (
    <div className={`service-card ${isActive ? "active" : ""}`}>
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;




