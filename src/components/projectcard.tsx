import './projectcard.scss';
import type { IconType } from 'react-icons';

interface ProjectCardProps {
  icon: IconType;
  title: string;
  description: string;
  onOpen: () => void;
}

function ProjectCard({ icon: Icon, title, description, onOpen }: ProjectCardProps) {
  return (
    <div
      className='card project-card reveal'
      tabIndex={0}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onOpen();
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onOpen();
        }
      }}
    >
      <div className='card-icon'>
        <Icon />
      </div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default ProjectCard;
