import React from 'react'
import './styles/main.scss'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Nav from './components/Nav'

const App = () => {

  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Projects />
    </main >
  )
}

export default App
