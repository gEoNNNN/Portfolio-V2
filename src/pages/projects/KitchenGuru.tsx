import ProjectDisplay from '../../components/projectdisplay';
import kitchenGuruImg from '../../assets/cooking.png';
import kitchenGuruVideo from '../../assets/kt.mp4';
import kt1 from '../../assets/ktphotos/IMG_7362.png';
import kt2 from '../../assets/ktphotos/IMG_7408.png';
import kt3 from '../../assets/ktphotos/IMG_7421.png';
import kt4 from '../../assets/ktphotos/IMG_7429.png';
import kt5 from '../../assets/ktphotos/photo_2025-05-27_22-34-07.png';
import reportFile from '../../assets/FAF.BDA21.1_Team18_Final_Report.pdf';
import '../projects/kitchenGuru.scss';

const ktImages = [kt1, kt2, kt3, kt4, kt5];

function KitchenGuru() {
  return (
    <>
      <ProjectDisplay
        name="KitchenGuru"
        description="Kitchen Guru is a web application designed to enhance the home cooking experience by offering personalized recipe suggestions and promoting sustainable cooking habits. Users can input available ingredients to discover relevant recipes or generate new ones using integrated AI. The platform encourages community interaction through recipe reviews, feedback, and user-shared creations. Key features include ingredient-based search, AI-generated recipes, a “Top 100 Recipes” section with customizable filters, user profiles, and cross-device synchronization—all aimed at reducing food waste and making everyday cooking more enjoyable and engaging."
        duration="Sep 2023 - Nov 2024"
        technologies={['React', 'TypeScript', 'Tailwind', 'Vite']}
        image={kitchenGuruImg}
        collaborators={['Orange Systems']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Some <span className="highlight">pictures</span> of the project
        </h1>
        <div className="project-images-gallery">
          {ktImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`KitchenGuru screenshot ${idx + 1}`}
              className="project-gallery-img"
            />
          ))}
        </div>
        <video className="project-video" controls>
          <source src={kitchenGuruVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-links">
          <a
            href="https://github.com/Bostan-Victor/ParkingGuruFront"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <button>
              <span className="github-icon">🐙</span> View on GitHub
            </button>
          </a>
          <a
            href={reportFile}
            download="KitchenGuru_Report.pdf"
            className="download-btn"
            style={{ textDecoration: 'none' }}
          >
            <button>
              <span className="project-link-icon">📄</span> Download Report
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default KitchenGuru;