import './styles/App.scss';

import Project from './components/Project'; 

import projects from './projects'; 

import hero from './img/TakeANumber.gif'; 

function App() {
  return (
    <div className="App">

      <img className="hero" src={ hero } />
      
      <div className="bio">
        {/* <div className="headline">
          <span className="word">evan</span>
          <span className="word">daniel</span>
          <span className="word">recites</span>
          <span className="word">π</span>
          <span className="word">from</span>
          <span className="word">memory</span>
        </div> */}

        <div className="headline">
          <span className="word">evan</span>
          <span className="word">daniel</span>
          <span className="word">explores</span>
          <span className="word">knowledge</span>
          <span className="word">through</span>
          <span className="word">media</span>
        </div>
        
        <div className="copy">
          Evan Daniel is a media artist who specializes in educational technology, data visualization, and game and interaction design.  He has degrees in Digital Media and Painting from RISD, where his MFA thesis research focused on the philosophical and psychological interpretation of numerical knowledge.  His work often leverages tools related to web, game, and software development; design, media, and video; and fine art.  His practice is informed by his memorization of the number π to ten thousand digits, a skill that he has continued to rehearse for over a decade.  When π is present in his work, it is always recited from memory.  His work has been featured in The Guardian, Core77, and on Intel's Facebook page.  
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