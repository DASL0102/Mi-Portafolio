import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router basename="/Mi-Portafolio"> {/* Definir basename aquí */}
      <div className="background"></div> {/* Fondo animado */}
      <Header /> {/* Siempre presente */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
        <Route path="/about" element={<AboutMe />} /> {/* Ruta para la página "Sobre mí" */}
        <Route path="/projects" element={<Projects />} /> {/* Ruta para la página de proyectos */}
        <Route path="/project/:id" element={<ProjectDetail />} /> {/* Detalle del proyecto */}
      </Routes>
    </Router>
  );
}

export default App;
