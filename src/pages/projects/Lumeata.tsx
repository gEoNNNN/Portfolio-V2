import ProjectDisplay from '../../components/projectdisplay';
import lumeataImg from '../../assets/lumeata.svg';
import '../projects/Lumeata.scss';

function Lumeata() {
  return (
    <>
      <ProjectDisplay
        name="Lumeata"
        description="Lumeata is a comprehensive travel website designed to help travelers with unique experiences. The platform offers personalized travel recommendations, tour bookings, and authentic cultural experiences. Users can discover hidden gems, book guided tours with local experts, and access insider tips for memorable trips. The website features interactive maps, user reviews, secure booking systems, and multilingual support to cater to international travelers seeking authentic local adventures."
        duration="Jul 2025 - Jul 2025"
        technologies={['React', 'JavaScript', 'CSS']}
        image={lumeataImg}
        collaborators={['Lumea Ta']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Some <span className="highlight">features</span> of the project
        </h1>
        <div className="project-features">
          <div className="feature-item">
            <h3>🗺️ Interactive Maps</h3>
            <p>Explore destinations with detailed interactive maps showing local attractions, restaurants, and hidden gems.</p>
          </div>
          <div className="feature-item">
            <h3>📅 Easy Booking</h3>
            <p>Simple and secure booking system for tours, activities, and local experiences with instant confirmation.</p>
          </div>
          <div className="feature-item">
            <h3>👥 Local Guides</h3>
            <p>Connect with certified local guides who provide authentic cultural experiences and insider knowledge.</p>
          </div>
          <div className="feature-item">
            <h3>🌍 Multilingual Support</h3>
            <p>Available in multiple languages to serve international travelers from around the world.</p>
          </div>
        </div>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/lumeata"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://lumeata-demo.vercel.app"
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