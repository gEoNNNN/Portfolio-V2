import ProjectDisplay from '../../components/projectdisplay';
import nexaWorksImg from '../../assets/nexa.jpg'; // You'll need to add this image
import '../projects/NexaWorks.scss';

function NexaWorks() {
  return (
    <>
      <ProjectDisplay
        name="NexaWorks"
        description="NexaWorks is a modern web landing page for a digital agency, built with Vite, vanilla JavaScript, and Three.js. It features a custom animated background, a responsive design, animated UI elements, and a contact modal with email sending via EmailJS. The platform showcases interactive 3D animations with starfield and torus effects, smooth UI transitions, and professional client interaction capabilities through integrated email services."
        duration="May 2025-May 2025"
        technologies={['Vite', 'JavaScript', 'Three.js', 'CSS', 'EmailJS', 'React']}
        image={nexaWorksImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Project <span className="highlight">Features</span>
        </h1>
        
        <div className="project-features">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Animated 3D UI</h3>
            <p>Uses Three.js for interactive and visually appealing starfield and torus animations that create an immersive user experience.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Optimized for both desktop and mobile devices with fluid layouts and adaptive components.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📧</div>
            <h3>Contact Modal</h3>
            <p>Users can send messages directly via EmailJS integration with real-time email delivery.</p>
          </div>
        </div>

        <h1 className="media-title">
          Links:
        </h1>
        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/digital-grow-project"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://nexaworksproject.netlify.app/"
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

export default NexaWorks;