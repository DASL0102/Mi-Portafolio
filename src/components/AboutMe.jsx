// src/components/AboutMe.jsx

import React from 'react';
import '../styles/AboutMe.css';
import { Container } from 'react-bootstrap';
import myImage from '../assets/me.jpg';
import Techstack from './TechStack';

const AboutMe = () => {
  return (
    <Container fluid className="about-me">
      <div className="about-me-content">
        <div className="card about-me">
          <h2>Know Who I Am</h2>
          <p>Hi Everyone, I am Daniel Sanchez from Merida, Venezuela.</p>
          <p>I am currently employed as a software developer at Vultur. I am also a student of Systems Engineering at the University of the Andes. I have experience in web and backend development using various frameworks with Python and React. Additionally, I have developed mobile applications using Kotlin. My work includes object detection using YOLOv and the creation of various applications leveraging object detection and OCR models.</p>
          <p>Apart from coding, some other activities that I love to do include:</p>
          <ul className="activities-list">
            <li><i className="fas fa-gamepad"></i> Playing video games</li>
            <li><i className="fas fa-music"></i> Listening to music</li>
            <li><i className="fas fa-dumbbell"></i> Exercising</li>
          </ul>
        </div>
        <div className="image-container">
          <img src={myImage} alt="Descripción de la imagen" />
        </div>
      </div>

      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
      </h1>
      <Techstack />

    </Container>
  );
};

export default AboutMe;
