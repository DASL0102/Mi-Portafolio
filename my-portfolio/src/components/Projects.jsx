// src/components/Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import img1 from '../assets/1.png'

const projects = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/1' // Enlace interno para el detalle del proyecto
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: 'https://via.placeholder.com/400',
    link: '/project/2'
  },
  {
    id: '3',
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: 'https://via.placeholder.com/400',
    link: '/project/3'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Mis Proyectos</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="project-link">Ver Proyecto</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
