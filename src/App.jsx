import Logo from './components/Logo';
import Navigation from './components/Navigation';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Logo />
      <Navigation scrollToSection={scrollToSection} />
      <div id="aboutMe" className="section">
        <h2>about me</h2>
      
      </div>
      <div id="skills" className="section">
        <h2>skills</h2>
      </div>
      <div id="projects" className="section">
        <h2>projects</h2>
      </div>
      <div id="contact" className="section">
        <h2>contact</h2>
      </div>
    </div>
  );
};

export default App;
