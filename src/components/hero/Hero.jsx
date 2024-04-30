import './Hero.css';
import profile_img from '../../assets/main.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return(
    <div id="home" className="hero">
    <img src={profile_img} alt="" />
    <h1>I&apos;m<span> Akromjon Abdaliev</span>, software engineer based in North Cyprus.</h1>
    <p>I am a third-year software engineering student from Tashkent, Uzbekistan, looking for internships. </p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>

  </div>)
}

export default Hero;