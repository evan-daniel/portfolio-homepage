import './styles/App.scss';

import Project from './components/Project'; 

import projects from './projects'; 

import hero from './img/Evan-Daniel_Take-A-Number.gif'; 

function App() {
  return (
    <div className="App">

      <img className="hero" src={ hero } />
      
      <div className="bio">
        <div className="headline">
          <span className="word">evan</span>
          <span className="word">daniel</span>
          <span className="word">recites</span>
          <span className="word">π</span>
          <span className="word">from</span>
          <span className="word">memory</span>
        </div>
        
        <div className="copy">
          The foundation of my artistic practice is an inquiry into the concept of knowledge.  Knowledge is a central experience in our personal and social lives.  I would argue that its primacy as a philosophical topic stems from philosophers' tendency to see it as a source of meaning.  Knowledge has long driven inquiry within aesthetics and the theory of art, and it has informed design in fields such as data visualization, attention, and perceptual organization.  
          My practice as a whole is informed by a longstanding activity in my life, the memorization of π.  I have memorized ten thousand digits of π, and I have been practicing them for over a decade.  This skill is a central voice in both my design and fine arts work.  In the former, I use myself as a test subject, tasking myself with reciting π in ways that reveal the core psychological mechanisms at work.  In the latter, I recite π as a performative act, with each performance becoming a game in which the outcome attempts to be a significant visualization.  
        </div>
      </div>

      <div className="projects">
        {projects.map(project => {
          return <Project 
            slug= { project.slug }
            title={ project.title } 
            pdf={ project.pdf }
            link={ project.link }
            description={ project.description } 
            img={ project.img }
          />
        })}
      </div>

      <div className="footer">
        <div className="contact">
          <div className="headline">
            Contact
          </div>
          <div className="email">
            evan@evandaniel.com
          </div>
          </div>
          <div className="copyright">
              © evan daniel 2023
          </div>
        </div>
      </div>
  );
}

export default App; 