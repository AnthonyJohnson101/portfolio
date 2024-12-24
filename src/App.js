import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <main className='main-background'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
