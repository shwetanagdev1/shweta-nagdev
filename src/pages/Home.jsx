import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
    </div>
  )
}

export default Home