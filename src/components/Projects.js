import React from 'react'
import git from '../assets/git.png'
import outAbout from '../assets/out-about.png'
import animated from '../assets/animated.png'
import artJourney from '../assets/art-journey.png'
import frogger from '../assets/frogger.png'
import bookBlog from '../assets/book-blog.png'

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">

        <div className="project-details">
          <a href="http://lets-git-together.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="Git Together" />
            <div className="project-details-text">
              <h3>Git Together</h3>
              <p>This is a place for developers where they can post and comment on questions
              and chat with each other. After registering, users also automatically get a buddy
              to promote further communication.</p>
              <p>It was a solo project built in 1 week with React, React Hooks, Django REST and PostgreSQL.</p>
            </div>
          </a>
        </div>

        <div className="project-details">
          <a href="https://out-about.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={outAbout} alt="Out and About" />
            <div className="project-details-text">
              <h3>Out and About</h3>
              <p>Out and About is a website to find free outdoor events. One of my main tasks was adding
              the search and sorting functionality, making it possible for users to find
              events with a postcode, type of activity, date and time.</p>
              <p>This was a group project lasting 8 days and we built it with React, Express, React, Node.js and MongoDB (MERN).</p>
            </div>
          </a>
        </div>

        <div className="project-details">
          <a href="https://animated-api.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={animated} alt="Animated" />
            <div className="project-details-text">
              <h3>Animated</h3>
              <p>Animated is a collection of animated films and series. Users can find, add and
              comment on their favourite animations. For this app, I used MongoDB which was
            a great experience as it stores all of the data in JSON. </p>
              <p>It took me 1 week to built using the MERN stack to create my own frontend and
            API in the backend.</p>
            </div>
          </a>
        </div>

        <div className="project-details">
          <a href="https://your-art-journey.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={artJourney} alt="Art Journey" />
            <div className="project-details-text">
              <h3>Art Journey</h3>
              <p>Art Journey is a website on which users can search for art with a wide range
              of keywords, such as "blue" and "Rembrandt". We took advantage of the CSS framework
              Bulma to make styling the website easier and faster.</p>
              <p>This was a pair-programming project of 48 hours and was built with React and
            the Rijksmuseum API.</p>
            </div>
          </a>
        </div>

        <div className="project-details">
          <a href="https://didemertens.github.io/sei-project-1/" target="_blank" rel="noopener noreferrer">
            <img src={frogger} alt="Frogger" />
            <div className="project-details-text">
              <h3>Frogger</h3>
              <p>I created my own version of the game Frogger in which users need
              to get all 5 witches across the board, avoiding the different obstacles. The player
            uses the arrow keys to move and can pick from 3 difficulty levels.</p>
              <p>It took me 9 days to built, using vanilla JavaScript, HTML and CSS</p>
            </div>
          </a>
        </div>

        <div className="project-details">
          <a href="https://bookblogdide.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={bookBlog} alt="Book Blog" />
            <div className="project-details-text">
              <h3>Book Blog</h3>
              <p>This is the first website I've ever made after doing a online course on Django.
              It's a book blog on which I can posts, edit and delete blogs
            and other users can comment on those blog posts.</p>
              <p>I built this in 2 weeks with Django, HTML, CSS and jQuery.</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects