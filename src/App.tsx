
import '../src/app.scss';
import Mainpage from './../src/pages/mainpage';
import Navbar from './components/navbar';
import About from './pages/aboutme';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { useReveal } from './hooks/useReveal';

function App() {
  const rootRef = useReveal<HTMLBodyElement>();

  return (
    <body ref={rootRef}>
      <Navbar />
      <section id="home"> {/* Added id for Home */}
        <Mainpage />
      </section>
      <section id="about"> {/* Added id for About */}
        <div className='aboutpage'>
          <About />
        </div>
      </section>
      <section id="projects"> {/* Added id for Projects */}
        <div className='projectspage'>
          <Projects />
        </div>
      </section>
      <section id="contact"> {/* Added id for Contact */}
        <div className='contactpage'>
          <Contact />
        </div>
      </section>
    </body>
  );
}

export default App;