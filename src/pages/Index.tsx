import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
