import React from 'react'
import './styles/main.scss'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {

  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main >
  )
}

export default App
