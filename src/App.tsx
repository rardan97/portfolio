

import './App.css'
import DarkModeToggle from './components/DarkModeToggle'
import NavbarComponent from './components/NavbarComponent'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

// import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-all duration-300">
        <NavbarComponent />
        <DarkModeToggle />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>      
    </>
  )
}

export default App
