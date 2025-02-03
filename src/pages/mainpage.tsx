import '../../src/pages/mainpage.scss';
import Navbar from './../components/navbar';
import cvFile from '../../src/assets/CV - Eugen Ostafi.pdf'; // Adjust the path to your file

function Mainpage() {
  return (
    <div className='body'>
      <Navbar />
      <div className='text'>
        <h1 className='hi'>Hi 👋</h1>
        <h1 className='iam'>I'm Eugen,</h1>
        <h1 className='developer'>front-end web developer</h1>
      </div>
      <div className='cv'>
        <a href={cvFile} download="My-CV.pdf">
          <button>Download my CV</button>
        </a>
      </div>
    </div>
  );
}

export default Mainpage;