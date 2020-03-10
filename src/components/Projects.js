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
          <h2>Git Together</h2>
          <img src={git} alt="Git Together" />
          <p>This is a place for developers where they can post and comment on questions
            and chat with each other. After registering, users also automatically get a buddy
            to promote further communication.</p>
          <p>It was built in 1 week with React, React Hooks, Django REST and PostgreSQL.</p>
        </div>

        <div className="project-details">
          <h2>Out and About</h2>
          <img src={outAbout} alt="Out and About" />
          <p>Out and About is a website to find free outdoor events. One of my main tasks was adding
            the search and sorting functionality, making it possible for users to search for
            events with the postcode, type of activity, date and time.</p>
          <p>This was a group project lasting 8 days and we built it with the MERN stack</p>
        </div>

        <div className="project-details">
          <h2>Animated</h2>
          <img src={animated} alt="Animated" />
          <p>Animated is a collection of animated films and series. Users can find, add and
            comment on all of their favourite animations.</p>
          <p>It took me 8 days to built using the MERN stack to create my own frontend and
            API in the backend.</p>
        </div>

        <div className="project-details">
          <h2>Art Journey</h2>
          <img src={artJourney} alt="Art Journey" />
          <p>Art Journey is a website on which users can search for art with a wide range
            of keywords, such as "blue", "beach" and "Rembrandt".</p>
          <p>This was a pair-programming project of 48 hours and was built with React and
            the Rijksmuseum API.</p>
        </div>

        <div className="project-details">
          <h2>Frogger</h2>
          <img src={frogger} alt="Frogger" />
          <p>I created my own version of the popular game Frogger in which users need
            to get all 5 witches across the board, avoiding the different obstacles.</p>
          <p>It took me 9 days to built, using vanilla JavaScript, HTML and CSS</p>
        </div>

        <div className="project-details">
          <h2>Book Blog</h2>
          <img src={bookBlog} alt="Book Blog" />
          <p>This is the first website I've ever made after doing a online course on Django.
            It's a book blog on which the "superuser" can posts, edit and delete blogs
            and other users can comment on those blog posts.</p>
          <p>I built this in 2 weeks with Django, HTML, CSS and jQuery.</p>
        </div>

      </div>
    </section>
  )
}

export default Projects