import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNode, FaSass, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io"
import { DiDjango, DiMongodb, DiPostgresql, DiHeroku } from "react-icons/di"
import { GiCoffeeCup } from "react-icons/gi"

const SkillsAbout = () => (
  <div className="about-skill-column">
    <div className="skill-icon-div">
      <IoLogoJavascript className="skill-icon" />
      <p>JavaScript</p>
    </div>
    <div className="skill-icon-div">
      <FaReact className="skill-icon" />
      <p>React</p>
    </div>
    <div className="skill-icon-div">
      <FaNode className="skill-icon" />
      <p>Node.js</p>
    </div>
    <div className="skill-icon-div">
      <FaPython className="skill-icon" />
      <p>Python</p>
    </div>
    <div className="skill-icon-div">
      <DiDjango className="skill-icon" />
      <p>Django</p>
    </div>
    <div className="skill-icon-div">
      < FaHtml5 className="skill-icon" />
      <p>HTML5</p>
    </div>
    <div className="skill-icon-div">
      < FaCss3Alt className="skill-icon" />
      <p>CSS3</p>
    </div>
    <div className="skill-icon-div">
      <FaSass className="skill-icon" />
      <p>Sass</p>
    </div>
    <div className="skill-icon-div">
      <GiCoffeeCup className="skill-icon" />
      <p>Mocha</p>
    </div>
    <div className="skill-icon-div">
      <DiMongodb className="skill-icon" />
      <p>MongoDB</p>
    </div>
    <div className="skill-icon-div">
      <DiPostgresql className="skill-icon" />
      <p>PostgreSQL</p>
    </div>
    <div className="skill-icon-div">
      <DiHeroku className="skill-icon" />
      <p>Heroku</p>
    </div>
    <div className="skill-icon-div">
      <FaGithub className="skill-icon" />
      <p>GitHub</p>
    </div>
  </div>
)

export default SkillsAbout