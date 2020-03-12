import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNode, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io"
import { DiDjango } from "react-icons/di"
import { GiCoffeeCup } from "react-icons/gi"




import { Animated } from "react-animated-css"
import { AnimatedOnScroll } from "react-animated-css-onscroll"

import jsIcon from '../assets/js-icon.png'
import reactIcon from '../assets/react-icon.png'
import pythonIcon from '../assets/python-icon.png'
import nodeIcon from '../assets/node-icon.png'
import htmlIcon from '../assets/html-icon.png'
import cssIcon from '../assets/css-icon.png'
import djangoIcon from '../assets/django-icon.png'
import sassIcon from '../assets/sass-icon.png'
import mochaIcon from '../assets/mocha-cup.png'
import expressIcon from '../assets/express-icon.png'

class About extends React.Component {
  state = {
    moreOpen: false,
    animationVisible: false
  }

  ref = React.createRef();

  handleClick = () => {
    this.setState({ animationVisible: !this.state.animationVisible })
    if (!this.state.moreOpen) {
      this.moreText.scrollIntoView({ behavior: "smooth" })
      this.setState({ moreOpen: true })
    } else {
      setTimeout(() => {
        this.setState({ moreOpen: false })
        this.lessText.scrollIntoView({ behavior: "smooth" })
      }, 800);
    }
  }

  render() {
    return (
      <section className="about-section" id="about">
        <div ref={(ref) => this.lessText = ref}></div>
        <div className="column-wrapper">
          <h2>About</h2>
          <div className='about-columns'>
            <div className="about-column-text">
              <p>A problem-solver at heart, I initially developed a passion for programming during my time as a Dutch translator.
              Because I love to solve problems, I was immediately hooked and taught myself the fundamentals of web development
              through every online resource I could find. I used my newly acquired knowledge to improve the communication about
              upcoming and new translation projects between the localisation and development team, but soon realised I wanted to
              be on the other side of that conversation. I decided it was the right time to switch careers and enrolled in
              General Assembly’s Software Engineering Immersive. I recently completed this course where in
              addition to finetuning my <strong>JavaScript</strong> and <strong>Python</strong> skills, I learned how to build
              applications using <strong>React</strong>, <strong>Node.js</strong> and <strong>Django</strong>.
            I am currently looking for a position as a web developer in a passionate and supportive team.</p>
              <div className="about-btn-more">
                {!this.state.moreOpen
                  ?
                  <button className="column-text-btn" onClick={this.handleClick}>Tell me more</button>
                  :
                  <button className="column-text-btn" onClick={this.handleClick}>Less please</button>
                }
              </div>
            </div>

            <AnimatedOnScroll animationIn="bounceInRight" animationInDuration={1500} isVisible={true}>
              <div className="about-skill-column">

                <div className="skill-icon-div">
                  {/* <img src={jsIcon} alt="JS icon" /> */}
                  <IoLogoJavascript className="skill-icon" />
                  <p>JavaScript</p>
                </div>
                <div className="skill-icon-div">
                  <FaReact className="skill-icon" />
                  {/* <img src={reactIcon} alt="React icon" /> */}
                  <p>React</p>
                </div>
                <div className="skill-icon-div">
                  <FaPython className="skill-icon" />
                  {/* <img src={pythonIcon} alt="Python icon" /> */}
                  <p>Python</p>
                </div>
                <div className="skill-icon-div">
                  <FaNode className="skill-icon" />
                  {/* <img src={nodeIcon} alt="Node icon" /> */}
                  <p>Node.js</p>
                </div>
                <div className="skill-icon-div">
                  < FaHtml5 className="skill-icon" />
                  {/* <img src={htmlIcon} alt="HTML icon" /> */}
                  <p>HTML5</p>
                </div>
                <div className="skill-icon-div">
                  < FaCss3Alt className="skill-icon" />
                  {/* <img src={cssIcon} alt="CSS icon" /> */}
                  <p>CSS3</p>
                </div>
                <div className="skill-icon-div">
                  {/* <img src={djangoIcon} alt="Django icon" /> */}
                  <DiDjango className="skill-icon" />
                  <p>Django</p>
                </div>
                <div className="skill-icon-div">
                  {/* <img src={sassIcon} alt="Sass icon" /> */}
                  <FaSass className="skill-icon" />
                  <p>Sass</p>
                </div>
                <div className="skill-icon-div">
                  {/* <img src={mochaIcon} alt="Mocha icon" /> */}
                  <GiCoffeeCup className="skill-icon" />
                  <p>Mocha</p>
                </div>
                <div className="skill-icon-div">
                  <img src={expressIcon} alt="Express icon" />
                  <p>Express</p>
                </div>


              </div>
            </AnimatedOnScroll>
          </div>
        </div>

        <div ref={(ref) => this.moreText = ref}></div>
        <div className={!this.state.moreOpen ? "about-column-text-hidden" : ""}>
          <Animated animationIn="bounceInLeft" animationOut="bounceOutLeft" animationInDuration={2000} animationOutDuration={1000} isVisible={this.state.animationVisible}>
            <div className="about-text-more">

              <a href="https://www.goodreads.com/book/show/28256439-the-hidden-life-of-trees"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="home-about-more-box about-book">
                  <div className="about-book-text">
                    <h3>Most eye-opening read</h3>
                    <p>Did you know that trees form a complex community of parents and children?
                    And that the parents actually care for their children by giving them nutrients and looking out for insects?
                    I didn't either, untill I read Peter Wohlleben's book "The Hidden Life of Trees". In this book he shares all of
                    this insights, which made me fall in love with trees.
                  </p>
                  </div>
                </div>
              </a>

              <a href="https://www.wikiart.org/en/tamara-de-lempicka/the-sleeper-1932"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="home-about-more-box about-painting">
                  <div className="about-painting-text">
                    <h3>Most beautiful painting</h3>
                    <p>I love Tamara de Lempicka's work. I even copied a couple of her paintings! She was a Polish artist who lived
                    for most of her life in France and the US. She mainly created paintings of women in the Art Deco style.
                    It's a hard choice, but if I have to pick then my favourite work would be "The Sleeper" because of the
                    bold lines and calm colours.</p>
                  </div>
                </div>
              </a>

              <a href="https://canals-amsterdam.nl/"
                target="_blank" rel="noopener noreferrer"
              >
                <div className="home-about-more-box about-canals">
                  <div className="about-canals-text">
                    <h3>Most inspiring website</h3>
                    <p>My favourite website is Canals Amsterdam. Not because it's about the Netherlands (although I'm bound
                    to be a bit baised), but because they show the history of the canals in a very unique way. You can take
                    a "scroll" from the 16th century to today, seeing through paintings and pictures how the canals were
                    used during this time.</p>
                  </div>
                </div>
              </a>

            </div>
          </Animated>
        </div>
      </section >
    )
  }
}

export default About