import '../../src/pages/mainpage.scss'
import Navbar from './../components/navbar'

function Mainpage() {
  return (
    <div className='body'>
      <Navbar/>
        <div className='text'>
          <h1 className='hi'>Hi 👋</h1>
          <h1 className='iam'>I'm Eugen,</h1>
          <h1 className='developer'>front-end web developer</h1>
        </div>
      <div className='cv'>
          <button>Download my CV</button>
      </div>
    </div>
  )
}

export default Mainpage
