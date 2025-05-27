import '../../src/pages/projects.scss'

function Projects() {
  return (
    <div className='projects'>
      <p className='mylatest'>My latest <span className="highlight">projects</span> </p>
      <ul>
        <li>
          <div className='card'>
            <p>👨‍🍳</p>
            <h1>KitchenGuru</h1>
            <h2>A website that assists users in discovering recipes based on the ingredients available in their refrigerator.</h2>  
          </div>
        </li>
        <li>
          <div className='card'>
            <p>🚘</p>
            <h1>ParkingGuru</h1>
            <h2>A mobile app that enables city administrations and citizens to efficiently manage and pay for public parking </h2>
          </div>
        </li>
        <li>
          <div className='card'>
            <p>🍷</p>
            <h1>VintageVault</h1>
            <h2>An elegant and visually captivating website dedicated to showcasing an exclusive club for passionate wine collectors </h2>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className='card'>
            <p>☕</p>
            <h1>COFFEE BOX</h1>
            <h2>A simple, welcoming website for a local coffee shop, featuring the menu, hours, and location.</h2>
          </div>
        </li>
        <li>
          <div className='card'>
            <p>👾</p>
            <h1>Casino Games</h1>
            <h2>A fun and interactive casino simulation website for casual entertainment and gameplay.</h2>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects
