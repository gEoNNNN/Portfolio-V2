import ProjectDisplay from '../../components/projectdisplay';
import '../projects/DigitalGrowSolutions.scss';
import challangeImg from '../../assets/challange.jpg';

function ChallangeStore() {
  return (
    <>
      <ProjectDisplay
        name="Challange Store"
        description="Challange Store is a modern e-commerce platform designed and developed from the ground up, covering both the UI/UX design and the full-stack implementation of the online shopping experience. It features a product catalog with advanced filtering, sorting, favorites, cart management, checkout, reviews, and multilingual support for Romanian, English, and Russian. The platform is integrated with the company's ERP system for automatic product synchronization, stock updates, and order processing, with custom API endpoints for products, orders, images, and data synchronization. Optimized for production deployment and real-world customer usage."
        duration="Jun 2026 - Present"
        technologies={['Next.js', 'React', 'TypeScript', 'Node.js', 'REST APIs', 'Framer Motion', 'CSS Modules']}
        image={challangeImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
         Links:
        </h1>

        <div className="project-links">
          <a
            href="https://challange-store-site.vercel.app/"
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

export default ChallangeStore;
