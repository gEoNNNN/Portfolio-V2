import ProjectDisplay from '../../components/projectdisplay';
import digitalGrowImg from '../../assets/digitalgrow.jpg';
import '../projects/DigitalGrowSolutions.scss';

function DigitalGrowSolutions() {
  return (
    <>
      <ProjectDisplay
        name="DigitalGrow Solutions"
        description="DigitalGrow Solutions is a comprehensive IT company website specializing in web development and AI chatbot solutions for businesses. The platform showcases modern web design services, custom website development, and intelligent chatbot integration to help companies enhance their digital presence and customer engagement. Features include service portfolios, case studies, client testimonials, and an interactive chatbot demonstration. The website emphasizes cutting-edge technology solutions tailored to meet diverse business needs in the digital transformation era."
        duration="Aug 2025 - Aug 2025"
        technologies={['React', 'TypeScript', 'CSS', "Vite"]}
        image={digitalGrowImg}
        collaborators={['DigitalGrowSolutions']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
         Links:
        </h1>

        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/digital-grow-"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://digitalgrowsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            <button>
              <span className="project-link-icon">🌐</span> Visit Project
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default DigitalGrowSolutions;