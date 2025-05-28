import ProjectDisplay from '../../components/projectdisplay';
import coffeeBoxImg from '../../assets/cofe.png';
import cb1 from '../../assets/Screenshot 2025-05-28 142826.png';
import cb2 from '../../assets/Screenshot 2025-05-28 143156.png';
import '../projects/VintageVault.scss';

const cbImages = [cb1, cb2];

function COFFEEBOX() {
  return (
    <>
      <ProjectDisplay
        name="COFFEE BOX"
        description="COFFEE BOX is a simple, welcoming website for a local coffee shop, featuring the menu, hours, and location. The site is designed to be inviting and easy to navigate, helping customers quickly find what they need and encouraging them to visit the shop."
        duration="Feb 2024 - Mar 2024"
        technologies={['HTML', 'CSS']}
        image={coffeeBoxImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Some <span className="highlight">pictures</span> of the project
        </h1>
        <div className="project-images-gallery">
          {cbImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`COFFEE BOX screenshot ${idx + 1}`}
              className="project-gallery-img"
            />
          ))}
        </div>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/COFFEE-BOX"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://hilarious-conkies-b8852e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
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

export default COFFEEBOX;