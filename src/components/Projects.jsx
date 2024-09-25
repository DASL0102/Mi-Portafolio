// src/components/Projects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import img1 from '../assets/test.png';
import RifIAimg from '../assets/RifIA.png'
import Identidadimg from '../assets/Identidad.png'
import Vehiculosimg from '../assets/vehiculos.jpg'
import Medicamentosimg from '../assets/medicamentos.png'
import ChatBotimg from '../assets/chatBot.png'
import Climaimg from '../assets/clima.jpg'
import Rifmovil from '../assets/rifmovil.png'
import Backendimg from '../assets/backend.png'
import Uberimg from '../assets/uberClone.jpg'
import gameIAimg from '../assets/gameIA.png'
import Foodimg from '../assets/apiFood.png'

const projects = [
  {
    id: '1',
    title: 'RifIA',
    description: 'Este proyecto consiste en el desarrollo de una aplicación web utilizando Flask, un microframework de Python, que implementa un modelo de Reconocimiento Óptico de Caracteres (OCR) para extraer información de los Registros de Información Fiscal (RIF). La aplicación tiene como objetivo digitalizar estos documentos y almacenar los datos extraídos en una base de datos PostgreSQL.',
    imageUrl: RifIAimg,
    link: '/project/1'
  },
  {
    id: '2',
    title: 'IDVerify',
    description: 'Es una aplicación web desarrollada en Flask que combina tecnología de Reconocimiento Óptico de Caracteres (OCR) y reconocimiento facial para verificar y extraer información de documentos de identidad. Este sistema no solo facilita la validación de la identidad de las personas, sino que también mejora la seguridad y la eficiencia en procesos que requieren autenticación.',
    imageUrl: Identidadimg,
    link: '/project/2'
  },
  {
    id: '3',
    title: 'Ojo De Halcón',
    description: 'Aplicación diseñada para la detección y conteo de vehículos en tiempo real, utilizando el potente modelo YOLOv8 de Ultralytics. Esta herramienta no solo permite identificar diferentes tipos de vehículos en diversas condiciones de tráfico, sino que también proporciona análisis detallados sobre el flujo vehicular, ayudando a optimizar la gestión del tráfico en entornos urbanos y rurales.',
    imageUrl: Vehiculosimg,
    link: '/project/3'
  },
  
  {
    id: '4',
    title: 'MediCheck: Tu Asistente Inteligente de Medicamentos',
    description: 'Aplicación que utiliza un modelo de Reconocimiento Óptico de Caracteres (OCR) para identificar nombres de medicamentos a partir de imágenes. Desarrollada con FastAPI, esta herramienta se conecta a la API de ChatGPT para proporcionar información detallada y relevante sobre cada medicamento detectado, facilitando así el acceso a datos críticos para usuarios y profesionales de la salud.',
    imageUrl: Medicamentosimg,
    link: '/project/4'
  },
  {
    id: '5',
    title: 'ChatBot Llama',
    description: 'Aplicación de chatbot impulsada por el modelo Llama 3, que se ejecuta de manera local y está diseñada para funcionar como un asistente virtual versátil. Este avanzado chatbot aprovecha las capacidades de los modelos de lenguaje de gran tamaño (LLMs) para proporcionar a los usuarios respuestas inteligentes y contextualizadas en una variedad de temas, todo mientras garantiza la privacidad y el rendimiento a través de su implementación local.',
    imageUrl: ChatBotimg,
    link: '/project/5'
  },
  {
    id: '6',
    title: 'ClimaTrack',
    description: 'Es una aplicación móvil desarrollada en Kotlin que actúa como una estación climatológica personal. Esta app consulta la API de una estación meteorológica para obtener datos en tiempo real y generar gráficos visuales que muestran las mediciones del clima, como temperatura, humedad y más. Además, utiliza Firebase para el manejo eficiente de datos, asegurando que la información esté siempre disponible y sincronizada.',
    imageUrl: Climaimg,
    link: '/project/6'
  },
  {
    id: '7',
    title: 'RifIA Mobile',
    description: 'Es una aplicación móvil desarrollada en Kotlin que se conecta al programa RifIA (Registro de Información Fiscal Automatizado) para permitir a los usuarios realizar todo el proceso de digitalización de Registros de Información Fiscal (RIF) desde su dispositivo. ',
    imageUrl: Rifmovil,
    link: '/project/7'
  },
  {
    id: '8',
    title: 'Django Forum: Backend ',
    description: 'Es un robusto backend desarrollado en Django, diseñado para manejar todo el sistema de usuarios y la creación de comentarios dentro de un foro. Utilizando MongoDB como base de datos.',
    imageUrl: Backendimg,
    link: '/project/8'
  },
  {
    id: '9',
    title: 'Clon de Uber',
    description: 'Es una aplicación móvil desarrollada en Kotlin que replica la funcionalidad de Uber.',
    imageUrl: Uberimg,
    link: '/project/9'
  },
  {
    id: '10',
    title: 'HandJump',
    description: 'Juego desarrollado en Python que utiliza la biblioteca MediaPipe para detectar el movimiento de la mano del jugador. A través de gestos simples, los jugadores pueden hacer que un bloque salte y evite obstáculos.',
    imageUrl: gameIAimg,
    link: '/project/10'
  },
  {
    id: '11',
    title: 'FoodDetect API',
    description: 'API desarrollada en FastAPI que utiliza un modelo entrenado de YOLOv8 para detectar y clasificar alimentos en imágenes. Esta aplicación permite a los usuarios enviar imágenes de alimentos y recibir información detallada sobre los mismos.',
    imageUrl: Foodimg,
    link: '/project/11'
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
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
