import ProjectDisplay from '../../components/projectdisplay';
import '../projects/DigitalGrowSolutions.scss';
import rparkingImg from '../../assets/rparking.jpg';

function RParking() {
  return (
    <>
      <ProjectDisplay
        name="R-Parking"
        description="R-Parking is a multilingual parking management web platform built with Next.js and TypeScript. It provides structured, SEO-optimized content in multiple languages through full i18n integration, delivering a fast server-rendered experience for drivers looking for parking information and services. The platform was designed in Figma, optimized for search engines, and deployed to production on Linux servers."
        duration="Apr 2026 - Present"
        technologies={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'i18n', 'SEO']}
        collaborators={['RTI Systems']}
        image={rparkingImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
         Links:
        </h1>

        <div className="project-links">
          <a
            href="https://r-parking.vercel.app/en"
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

export default RParking;
