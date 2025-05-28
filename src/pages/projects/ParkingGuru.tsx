import ProjectDisplay from '../../components/projectdisplay';
import parkingGuruImg from '../../assets/parking.png';
import parkingGuruVideo from '../../assets/pk.mp4'; 
import pg1 from '../../assets/pkphotos/photo_2024-10-02_13-08-38.png'; 
import pg2 from '../../assets/pkphotos/photo_2024-10-02_13-08-40.png';
import pg3 from '../../assets/pkphotos/photo_2024-10-02_13-08-42.png';
import pg4 from '../../assets/pkphotos/photo_2024-10-02_13-08-43.png';
import pg5 from '../../assets/pkphotos/photo_2024-10-02_13-08-38.png';

const pgImages = [pg1, pg2, pg3, pg4, pg5];

function ParkingGuru() {
  return (
    <>
      <ProjectDisplay
        name="ParkingGuru"
        description="ParkingGuru is a web application designed to improve urban parking by enabling real-time parking reservations, dynamic pricing, and streamlined enforcement. The platform allows users to easily find, reserve, and pay for parking spots, while also offering features such as active session tracking, automated fee calculation, and user profile management. Law enforcement officers can access a dedicated interface to verify active reservations and ensure compliance. ParkingGuru aims to reduce congestion, save time for drivers, and provide cities with a more efficient and transparent system for managing public parking."
        duration="Sep 2024 - Oct 2024"
        technologies={['React Native', 'TypeScript', 'Expo']}
        image={parkingGuruImg}
        collaborators={['Orange Systems']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
          Some <span className="highlight">pictures</span> of the project
        </h1>
        <div className="project-images-gallery">
          {pgImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`ParkingGuru screenshot ${idx + 1}`}
              className="project-gallery-img"
            />
          ))}
        </div>
        <video className="project-video" controls>
          <source src={parkingGuruVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
      </div>
    </>
  );
}

export default ParkingGuru;