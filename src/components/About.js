import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNode } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io"
import { Animated } from "react-animated-css"
import { AnimatedOnScroll } from "react-animated-css-onscroll"

import sleeper from '../assets/sleeper.jpg'
import trees from '../assets/trees.jpg'

class About extends React.Component {
  state = {
    moreOpen: false,
    animationVisible: false
  }

  handleClick = () => {
    this.setState({ animationVisible: !this.state.animationVisible })
    if (!this.state.moreOpen) {
      this.setState({ moreOpen: true })
    } else {
      setTimeout(() => {
        this.setState({ moreOpen: false })
      }, 800);
    }
  }

  render() {
    return (
      <section className="about-section" id="about">
        <h2>About</h2>
        <div className='about-columns'>
          <div className="about-column-text">
            <p>A problem-solver at heart, I initially developed a passion for programming during my time as a Dutch translator.
            Because I love to solve problems, I was immediately hooked and taught myself the fundamentals of web development
            through every online resource I could find. I used my newly acquired knowledge to improve the communication about
            upcoming and new translation projects between the localisation and development team, but soon realised I wanted to
            be on the other side of that conversation. I decided it was the right time to switch careers and enrolled in
            General Assembly’s Software Engineering Immersive. I recently completed this course where in
            addition to finetuning my JavaScript and Python skills, I learned how to build applications using React, Node.js and Django.
            I am currently looking for a position as a web developer in a passionate and supportive team.</p>

            <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" animationInDuration={2000} animationOutDuration={1000} isVisible={this.state.animationVisible}>
              <div className={!this.state.moreOpen ? "about-column-text-hidden" : "about-column-text-visible"}>
                <h2>Most eye-opening read</h2>
                <p>Did you know that trees form a complex community of parents and children?
                  And that the parents actually care for their children by giving them nutrients and looking out for diseases?
                  I didn't either, untill I read Peter Wohlleben's "The Hidden Life of Trees". In this book he shares all of this insights, making you fall in love with trees.
                  </p>
                <img src={trees} alt="The Hidden Life of Trees" />
                <div className="painting">
                  <h2>My favourite painting</h2>
                  <p>I love Tamara de Lempicka's work. I even made a copied a couple of her paintings! My favourite is "The Sleeper" because of the bold lines and calm colours.</p>
                  <img src={sleeper} alt="The Sleeper" />
                </div>
              </div>
            </Animated>
            {!this.state.moreOpen
              ?
              <button onClick={this.handleClick}>Tell me more</button>
              :
              <button onClick={this.handleClick}>Less please</button>
            }
          </div>
          <AnimatedOnScroll animationIn="bounceInRight" animationInDuration={1500} isVisible={true}>
            <div className="about-skill-column">
              <div className="skill-icon-div">
                < FaHtml5 className="skill-icon" />
                <p>HTML5</p>
              </div>
              <div className="skill-icon-div">
                < FaCss3Alt className="skill-icon" />
                <p>CSS3</p>
              </div>
              <div className="skill-icon-div">
                <IoLogoJavascript className="skill-icon" />
                <p>JavaScript</p>
              </div>
              <div className="skill-icon-div">
                <FaReact className="skill-icon" />
                <p>React</p>
              </div>
              <div className="skill-icon-div">
                <FaPython className="skill-icon" />
                <p>React</p>
              </div>
              <div className="skill-icon-div">
                <FaNode className="skill-icon" />
                <p>Node.js</p>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    )
  }
}

export default About