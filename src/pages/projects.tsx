import '../../src/pages/projects.scss'
import { useNavigate } from 'react-router-dom'

function Projects() {
  const navigate = useNavigate();

  return (
    <div className='projects'>
      <p className='mylatest'>My latest <span className="highlight">projects</span> </p>
      <ul>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/KitchenGuru');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/KitchenGuru');
              }
            }}
          >
            <p>👨‍🍳</p>
            <h1>KitchenGuru</h1>
            <h2>A website that assists users in discovering recipes based on the ingredients available in their refrigerator.</h2>  
          </div>
        </li>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/ParkingGuru');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/ParkingGuru');
              }
            }}
          >
            <p>🚘</p>
            <h1>ParkingGuru</h1>
            <h2>A mobile app that enables city administrations and citizens to efficiently manage and pay for public parking </h2>
          </div>
        </li>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/VintageVault');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/VintageVault');
              }
            }}
          >
            <p>🍷</p>
            <h1>VintageVault</h1>
            <h2>An elegant and visually captivating website dedicated to showcasing an exclusive club for passionate wine collectors </h2>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/COFFEEBOX');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/COFFEEBOX');
              }
            }}
          >
            <p>☕</p>
            <h1>COFFEE BOX</h1>
            <h2>A simple, welcoming website for a local coffee shop, featuring the menu, hours, and location.</h2>
          </div>
        </li>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            style={{ cursor: 'not-allowed', opacity: 0.7 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/Casino');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/Casino');
              }
            }}
          >
            <p>👾</p>
            <h1>Casino Games</h1>
            <h2>A fun and interactive casino simulation website for casual entertainment and gameplay.</h2>
          </div>
        </li>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/DigitalGrowSolutions');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/DigitalGrowSolutions');
              }
            }}
          >
            <p>💻</p>
            <h1>Digital Grow</h1>
            <h2>An IT company website specializing in web development and AI chatbot solutions for businesses.</h2>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/Lumeata');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/Lumeata');
              }
            }}
          >
            <p>✈️</p>
            <h1>Lumea Ta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <h2>A comprehensive travel website helping small businesses connect travelers with unique local experiences.</h2>
          </div>
        </li>
        <li>
          <div
            className='card project-card'
            tabIndex={0}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/Krovacoperisuri');
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/Krovacoperisuri');
              }
            }}
          >
            <p>🏠</p>
            <h1>KrovAcoperis</h1>
            <h2>A professional landing page for a roofing company specializing in quality materials and installation services.</h2>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects