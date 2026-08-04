import '../../src/pages/projects.scss'
import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/projectcard'
import {
  FiShoppingCart,
  FiMonitor,
  FiMapPin,
  FiCpu,
  FiHome,
  FiSend,
  FiBookOpen,
  FiTruck,
  FiCoffee,
  FiZap,
} from 'react-icons/fi'
import { FaWineGlassAlt, FaDice } from 'react-icons/fa'

function Projects() {
  const navigate = useNavigate();

  return (
    <div className='projects'>
      <div className='working'>
        <p className='mylatest reveal'>My working <span className="highlight">products</span> </p>
        <ul>
          <li>
            <ProjectCard
              icon={FiShoppingCart}
              title="Challange Store"
              description="A modern full-stack e-commerce platform with multilingual support and ERP integration."
              onOpen={() => navigate('/ChallangeStore')}
            />
          </li>
          <li>
            <ProjectCard
              icon={FiMonitor}
              title="RSistems"
              description="A multilingual SSR web platform built with Next.js, SEO optimization, and Linux server deployment."
              onOpen={() => navigate('/RSistems')}
            />
          </li>
          <li>
            <ProjectCard
              icon={FiMapPin}
              title="R-Parking"
              description="A multilingual parking management web platform with i18n, structured SEO, and production deployment."
              onOpen={() => navigate('/RParking')}
            />
          </li>
        </ul>
        <ul>
          <li>
            <ProjectCard
              icon={FiCpu}
              title="Digital Grow"
              description="An IT company website specializing in web development and AI chatbot solutions for businesses."
              onOpen={() => navigate('/DigitalGrowSolutions')}
            />
          </li>
          <li>
            <ProjectCard
              icon={FiHome}
              title="KrovAcoperis"
              description="A professional landing page for a roofing company specializing in quality materials and installation services."
              onOpen={() => navigate('/Krovacoperisuri')}
            />
          </li>
          <li>
            <ProjectCard
              icon={FiSend}
              title="Lumea Ta"
              description="A comprehensive travel website helping small businesses connect travelers with unique local experiences."
              onOpen={() => navigate('/Lumeata')}
            />
          </li>
        </ul>
      </div>
      <p className='mylatest reveal'>My latest <span className="highlight">projects</span> </p>
      <ul>
        <li>
          <ProjectCard
            icon={FiCpu}
            title="VocalliS"
            description="An AI voice receptionist platform automating customer calls in Romanian and Russian."
            onOpen={() => navigate('/VocalliS')}
          />
        </li>
        <li>
          <ProjectCard
            icon={FiBookOpen}
            title="KitchenGuru"
            description="A website that assists users in discovering recipes based on the ingredients available in their refrigerator."
            onOpen={() => navigate('/KitchenGuru')}
          />
        </li>
        <li>
          <ProjectCard
            icon={FiTruck}
            title="ParkingGuru"
            description="A mobile app that enables city administrations and citizens to efficiently manage and pay for public parking."
            onOpen={() => navigate('/ParkingGuru')}
          />
        </li>
      </ul>
      <ul>
        <li>
          <ProjectCard
            icon={FaWineGlassAlt}
            title="VintageVault"
            description="An elegant and visually captivating website dedicated to showcasing an exclusive club for passionate wine collectors."
            onOpen={() => navigate('/VintageVault')}
          />
        </li>
        <li>
          <ProjectCard
            icon={FiCoffee}
            title="COFFEE BOX"
            description="A simple, welcoming website for a local coffee shop, featuring the menu, hours, and location."
            onOpen={() => navigate('/COFFEEBOX')}
          />
        </li>
        <li>
          <ProjectCard
            icon={FaDice}
            title="Casino Games"
            description="A fun and interactive casino simulation website for casual entertainment and gameplay."
            onOpen={() => navigate('/Casino')}
          />
        </li>
      </ul>
      <ul>
        <li>
          <ProjectCard
            icon={FiZap}
            title="NexaWorks"
            description="A modern web landing page for a digital agency with Three.js animations and EmailJS integration."
            onOpen={() => navigate('/NexaWorks')}
          />
        </li>
      </ul>
    </div>
  )
}

export default Projects
