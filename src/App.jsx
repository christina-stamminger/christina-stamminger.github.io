import './App.css'
import Logo from './components/Logo.jsx';

function App() {

  return (
      <div>
      
      <Logo />
      <div className="buttons-container">
        <div className="home button">Home</div>
        <div className="aboutMe button">About Me</div>
        <div className="skills button">Skills</div>
        <div className="projects button">Projects</div>
        <div className="contact button">Contact</div>

      </div>
      </div>  
  )
}

export default App;
