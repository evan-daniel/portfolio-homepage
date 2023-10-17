import './styles/App.scss';

import Project from './components/Project'; 

import projects from './projects'; 

function App() {
  return (
    <div className="App">

      <div className="ouevre">
        EvanDaniel@evandaniel.com :

        <div className="portfolio">
          Development
        </div>

        <div className="portfolio">
          π Memorization
        </div>

        <div className="portfolio">
          Educational Technology
        </div>

        <div className="portfolio">
          Visual Art
        </div>
      </div>

      {/* <div className="projects">
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
      </div> */}

      </div>
  );
}

export default App; 