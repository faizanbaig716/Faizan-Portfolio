import { SERVICES } from '../constants';

const Services = () => (
  <section id="services" style={{ padding: '96px 0', background: '#0A0F1E' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>What I Do</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, marginBottom: 20 }}>My Services</h2>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              transitionDelay: `${i * 0.08}s`,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: 36,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,212,255,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ marginBottom: 24, padding: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 14, display: 'inline-block', border: '1px solid rgba(255,255,255,0.08)' }}>
              {service.icon}
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: 14, color: '#F8FAFC' }}>{service.title}</h3>
            <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '0.95rem' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
