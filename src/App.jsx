import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import bg from './assets/home-bg.jpg'

function App() {
  return (
    <Router basename="/Mi-Portafolio"> {/* Definir basename aquí */}
      <div className="background" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}></div>
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
