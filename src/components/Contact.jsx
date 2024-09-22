import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section py-5">
            <Container>
            <h2 className="text-center mb-4 title">Contact Me</h2>

                {/* Información de contacto con iconos */}
                <div className="contact-info text-center">
                    <div className="contact-item">
                        <FaEnvelope size={24} className="icon" />
                        <p>Email: <a href="mailto:sanchezdanielsd@gmail.com" className="link">sanchezdanielsd@gmail.com</a></p>
                    </div>
                    <div className="contact-item">
                        <FaPhone size={24} className="icon" />
                        <p>Teléfono: <a href="tel:+584247565500" className="link">+584247565500</a></p>
                    </div>
                </div>

                {/* Redes Sociales con iconos */}
                <div className="social-icons text-center mt-5">
                    
                    <a href="https://github.com/DASL0102" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub size={40} />
                    </a>
                    <a href="https://x.com/DASL_02?t=u6A0_xfXgxFvmzzyEDNF9w&s=35" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter size={40} />
                    </a>
                    <a href="https://www.instagram.com/dazai_0201/?igsh=MWRqdHEzajZjbTRpMw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram size={40} />
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
