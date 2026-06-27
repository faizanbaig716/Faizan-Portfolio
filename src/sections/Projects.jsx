import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => (
  <section id="projects" style={{ padding: '96px 0', background: '#070C18' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Portfolio</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, marginBottom: 20 }}>Featured Projects</h2>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 32 }}>
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              transitionDelay: `${i * 0.1}s`,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{ position: 'absolute', top: 16, right: 16, width: 44, height: 44, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F8FAFC', textDecoration: 'none', transition: 'background 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#00D4FF'; e.currentTarget.style.color = '#0A0F1E'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.style.color = '#F8FAFC'; }}
              >
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Content */}
            <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: '#F8FAFC' }}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{project.title}</a>
              </h3>
              <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '0.9rem', flex: 1, marginBottom: 20 }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={{ padding: '4px 12px', fontSize: '0.75rem', borderRadius: 999, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
