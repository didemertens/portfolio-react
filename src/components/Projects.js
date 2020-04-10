import React from 'react'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'

import git from '../assets/git.png'
import outAbout from '../assets/out-about.png'
import animated from '../assets/animated.png'
import artJourney from '../assets/art-journey.png'
import frogger from '../assets/frogger.png'
import pomochore from '../assets/pomochore.png'
import hospitalHero from '../assets/hospitalhero.png'

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <h3 className="projects-subtitle">Open source</h3>
      <div className="projects-list">
      <div className="project-details">
          <div className="project-box">
            <img src={hospitalHero} alt="Hospital Hero" />
            <div className="project-details-text">
              <h3>HospitalHero</h3>
              <p>I'm working as a front-end developer on HospitalHero, which connects healthcare workers 
                with volunteers who can provide basic needs during the COVID-19 pandemic response.
                Click <a className="project-info--opensource" href="https://devpost.com/software/feed-a-doc" target="_blank" rel="noopener noreferrer">here</a> for more information.
                </p>
              <p>It's an open source project and I've been contributing using React and Material-UI.</p>
              <a className="project-icons" href="https://github.com/feedadoc/feedadoc" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://hospitalhero.care/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="projects-subtitle projects-subtitle--own">My own</h3>
      <div className="projects-list">

      <div className="project-details">
          <div className="project-box">
            <img src={pomochore} alt="Pomochore" />
            <div className="project-details-text">
              <h3>Pomochore</h3>
              <p>Because having a productive day can be difficult (especially when you have to work from home), 
                I created a website with a Pomodoro timer and a list of tasks, using test-driven development.</p>
              <p>I built this in 2 weeks with React, Redux, Enzyme, Jest and Material-UI.</p>
              <a className="project-icons" href="https://github.com/didemertens/pomodoro-app" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://pomochore.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-box">
            <img src={git} alt="Git Together" />
            <div className="project-details-text">
              <h3>Git Together</h3>
              <p>This is a place for developers where they can post and comment on questions
              and chat with each other. After registering, users also automatically get a buddy
              to promote further communication.</p>
              <p>It was a solo project built in 1 week with React, React Hooks, Django REST and PostgreSQL.</p>
              <a className="project-icons" href="https://github.com/didemertens/sei-project-4" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="http://lets-git-together.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-box">
            <img src={outAbout} alt="Out and About" />
            <div className="project-details-text">
              <h3>Out and About</h3>
              <p>Out and About is a website to find free outdoor events. One of my main tasks was adding
              the search and sorting functionality, making it possible for users to find
              events with a postcode, type of activity, date and time.</p>
              <p>This was a group project lasting 8 days and we built it with React, Express, React, Node.js and MongoDB (MERN).</p>
              <a className="project-icons" href="https://github.com/didemertens/sei-group-project" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://out-about.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-box">
            <img src={animated} alt="Animated" />
            <div className="project-details-text">
              <h3>Animated</h3>
              <p>Animated is a collection of animated films and series. Users can find, add and
              comment on their favourite animations. For this app, I used MongoDB which was
            a great experience as it stores all of the data in JSON. </p>
              <p>It took me 1 week to built using the MERN stack to create my own frontend and
            API in the backend.</p>
              <a className="project-icons" href="https://github.com/didemertens/animated-api" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://animated-api.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-box">
            <img src={artJourney} alt="Art Journey" />
            <div className="project-details-text">
              <h3>Art Journey</h3>
              <p>Art Journey is a website on which users can search for art with a wide range
              of keywords, such as "blue" and "Rembrandt". We took advantage of the CSS framework
              Bulma to make styling the website easier and faster.</p>
              <p>This was a pair-programming project of 48 hours and was built with React and
            the Rijksmuseum API.</p>
              <a className="project-icons" href="https://github.com/didemertens/sei-project2" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://your-art-journey.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-box">
            <img src={frogger} alt="Frogger" />
            <div className="project-details-text">
              <h3>Frogger</h3>
              <p>I created my own version of the game Frogger in which users need
              to get all 5 witches across the board, avoiding the different obstacles. The player
            uses the arrow keys to move and can pick from 3 difficulty levels.</p>
              <p>This project took me 9 days, using vanilla JavaScript, HTML and CSS.</p>
              <a className="project-icons" href="https://github.com/didemertens/sei-project-1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="project-icons" href="https://didemertens.github.io/sei-project-1/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects