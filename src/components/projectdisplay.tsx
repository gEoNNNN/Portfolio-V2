import './projectdisplay.scss';

interface ProjectDisplayProps {
  name: string;
  description: string;
  duration: string;
  technologies: string[];
  image: string;
  collaborators?: string[];
}

function ProjectDisplay({ name, description, duration, technologies, image, collaborators }: ProjectDisplayProps) {
  return (
    <div className="project-page">
      <div className="project-image-section">
        <img src={image} alt={name} className="project-image" />
      </div>
      <div className="project-info-section">
        <h1 className="project-title">{name}</h1>
        <div className="project-meta-row">
          <span className="project-duration">{duration}</span>
          {collaborators && collaborators.length > 0 && (
            <div className="project-collaborators">
              <span className="collab-label">Collaborators:</span>
              {collaborators.map((collab, idx) => (
                <span className="collab-name" key={idx}>{collab}</span>
              ))}
            </div>
          )}
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {technologies.map((tech, idx) => (
            <span className="project-tech" key={idx}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;