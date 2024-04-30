import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/main.png'
const About = () => {
  return(<div className='about'>

    <div id='about' className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
<div className="about-para">
    <p>My programming journey began in 2020 during the pandemic. I decided to switch professions and started learning Python offline. After 7 months, I created my first Django project for backend development. Though I felt ready for a junior developer position, I wanted to deepen my knowledge, so I pursued a degree in software engineering. Luckily, I received a full scholarship due to my high grades.</p>
    <p>At university, I studied data structures and algorithms using C, followed by two semesters of object-oriented programming in C++. I also attended lectures on SQL and software architecture, participating in group projects for the first time. During holidays, I learned JavaScript and React, building several web applications. While I initially favored Python for its simplicity, I&apos;ve recently delved into C# and obtained certification. I&apos;m eager to explore various IT fields and continue learning.</p>
</div>

            <div className="about-skills">
                <div className="about-skill"><p>C#</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"85%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>C Language</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"35%"}}/></div>
            </div>
        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>C#</h1>
            <p>Certification Microsoft</p>
        </div>
    </div>
  </div>)
}

export default About;