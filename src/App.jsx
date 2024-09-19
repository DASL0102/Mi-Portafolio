import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="background"></div> {/* Fondo animado */}
      <Header />
      <Home/>
      <AboutMe/>
      <Projects/>
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} /> {/* Detalle del proyecto */}
      </Routes>
    </Router>
  );
}
export default App
