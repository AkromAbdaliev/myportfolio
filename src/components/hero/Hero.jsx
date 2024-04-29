import './Hero.css';
import profile_img from '../../assets/main.png';
const Hero = () => {
  return(
    <div className="hero">
    <img src={profile_img} alt="" />
    <h1>I am<span> Akromjon Abdaliev</span>, software engineer based in North Cyprus.</h1>
    <p>I am a third-year software engineering student from Tashkent, Uzbekistan, looking for internships. </p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>

  </div>)
}

export default Hero;