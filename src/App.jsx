import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import TechnicalProjects from './components/TechnicalProjects'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechnicalProjects />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
