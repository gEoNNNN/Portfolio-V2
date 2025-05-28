import ProjectDisplay from '../../components/projectdisplay';
import vintageVaultImg from '../../assets/wine.png';
import vv1 from '../../assets/VVphotos/Screenshot 2025-05-28 135006.png';
import vv2 from '../../assets/VVphotos/Screenshot 2025-05-28 135100.png';
import vv3 from '../../assets/VVphotos/Screenshot 2025-05-28 135121.png';
import vv4 from '../../assets/VVphotos/Screenshot 2025-05-28 135153.png';
import vv5 from '../../assets/VVphotos/Screenshot 2025-05-28 135218.png';
import '../projects/VintageVault.scss';

const vvImages = [vv1, vv2, vv3, vv4, vv5];

function VintageVault() {
  return (
    <>
      <ProjectDisplay
        name="VintageVault"
        description="VintageVault is an elegant and visually captivating website dedicated to showcasing an exclusive club for passionate wine collectors. The platform features a curated gallery of rare wines, member profiles, and a private forum for discussions and events. With a focus on luxury and exclusivity, VintageVault offers a seamless experience for connoisseurs to connect, share, and expand their collections."
        duration="Mar 2025 - May 2025"
        technologies={['HTML', 'SASS', 'UIKIT']}
        image={vintageVaultImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Some <span className="highlight">pictures</span> of the project
        </h1>
        <div className="project-images-gallery">
          {vvImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`VintageVault screenshot ${idx + 1}`}
              className="project-gallery-img"
            />
          ))}
        </div>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/Vintage-Vault"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://super-treacle-7c7a12.netlify.app/"
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

export default VintageVault;