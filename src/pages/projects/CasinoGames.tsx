import ProjectDisplay from '../../components/projectdisplay';
import casinoImg from '../../assets/casino.png';
import cg1 from '../../assets/casino/Screenshot 2025-05-28 154100.png';
import cg2 from '../../assets/casino/Screenshot 2025-05-28 154128.png';
import cg3 from '../../assets/casino/Screenshot 2025-05-28 154225.png';
import cg4 from '../../assets/casino/Screenshot 2025-05-28 154240.png';
import cg5 from '../../assets/casino/Screenshot 2025-05-28 154311.png';
import cg6 from '../../assets/casino/Screenshot 2025-05-28 154328.png';
import cg7 from '../../assets/casino/Screenshot 2025-05-29 192639.png';
import cg8 from '../../assets/casino/Screenshot 2025-05-29 192719.png';

import '../projects/CasinoGames.scss';

const cgImages = [cg1, cg2, cg3, cg4, cg5, cg6, cg7 , cg8];

function CasinoGames() {
  return (
    <>
      <ProjectDisplay
        name="Casino Games"
        description="Casino Games is a fun and interactive casino simulation website for casual entertainment and gameplay. The platform features a variety of classic casino games, engaging visuals, and a user-friendly interface, providing an enjoyable experience for users looking to try their luck in a safe, virtual environment."
        duration="Apr 2025 - May 2025"
        technologies={['React', 'TypeScript', 'Tailwind CSS']}
        image={casinoImg}
      />
      <div className="casino-media-section">
        <h1 className="media-title">
          Some <span className="highlight">pictures</span> of the project
        </h1>
        <div className="casino-images-gallery">
          {cgImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Casino Games screenshot ${idx + 1}`}
              className="casino-gallery-img"
            />
          ))}
        </div>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/Casino"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://chimerical-tarsier-a5f927.netlify.app/"
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

export default CasinoGames;