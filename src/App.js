import './styles/App.scss';

import Project from './components/Project'; 

import projects from './projects'; 

import hero from './img/TakeANumber.gif'; 

function App() {
  return (
    <div className="App">

      <img className="hero" src={ hero } />
      
      <div className="bio">
        <div className="headline">
          evan daniel: <br />
          art about reciting π
        </div>

        <div className="copy">
          The number π begins "3.14159265358979…" and never becomes a repeating pattern.  Many people have used it to test their memory; I use the memorization of π for art and design.  
          
          <br /><br />

          In the projects below I recite π from memory by painting them; develop interactive environments to test myself; and propose novel apps to help people memorize and understand numbers.  
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
            Other Work
          </div>
          <div className="email">
            <a href="https://evandaniel.com">
              evandaniel.com
            </a>
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