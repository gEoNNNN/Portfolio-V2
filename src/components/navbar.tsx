import '../../src/components/navbar.scss'


function Navbar() {
  return (
    <div className='navbarfixed'>
        <div className='menu'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='signature'>
            <h1>OST.</h1>
        </div>
    </div>
  )
}

export default Navbar
