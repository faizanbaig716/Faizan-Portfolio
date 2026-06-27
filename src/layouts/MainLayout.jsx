import { useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from '../components/CustomCursor';
import useReveal from '../hooks/useReveal';

const Loader = ({ onDone }) => {
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.floor(Math.random() * 12) + 6;
        if (next >= 100) {
          clearInterval(id);
          if (!doneRef.current) {
            doneRef.current = true;
            setTimeout(onDone, 400);
          }
          return 100;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pct = Math.min(progress, 100);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0A0F1E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      <div style={{ fontSize: '3rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {pct}%
      </div>
      <div style={{ width: 240, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#00D4FF,#00FF88)', borderRadius: 4, transition: 'width 0.15s ease' }} />
      </div>
      <div style={{ color: '#94A3B8', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
        Loading System
      </div>
    </div>
  );
};

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useReveal();

  const handleDone = () => {
    setLoading(false);
    setTimeout(() => setVisible(true), 50);
  };

  return (
    <>
      {loading && <Loader onDone={handleDone} />}

      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CustomCursor />
        <Navigation />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
