// src/components/ProjectDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  // Aquí puedes usar el ID para cargar los datos del proyecto desde una API o un archivo estático
  const project = {
    title: `Proyecto ${id}`,
    description: `Detalles extensos del proyecto ${id}. Aquí puedes hablar sobre los desafíos, las tecnologías usadas y los resultados.`,
    imageUrl: '/src/assets/1.png'
  };

  return (
    <section className="project-detail">
      <div className="project-detail-content">
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="project-detail-image" />
        <p>{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
