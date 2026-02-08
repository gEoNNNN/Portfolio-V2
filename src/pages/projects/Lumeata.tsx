import ProjectDisplay from '../../components/projectdisplay';
import lumeataImg from '../../assets/lumea ta.jpg';
import '../projects/Lumeata.scss';

function Lumeata() {
  return (
    <>
      <ProjectDisplay
        name="Lumeata"
        description="Lumeata is a comprehensive travel website designed to help travelers with unique experiences. The platform offers personalized travel recommendations, tour bookings, and authentic cultural experiences. Users can discover hidden gems, book guided tours with local experts, and access insider tips for memorable trips. The website features interactive maps, user reviews, secure booking systems, and multilingual support to cater to international travelers seeking authentic local adventures."
        duration="Jul 2025 - Jul 2025"
        technologies={['React', 'JavaScript', 'CSS', "Vite"]}
        image={lumeataImg}
        collaborators={['Lumea Ta']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Links :
        </h1>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/lumea-mea"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://lumea-mea.vercel.app/maroc"
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

export default Lumeata;
