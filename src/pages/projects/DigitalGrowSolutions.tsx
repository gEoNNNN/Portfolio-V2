import ProjectDisplay from '../../components/projectdisplay';
import digitalGrowImg from '../../assets/digitalgrow.svg';
import '../projects/DigitalGrowSolutions.scss';

function DigitalGrowSolutions() {
  return (
    <>
      <ProjectDisplay
        name="DigitalGrow Solutions"
        description="DigitalGrow Solutions is a comprehensive IT company website specializing in web development and AI chatbot solutions for businesses. The platform showcases modern web design services, custom website development, and intelligent chatbot integration to help companies enhance their digital presence and customer engagement. Features include service portfolios, case studies, client testimonials, and an interactive chatbot demonstration. The website emphasizes cutting-edge technology solutions tailored to meet diverse business needs in the digital transformation era."
        duration="Jun 2024 - Aug 2024"
        technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Prisma']}
        image={digitalGrowImg}
        collaborators={['DigitalGrow Team']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Our <span className="highlight">services</span> and solutions
        </h1>
        <div className="solutions-grid">
          <div className="solution-item">
            <div className="solution-header">
              <span className="solution-icon">💻</span>
              <h3>Web Development</h3>
            </div>
            <p>Custom websites and web applications built with modern technologies and responsive design.</p>
            <ul>
              <li>Responsive Design</li>
              <li>E-commerce Solutions</li>
              <li>CMS Integration</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div className="solution-item">
            <div className="solution-header">
              <span className="solution-icon">🤖</span>
              <h3>AI Chatbots</h3>
            </div>
            <p>Intelligent chatbot solutions powered by AI to enhance customer support and engagement.</p>
            <ul>
              <li>24/7 Customer Support</li>
              <li>Natural Language Processing</li>
              <li>Multi-platform Integration</li>
              <li>Analytics Dashboard</li>
            </ul>
          </div>
          <div className="solution-item">
            <div className="solution-header">
              <span className="solution-icon">📱</span>
              <h3>Digital Solutions</h3>
            </div>
            <p>Comprehensive digital transformation services to modernize business operations.</p>
            <ul>
              <li>Cloud Migration</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>System Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="company-stats">
          <h2>Company Achievements</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Chatbots Deployed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="project-links">
          <a
            href="https://github.com/gEoNNNN/digitalgrow-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href="https://digitalgrow-solutions.vercel.app"
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

export default DigitalGrowSolutions;