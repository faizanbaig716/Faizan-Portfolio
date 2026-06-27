import { PERSONAL_INFO } from '../constants';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} style={{ padding: '96px 0', background: '#0A0F1E' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      {/* Heading */}
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>{subtitle}</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#F8FAFC', marginBottom: 20 }}>{title}</h2>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, margin: '0 auto' }} />
      </div>
      {children}
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About Me" subtitle="Discover">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'center' }}>
      <div className="reveal-left" style={{ position: 'relative' }}>
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 40, position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: 20 }}>
            Bridging <span className="gradient-text">AI &amp; Development</span>
          </h3>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1rem', marginBottom: 32 }}>{PERSONAL_INFO.about}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28 }}>
            <div>
              <p style={{ color: '#00D4FF', fontWeight: 700, marginBottom: 6 }}>Location</p>
              <p style={{ color: '#F8FAFC' }}>Pakistan / Remote</p>
            </div>
            <div>
              <p style={{ color: '#00D4FF', fontWeight: 700, marginBottom: 6 }}>Email</p>
              <p style={{ color: '#F8FAFC', wordBreak: 'break-all', fontSize: '0.9rem' }}>{PERSONAL_INFO.email}</p>
            </div>
          </div>
        </div>
        <div className="animate-blob" style={{ position: 'absolute', top: -40, left: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(0,212,255,0.15)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
        <div className="animate-blob" style={{ position: 'absolute', bottom: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(0,255,136,0.15)', filter: 'blur(40px)', animationDelay: '2s', zIndex: 0, pointerEvents: 'none' }} />
      </div>

      <div className="reveal-right" style={{ position: 'relative', height: 480, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,212,255,0.2),rgba(0,255,136,0.2))', zIndex: 1, opacity: 0.5 }} />
        <img
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
          alt={PERSONAL_INFO.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  </Section>
);

export default About;
