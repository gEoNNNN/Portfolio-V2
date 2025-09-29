import ProjectDisplay from '../../components/projectdisplay';
import krovacoperisurImg from '../../assets/krovacoperisuri.svg';
import '../projects/Krovacoperisuri.scss';

function Krovacoperisuri() {
  return (
    <>
      <ProjectDisplay
        name="Krovacoperisuri"
        description="Krovacoperisuri is a professional landing page designed for a specialized roofing company that provides high-quality roofing materials and installation services. The website showcases the company's extensive range of roofing solutions, including traditional tiles, modern materials, gutters, and accessories. Features include detailed product catalogs, installation galleries, customer testimonials, and easy contact forms for quotes. The responsive design ensures optimal viewing across all devices while highlighting the company's expertise and reliability in the roofing industry."
        duration="Apr 2024 - May 2024"
        technologies={['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP']}
        image={krovacoperisurImg}
        collaborators={['Krovacoperisuri SRL']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Key <span className="highlight">services</span> offered
        </h1>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Roof Installation</h3>
            <p>Professional installation of various roofing materials with warranty and quality guarantee.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Roof Repair</h3>
            <p>Expert repair services for damaged roofs, leaks, and structural issues with quick response times.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <h3>Custom Solutions</h3>
            <p>Tailored roofing solutions for residential, commercial, and industrial buildings.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Free Consultation</h3>
            <p>Professional assessment and detailed quotes for all roofing projects and materials needed.</p>
          </div>
        </div>
        <div className="project-highlights">
          <h2>Project Highlights</h2>
          <ul>
            <li>Responsive design optimized for mobile and desktop</li>
            <li>Interactive product catalog with detailed specifications</li>
            <li>Customer testimonials and project galleries</li>
            <li>Contact forms with instant quote requests</li>
            <li>SEO optimized for local search visibility</li>
          </ul>
        </div>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/krovacoperisuri"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://krovacoperisuri-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            <button>
              <span className="project-link-icon">🌐</span> Live Demo
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Krovacoperisuri;