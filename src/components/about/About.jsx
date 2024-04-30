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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vero quaerat culpa praesentium repellat soluta, maiores qui ut dicta assumenda?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id? Tenetur voluptate eaque quaerat distinctio?</p>
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