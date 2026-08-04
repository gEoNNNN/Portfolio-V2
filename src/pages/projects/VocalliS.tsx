import ProjectDisplay from '../../components/projectdisplay';
import '../projects/DigitalGrowSolutions.scss';

function VocalliS() {
  return (
    <>
      <ProjectDisplay
        name="VocalliS"
        description="VocalliS is an AI-powered voice receptionist platform that helps businesses automate customer phone conversations in Romanian and Russian, allowing them to answer questions, take reservations, and manage orders without a human operator. The platform features dedicated AI assistants for Customer Support, Reservations, and Orders, real-time speech recognition optimized for the Moldovan Romanian accent, and a responsive, user-friendly interface with modern UI animations. Deployed and maintained in a production environment."
        duration="Jun 2026 - Present"
        technologies={['React', 'TypeScript', 'Node.js', 'Fastify', 'OpenAI GPT-4o', 'Deepgram STT', 'ElevenLabs TTS']}
      />
      <div className="project-media-section">
        <h1 className="media-title">
         Links:
        </h1>

        <div className="project-links">
          <a
            href="https://vocallis-front-v6tf.vercel.app/"
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

export default VocalliS;
