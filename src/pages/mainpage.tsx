import { useEffect, useRef, type MouseEvent } from 'react';
import '../../src/pages/mainpage.scss';
import ParticleField from './../components/ParticleField';
import CursorGlow from './../components/CursorGlow';
import cvFile from '../../src/assets/MyCV.pdf'; 

function splitLetters(text: string, baseDelay: number) {
  return text.split('').map((ch, i) => (
    <span
      key={i}
      className="letter"
      style={{ animationDelay: `${baseDelay + i * 30}ms` }}
    >
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));
}

function Mainpage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const y = window.scrollY;
        hero.style.transform = `translateY(${y * 0.25}px)`;
        hero.style.opacity = `${Math.max(0, 1 - y / 550)}`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const magnetize = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px) scale(1.05)`;
  };

  const demagnetize = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = '';
  };

  const tiltCard = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * 6}deg) rotateY(${(px - 0.5) * 8}deg) translateY(-4px)`;
  };

  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div className='body'>
      <ParticleField />
      <CursorGlow />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className='hero' ref={heroRef}>
        <div className='text'>
          <h1 className='hi'>Hi <span className='wave'>👋</span></h1>
          <h1 className='iam'>{splitLetters("I'm Eugen,", 150)}</h1>
          <h1 className='developer'>{splitLetters('front-end web developer', 420)}</h1>
        </div>
        <div className='cv'>
          <a href={cvFile} download="My-CV.pdf">
            <button
              ref={btnRef}
              onMouseMove={magnetize}
              onMouseLeave={demagnetize}
            >
              Download my CV
            </button>
          </a>
        </div>
      </div>
      <div className='work-experience' id="work">
        <p className='work-title reveal'>Work <span className="highlight">experience</span></p>
        <ul>
          <li>
            <div className='work-card reveal' onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <span className='work-date'>24/06/2026 - Present</span>
              <h1>Full-Stack Developer</h1>
              <h2>Challange Store · Chisinau, Moldova</h2>
              <p>Designed and developed a modern e-commerce platform from the ground up — UI/UX design, full-stack implementation, multilingual support, and ERP integration for product synchronization, stock updates, and order processing.</p>
            </div>
          </li>
          <li>
            <div className='work-card reveal' onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <span className='work-date'>02/04/2026 - Present</span>
              <h1>Web Developer</h1>
              <h2>RTI Systems · Chisinau, Moldova</h2>
              <p>Develop and maintain multilingual web platforms with Next.js, TypeScript, and Tailwind CSS — from Figma UI/UX design and SEO optimization to production deployment on Linux servers.</p>
            </div>
          </li>
          <li>
            <div className='work-card reveal' onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <span className='work-date'>03/06/2025 - 14/09/2025</span>
              <h1>Web Developer</h1>
              <h2>Digital Grow Solutions · Chisinau, Moldova</h2>
              <p>Built responsive front-end components for modern websites and AI-powered chatbots, collaborating with backend developers, designers, and project managers to deliver production-ready products.</p>
            </div>
          </li>
          <li>
            <div className='work-card reveal' onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <span className='work-date'>03/09/2024 - 03/10/2024</span>
              <h1>Front-End Developer Intern</h1>
              <h2>Orange Systems · ParkingGuru</h2>
              <p>Built the front-end of a real-time urban parking platform with secure authentication and role-based access: parking reservation and tracking components, GraphQL API integration, and UI flows for drivers, administrators, and law enforcement (React, Node.js, PostgreSQL, OAuth2, JWT, Docker).</p>
            </div>
          </li>
          <li>
            <div className='work-card reveal' onMouseMove={tiltCard} onMouseLeave={resetTilt}>
              <span className='work-date'>03/09/2023 - 27/10/2023</span>
              <h1>Front-End Developer Intern</h1>
              <h2>Orange Systems · KitchenGuru</h2>
              <p>Developed main front-end modules of an AI-powered cooking assistant: AI-based recipe generation via the OpenAI API, ingredient-based recipe search and filtering, and a community interface for feedback and ratings (React, Node.js, Express, MongoDB, JWT, Docker).</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mainpage;