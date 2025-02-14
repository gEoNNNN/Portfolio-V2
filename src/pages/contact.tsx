import '../../src/pages/contact.scss'
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink

function Contact() {
  return (
    <div className='contact'>
      <button><p>Keep in <span className="highlight">touch ✉️</span> </p></button>
      <div className='socials'>
        <ul>
          <li><Link to="https://www.instagram.com/eugen.ost/">
                  Instagram
              </Link></li>
          <li><Link to="https://www.linkedin.com/in/eugen-ostafi-854259287/">
              Linkedin
              </Link></li>
          <li><Link to="https://github.com/gEoNNNN">
              GitHub
              </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
