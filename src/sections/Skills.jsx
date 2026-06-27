import { CORE_EXPERTISE, PROGRAMMING_LANGUAGES } from '../constants';

const Skills = () => (
  <section id="skills" style={{ padding: '96px 0', background: '#0A0F1E' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Expertise</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, marginBottom: 20 }}>Skills &amp; Technologies</h2>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64 }}>
        {/* Core Expertise */}
        <div className="reveal-left">
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 36, height: 4, background: '#00D4FF', borderRadius: 4 }} />
            Core Expertise
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {CORE_EXPERTISE.map((skill, i) => (
              <span
                key={i}
                style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: '0.875rem', color: '#F8FAFC', cursor: 'default', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; e.currentTarget.style.color = '#00D4FF'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#F8FAFC'; }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming Languages + Orbit */}
        <div className="reveal-right">
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'block', width: 36, height: 4, background: '#00FF88', borderRadius: 4 }} />
            Programming Languages
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
            {PROGRAMMING_LANGUAGES.map((lang, i) => (
              <span
                key={i}
                style={{ padding: '10px 22px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, fontSize: '1rem', fontWeight: 600, color: '#F8FAFC', cursor: 'default', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,136,0.15)'; e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                {lang}
              </span>
            ))}
          </div>

          {/* AI Orbit Visual */}
          <div style={{ position: 'relative', height: 240, borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, transparent 70%)', borderRadius: 20, pointerEvents: 'none' }} />
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(0,212,255,0.25)', zIndex: 10 }}>
              <span className="gradient-text" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.4rem' }}>AI</span>
            </div>
            <div className="orbit-1" style={{ position: 'absolute', width: 150, height: 150, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.25)' }}>
              <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#00D4FF', boxShadow: '0 0 12px #00D4FF', opacity: 0.85 }} />
            </div>
            <div className="orbit-2" style={{ position: 'absolute', width: 210, height: 210, borderRadius: '50%', border: '1px solid rgba(0,255,136,0.2)' }}>
              <div style={{ position: 'absolute', top: '50%', right: -8, transform: 'translateY(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#00FF88', boxShadow: '0 0 12px #00FF88', opacity: 0.85 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
