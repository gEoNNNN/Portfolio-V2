import '../../src/pages/projects.scss'

function Projects() {
  return (
    <div className='projects'>
      <p className='mylatest'>My latest <span className="highlight">projects</span> </p>
      <ul>
        <li><div className='card'>
          <p>👨‍🍳</p>
          <h1>KitchenGuru</h1>
          <h2>A website that assists users in discovering recipes based on the ingredients available in their refrigerator.</h2>  
        </div></li>
        <li><div className='card'>
          <p>🚘</p>
          <h1>ParkingGuru</h1>
          <h2>A mobile app that enables city administrations and citizens to efficiently manage and pay for public parking </h2>
        </div></li>
        <li><div className='card'>
          <p>👾</p>
          <h1>JS Projects...</h1>
          <h2>I have developed several games to practice and enhance my JavaScript and web design skills. </h2>
        </div></li>
      </ul>
    </div>
  )
}

export default Projects
