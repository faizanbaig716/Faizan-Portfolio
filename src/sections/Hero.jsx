import { TypeAnimation } from 'react-type-animation';
import { Download, Layout, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Button from '../components/Button';
import ParticleBackground from '../components/ParticleBackground';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub size={22} />, url: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: <FaLinkedin size={22} />, url: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: <FaEnvelope size={22} />, url: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
    { icon: <FaWhatsapp size={22} />, url: `https://wa.me/${PERSONAL_INFO.whatsapp}`, label: 'WhatsApp' },
  ];

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 80 }}>
      <ParticleBackground />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {/* Status badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, background: 'rgba(255,255,255,0.05)', marginBottom: 28, fontSize: '0.8rem', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF88', display: 'inline-block' }} />
          {PERSONAL_INFO.status}
        </div>

        {/* Name */}
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, color: '#F8FAFC' }}>
          Hi, I'm{' '}
          <span className="gradient-text">
            {PERSONAL_INFO.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </h1>

        {/* Typing animation */}
        <div style={{ fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', color: '#94A3B8', marginBottom: 20, minHeight: 48, fontWeight: 500 }}>
          <TypeAnimation
            sequence={[
              'AI Engineer', 2000,
              'Full Stack Developer', 2000,
              'Automation Specialist', 2000,
              'Machine Learning Engineer', 2000,
              'Agentic AI Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#F8FAFC' }}
          />
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 48 }}>
          <Button isWhatsApp variant="primary">
            <Send size={18} /> Hire Me
          </Button>
          <Button variant="secondary" href="#projects">
            <Layout size={18} /> View Projects
          </Button>
          <Button variant="success" href="/resume.pdf">
            <Download size={18} /> Download Resume
          </Button>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', textDecoration: 'none', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#00D4FF'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.5 }}>
        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F8FAFC' }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #00D4FF, transparent)' }} />
      </div>
    </section>
  );
};

export default Hero;
