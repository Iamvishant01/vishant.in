import React from 'react';

export default function About() {
  return (
    <div className="about-section">
      <div className="image-container">
        <img 
          src="https://images.unsplash.com/photo-1708853163089-1de267014d43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="About Us" 
          className="about-image"
        />
      </div>
      <div className="text-container">
        <p className="about-text">
          My achievement is not what I have,<br />
          My introduction is not what I do,<br />
          It is but who I am.<br />
          A nobody.<br /><br />
          I sing, I laugh, I dance, I clap,<br />
          A speck of dust in the infinite creation,<br />
          A vast ocean in the tiny dew drop,<br />
          A Himalayan stream,<br />
          The still mountain.<br /><br />
          I am That.<br />
          So are you.<br /><br />
          Compassion is my religion and love, my only philosophy.
        </p>
      </div>
    </div>
  );
}
