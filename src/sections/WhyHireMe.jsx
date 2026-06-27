import { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';

const CountUp = ({ end, decimals = 0 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          setVal(parseFloat((progress * end).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, decimals]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
};

const WhyHireMe = () => (
  <section style={{ padding: '96px 0', background: '#070C18' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ color: '#00D4FF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12 }}>Value Proposition</p>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, marginBottom: 20 }}>Why Hire Me</h2>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s`, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '40px 24px', textAlign: 'center' }}
          >
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 800, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 12 }}>
              <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 2 : 0} />
              {stat.suffix}
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyHireMe;
