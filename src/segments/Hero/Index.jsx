import { convertHexToRgba } from "../../util";
import { Link } from "react-scroll";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";
import BoxAnimation from "../../assets/BoxAnimation";
import gsap from "gsap";
import { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(()=>{
    gsap.timeline({delay:0.5})
    .fromTo("#hero .hero-subtitle",{x:-20,opacity:0},{x:0,opacity:1})
    .fromTo("#hero .hero-title",{y:20,opacity:0},{y:0,opacity:1})
    .fromTo("#hero .hero-image",{y:-20,opacity:0},{y:0,opacity:11})
    .fromTo(["#hero .hero-description","#hero .buttons-wrapper"],{y:20,opacity:0},{y:0,opacity:1,stagger:0.5})
  })
  return (
    <section id="hero">
      <BoxAnimation />
      <div className="container">
        <div>
          <h4
            className="text-primary hero-subtitle"
            style={{ background: convertHexToRgba("--primary", 0.2) }}
          >
            Digital Innovation And Expansion
          </h4>
          <h1 className="hero-title">
            Build, Innovate, And Transform with Us.
          </h1>
          <p className="hero-description">
            BuildSoft IT Solutions brings your ideas to life with custom software, web, and
            mobile solutions. From concept to launch, we drive your business
            forward.
          </p>
          <div className="buttons-wrapper">
            <Link to="contact" smooth={true} className="btn primary">
              Get Started <FaArrowTrendUp />
            </Link>
            <Link to="projects" smooth={true} className="btn">
              See Our Work <FaProjectDiagram />
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
