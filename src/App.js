import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ParticleBg from './components/particles'

function App() {
  return (
    <main className='main-background'>
      <ParticleBg id='particles' />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </main>
  );
}

export default App;
