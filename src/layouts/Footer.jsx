import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: PERSONAL_INFO.github, label: "GitHub" },
    { icon: <FaLinkedin size={20} />, url: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: <FaEnvelope size={20} />, url: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
    { icon: <FaWhatsapp size={20} />, url: `https://wa.me/${PERSONAL_INFO.whatsapp}`, label: "WhatsApp" },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden mt-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-white/10 pb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-success mb-2">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-muted">{PERSONAL_INFO.title}</p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Built with React & Vite</span>
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-colors duration-300 transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
