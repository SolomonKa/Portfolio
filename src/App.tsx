import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar/Navbar'
import Project from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'
import Skills from './Components/Skills/Skills'

function App() {
  
  return (
    <>  
      <Navbar />
      <main>
          <About />
          <Skills />
          <Project />
          <Resume />
          <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
