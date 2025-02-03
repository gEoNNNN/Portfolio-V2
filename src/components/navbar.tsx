import '../../src/components/navbar.scss';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink

function Navbar() {
  // Custom scroll function to center the section
  const scrollWithOffset = (el:any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -window.innerHeight / 4; // Adjust this value to center the section
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className='navbarfixed'>
      <div className='menu'>
        <ul>
          <li>
            <Link to="#contact" smooth scroll={(el) => scrollWithOffset(el)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth scroll={(el) => scrollWithOffset(el)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#about" smooth scroll={(el) => scrollWithOffset(el)}>
              About
            </Link>
          </li>
          <li>
            <Link to="#home" smooth scroll={(el) => scrollWithOffset(el)}>
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className='signature'>
        <h1>OST.</h1>
      </div>
    </div>
  );
}

export default Navbar;