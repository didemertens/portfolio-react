import React from 'react'
import { Animated } from "react-animated-css"
import { AnimatedOnScroll } from "react-animated-css-onscroll"

import MoreAbout from './MoreAbout'
import SkillsAbout from './SkillsAbout'

class About extends React.Component {
  state = {
    moreOpen: true,
    animationVisible: true
  }

  ref = React.createRef();

  handleClick = () => {
    this.setState({ animationVisible: !this.state.animationVisible })
    if (!this.state.moreOpen) {
      this.moreText.scrollIntoView({ behavior: "smooth", block: "center" })
      this.setState({ moreOpen: true })
    } else {
      setTimeout(() => {
        this.setState({ moreOpen: false })
        this.lessText.scrollIntoView({ behavior: "smooth" })
      }, 1000);
    }
  }

  render() {
    return (
      <>
        <div ref={(ref) => this.lessText = ref}></div>
        <section className="about-section" id="about">
          <div className="column-wrapper">
            <div className='about-columns'>
              <div className="about-column-text">
                <h2>About</h2>
                <p>A problem-solver at heart, I initially developed a passion for programming during my time as a Dutch translator.
                Because I love to solve problems, I was immediately hooked and taught myself the fundamentals of web development
                through every online resource I could find. I used my newly acquired knowledge to improve the communication about
                upcoming and new translation projects between the localisation and development team, but soon realised I wanted to
                be on the other side of that conversation.
                </p>
                <p>
                  I decided it was the right time to switch careers and enrolled in
                  General Assembly’s Software Engineering Immersive. I recently completed this course where in
                addition to finetuning my <strong>JavaScript</strong> and <strong>Python</strong> skills, I learned how to build
                applications using <strong>React</strong>, <strong>Node.js</strong> and <strong>Django</strong>.
                I am currently looking for a position as a web developer in a passionate and supportive team.</p>
              </div>
              <AnimatedOnScroll
                animationIn="bounceInRight"
                animationInDuration={1500}
                isVisible={true}>
                <SkillsAbout />
              </AnimatedOnScroll>
            </div>
          </div>
          <div className="about-btn-more">
            {!this.state.moreOpen
              ?
              <button className="column-text-btn" onClick={this.handleClick}>Tell me more</button>
              :
              <button className="column-text-btn" onClick={this.handleClick}>Less please</button>
            }
          </div>
          <div className={!this.state.moreOpen ? "about-column-text-hidden" : ""}>
            <Animated
              animationIn="bounceInLeft"
              animationOut="bounceOutLeft"
              animationInDuration={2000}
              animationOutDuration={1000}
              isVisible={this.state.animationVisible}>
              <MoreAbout />
            </Animated>
          </div>
        </section >
        <div ref={(ref) => this.moreText = ref}></div>
      </>
    )
  }
}

export default About