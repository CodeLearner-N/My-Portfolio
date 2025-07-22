import Hero from './Components/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ThemeToggle from './Components/ThemeToggle';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Services from './Pages/Services';

function App() {
  return (
 <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;