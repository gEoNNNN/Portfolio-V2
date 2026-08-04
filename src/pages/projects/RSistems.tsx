import ProjectDisplay from '../../components/projectdisplay';
import '../projects/DigitalGrowSolutions.scss';
import rsystemsImg from '../../assets/rsystems.jpg';

function RSistems() {
  return (
    <>
      <ProjectDisplay
        name="RSistems"
        description="RSistems is a multilingual server-side rendered web platform built with Next.js and TypeScript. Developed from Figma UI/UX designs, it features full internationalization, structured SEO optimization for strong search visibility, and a responsive modern interface styled with Tailwind CSS. The platform is deployed and maintained on Linux production servers."
        duration="Apr 2026 - Present"
        technologies={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'i18n', 'SEO']}
        collaborators={['RTI Systems']}
        image={rsystemsImg}
      />
      <div className="project-media-section">
        <h1 className="media-title">
         Links:
        </h1>

        <div className="project-links">
          <a
            href="https://rsistems.ro/"
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

export default RSistems;
