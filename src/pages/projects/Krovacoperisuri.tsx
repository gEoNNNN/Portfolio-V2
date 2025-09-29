import ProjectDisplay from '../../components/projectdisplay';
import krovacoperisurImg from '../../assets/krov.jpg';
import '../projects/Krovacoperisuri.scss';

function Krovacoperisuri() {
  return (
    <>
      <ProjectDisplay
        name="Krovacoperisuri"
        description="Krovacoperisuri is a professional landing page designed for a specialized roofing company that provides high-quality roofing materials and installation services. The website showcases the company's extensive range of roofing solutions, including traditional tiles, modern materials, gutters, and accessories. Features include detailed product catalogs, installation galleries, customer testimonials, and easy contact forms for quotes. The responsive design ensures optimal viewing across all devices while highlighting the company's expertise and reliability in the roofing industry."
        duration="Jun 2025 - Jun 20245"
        technologies={['HTML', 'CSS', 'JavaScript', 'React', "Vite"]}
        image={krovacoperisurImg}
        collaborators={['Krovacoperisuri SRL']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Links:
        </h1>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/Krov-Acoperisuri"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://krovacoperis.md/"
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