import '../../src/pages/aboutme.scss'
import me from "./../assets/photo_2025-02-02_12-31-01.jpg"

function About() {
  
  return (
    <div className='main'>
        <div className='title'>
            <p>A few words about <span className="highlight">me</span> </p>
        </div>
        <div className='description'>
            <pre>I'm Eugen, a web developer based in Chisinau (moldova), specializing in front-end and UI/UX design. I'm currently working at Groupe Adonis as a front-end developer. </pre>
            <pre>Passionate about the web and new technologies, I love learning and discovering new things. I also enjoy interface design and user experience. I like to create simple, intuitive interfaces that I can then develop further.</pre>
            <pre>I'm currently seeking a 6-month internship as part of the Erasmus+ program to enhance my skills and contribute to innovative projects in a dynamic international environment. Feel free to contact me if you'd like to discuss potential opportunities or collaborations.</pre>
        </div>
        <img src={me} />
    </div>
  )
}

export default About
