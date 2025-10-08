    // src/components/Projects.jsx

    import { Link } from 'react-router-dom';
    import '../styles/Projects.css';
    import React, { useState } from 'react';

    import RifIAimg from '../assets/RifIA.png';
    import Identidadimg from '../assets/Identidad.png';
    import Vehiculosimg from '../assets/vehiculos.jpg';
    import Medicamentosimg from '../assets/medicamentos.png';
    import ChatBotimg from '../assets/chatBot.png';
    import Climaimg from '../assets/clima.jpg';
    import Rifmovil from '../assets/rifmovil.png';
    import Backendimg from '../assets/backend.png';
    import Uberimg from '../assets/uberClone.jpg';
    import gameIAimg from '../assets/gameIA.png';
    import Foodimg from '../assets/apiFood.png';
    import padelvideo from '../assets/padelvideo.mp4';
    import videoProbador from '../assets/ropa.mp4';
    import videoForo from '../assets/foro.webm';
    import videoPuerta from '../assets/puerta.mp4';
    import VideoFacturas from '../assets/facturas.mp4';
    import VideoConejo from '../assets/conejo.mp4';
    import VideoOjos from '../assets/ojos.mp4';
    import VideoSegmentacion from '../assets/segmentacion.mp4';

    const projects = [
      {
        id: '1',
        title: 'RifIA',
        description:
          'Este proyecto consiste en el desarrollo de una aplicación web utilizando Flask, un microframework de Python, que implementa un modelo de Reconocimiento Óptico de Caracteres (OCR) para extraer información de los Registros de Información Fiscal (RIF). La aplicación tiene como objetivo digitalizar estos documentos y almacenar los datos extraídos en una base de datos PostgreSQL.',
        mediaUrl: RifIAimg,
        type: 'image',
        link: '/project/1',
      },
      {
        id: '2',
        title: 'IDVerify',
        description:
          'Es una aplicación web desarrollada en Flask que combina tecnología de Reconocimiento Óptico de Caracteres (OCR) y reconocimiento facial para verificar y extraer información de documentos de identidad.',
        mediaUrl: Identidadimg,
        type: 'image',
        link: '/project/2',
      },
      {
        id: '3',
        title: 'Ojo De Halcón',
        description:
          'Aplicación diseñada para la detección y conteo de vehículos en tiempo real, utilizando el potente modelo YOLOv8 de Ultralytics.',
        mediaUrl: Vehiculosimg,
        type: 'image',
        link: '/project/3',
      },
      {
        id: '4',
        title: 'MediCheck: Tu Asistente Inteligente de Medicamentos',
        description:
          'Aplicación que utiliza un modelo OCR para identificar nombres de medicamentos a partir de imágenes. Desarrollada con FastAPI y conectada a la API de ChatGPT.',
        mediaUrl: Medicamentosimg,
        type: 'image',
        link: '/project/4',
      },
      {
        id: '5',
        title: 'ChatBot Llama',
        description:
          'Aplicación de chatbot impulsada por el modelo Llama 3, diseñada para ejecutarse localmente como asistente virtual.',
        mediaUrl: ChatBotimg,
        type: 'image',
        link: '/project/5',
      },
      {
        id: '6',
        title: 'ClimaTrack',
        description:
          'Aplicación móvil en Kotlin que actúa como una estación climatológica personal y consulta datos de una API meteorológica.',
        mediaUrl: Climaimg,
        type: 'image',
        link: '/project/6',
      },
      {
        id: '7',
        title: 'RifIA Mobile',
        description:
          'Aplicación móvil desarrollada en Kotlin que permite realizar el proceso de digitalización de RIF desde el dispositivo.',
        mediaUrl: Rifmovil,
        type: 'image',
        link: '/project/7',
      },
      {
        id: '8',
        title: 'Django Forum: Backend',
        description:
          'Backend desarrollado en Django para manejar usuarios y comentarios en un foro, utilizando MongoDB como base de datos.',
        mediaUrl: Backendimg,
        type: 'image',
        link: '/project/8',
      },
      {
        id: '9',
        title: 'Clon de Uber',
        description:
          'Aplicación móvil desarrollada en Kotlin que replica la funcionalidad básica de Uber.',
        mediaUrl: Uberimg,
        type: 'image',
        link: '/project/9',
      },
      {
        id: '10',
        title: 'HandJump',
        description:
          'Juego desarrollado en Python que usa MediaPipe para detectar el movimiento de la mano del jugador.',
        mediaUrl: gameIAimg,
        type: 'image',
        link: '/project/10',
      },
      {
        id: '11',
        title: 'FoodDetect API',
        description:
          'API en FastAPI que utiliza YOLOv8 para detectar y clasificar alimentos en imágenes.',
        mediaUrl: Foodimg,
        type: 'image',
        link: '/project/11',
      },
      {
        id: '12',
        title: 'PadelApp',
        description:
          'Aplicación para gestionar reservas de canchas de pádel, jugadores y torneos. Como una red social para jugadores de pádel.',
        mediaUrl: padelvideo,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '13',
        title: 'VirtualFit – Ecommerce con Prueba de Ropa por IA',
        description:
          'VirtualFit es una aplicación de ecommerce innovadora que permite a los usuarios probarse ropa virtualmente antes de comprarla. El usuario simplemente sube una foto suya, y la aplicación utiliza modelos de generación de imágenes por IA para renderizar cómo se vería con la prenda seleccionada.',
        mediaUrl: videoProbador,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '14',
        title: 'Chatbot para Foro de Electrónica (RAG + n8n)',
        description:
          'Desarrollé un chatbot inteligente diseñado para asistir a los usuarios de un foro de electrónica, brindando respuestas técnicas y educativas basadas en documentación propia del foro. El sistema utiliza una arquitectura RAG (Retrieval-Augmented Generation), que permite al agente consultar información directamente desde archivos PDF especializados en electrónica, garantizando respuestas precisas y contextualizadas.',
        mediaUrl: videoForo,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '15',
        title: 'Aplicación móvil — Control de puerta inteligente',
        description:
          'Aplicación móvil para controlar una puerta inteligente: abre/cierra la cerradura vía HTTP y muestra las cámaras de la entrada, con autenticación y base de datos en Firebase. Diseñada para uso doméstico o de pequeñas oficinas, priorizando una UX cómoda y medidas básicas de seguridad.  ',
        mediaUrl: videoPuerta,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '16',
        title: 'Aplicación móvil para inmobiliaria — Cobro y facturación de lotes',
        description:
          'Desarrollé una aplicación móvil empresarial para una inmobiliaria paraguaya, diseñada para optimizar el proceso de cobro y facturación de lotes en campo. La aplicación permite a los agentes registrar pagos, emitir facturas en tiempo real y conectarse mediante Bluetooth o Wi-Fi a impresoras móviles Zebra, generando comprobantes físicos al instante. Además, incluye modo offline, permitiendo su uso en zonas rurales sin conexión a internet, con sincronización automática cuando se restablece la red.',
        mediaUrl: VideoFacturas,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '17',
        title: 'Juego Interactivo con Control por Gestos',
        description:
          'Desarrollé un juego en Python donde el jugador controla a un conejo saltarín mediante movimientos de la mano detectados por la cámara. Utilizando MediaPipe para el reconocimiento de gestos y OpenCV para la captura de video, el juego traduce la posición y movimiento de la mano en acciones dentro del entorno — por ejemplo, levantar la mano hace que el conejo salte para esquivar obstáculos.',
        mediaUrl: VideoConejo,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '18',
        title: 'Detector de Somnolencia para Conductores (Python + MediaPipe + OpenCV)',
        description:
          'Desarrollé un sistema de detección de somnolencia basado en visión por computadora, que utiliza la cámara del dispositivo para monitorear los ojos del conductor y activar una alarma sonora cuando detecta que los ojos permanecen cerrados durante un tiempo prolongado. El objetivo es prevenir accidentes por fatiga, alertando al conductor de manera temprana cuando comienza a quedarse dormido.',
        mediaUrl: VideoOjos,
        type: 'video',
        link: '/project/12',
      },
      {
        id: '19',
        title: 'Detección y Segmentación de Vías en Carretera (Deep Learning + OpenCV)',
        description:
          'Desarrollé un modelo de segmentación semántica capaz de identificar y resaltar las vías de una carretera en video en tiempo real, usando aprendizaje profundo. El sistema procesa cada cuadro del video, segmenta las líneas de carril y el área transitable, y puede ser integrado como componente base de un asistente de conducción o vehículo autónomo.',
        mediaUrl: VideoSegmentacion,
        type: 'video',
        link: '/project/12',
      },
    ];



const Projects = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (project) => {
    setSelectedMedia(project);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h1 className="project-section">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleMediaClick(project)}
            >
              {project.type === 'video' ? (
                <video
                  className="project-media"
                  src={project.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="project-media"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal ampliado */}
      {selectedMedia && (
        <div className="media-modal" onClick={closeModal}>
          <div
            className="media-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>

            <div className="media-modal-body">
              <div className="media-preview">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.mediaUrl}
                    controls
                    autoPlay
                    className="media-fullscreen"
                  />
                ) : (
                  <img
                    src={selectedMedia.mediaUrl}
                    alt={selectedMedia.title}
                    className="media-fullscreen"
                  />
                )}
              </div>

              <div className="media-info">
                <h2>{selectedMedia.title}</h2>
                <p>{selectedMedia.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;