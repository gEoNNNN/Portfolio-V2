import '../src/app.scss'
import Mainpage from './../src/pages/mainpage'
import About from './pages/aboutme'
import Projects from './pages/projects'

function App() {
  return (
    <body>
        <Mainpage/>
        <div className='about'>
          <About/>
        </div>
        <div className='projects'>
          <Projects/>
        </div>
    </body>
  )
}

export default App
