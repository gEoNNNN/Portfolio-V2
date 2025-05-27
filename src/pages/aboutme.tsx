import '../../src/pages/aboutme.scss'
import me from "./../assets/avatar.png"

function About() {
  
  return (
    <div className='main'>
        <div className='title'>
            <p>A few words about <span className="highlight">me</span> </p>
        </div>
        <div className='description'>
            <pre>Hi, I’m Eugen, a front-end developer based in Chisinau, Moldova, specializing in building user-friendly apps and web pages. I’m currently studying Software Development at the Faculty of Computers, Informatics, and Microelectronics (FAF) at the Technical University of Moldova. </pre>
            <pre>Passionate about the web and emerging technologies, I’m always eager to learn, explore, and grow. I enjoy creating simple, intuitive interfaces that can evolve into more sophisticated solutions over time. While I may not be the best in the field yet, I bring motivation, intelligence, and a willingness to learn anything that can enhance my career.</pre>
            <pre>I’m currently seeking an internship to further develop my skills and contribute to innovative projects in a dynamic, international environment. If you’d like to discuss potential opportunities or collaborations, feel free to contact me!</pre>
        </div>
        <img src={me} />
    </div>
  )
}

export default About
