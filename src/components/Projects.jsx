// src/components/Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import img1 from '../assets/test.png';

const projects = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/1'
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/2'
  },
  {
    id: '3',
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 7. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/3'
  },
  
  {
    id: '4',
    title: 'Proyecto 4',
    description: 'Descripción breve del proyecto 4. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/4'
  },
  {
    id: '5',
    title: 'Proyecto 5',
    description: 'Descripción breve del proyecto 5. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/5'
  },
  {
    id: '6',
    title: 'Proyecto 6',
    description: 'Descripción breve del proyecto 6. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/6'
  },
  {
    id: '7',
    title: 'Proyecto 7',
    description: 'Descripción breve del proyecto 7. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/7'
  },
  {
    id: '8',
    title: 'Proyecto 8',
    description: 'Descripción breve del proyecto 8. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/8'
  },
  {
    id: '9',
    title: 'Proyecto 9',
    description: 'Descripción breve del proyecto 9. Explica qué es, qué tecnologías se utilizaron, y qué lograste.',
    imageUrl: img1,
    link: '/project/9'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1 className="project-section">
          My Recent <strong className="purple">Works </strong>
        </h1>
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
