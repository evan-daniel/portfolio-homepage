// LIB 

import { useLocation } from 'react-router-dom';

// LOCAL 

import Project from './Project';

// JSON

import projects from '../projects'; 

const Portfolio = () => {
    const loc = useLocation(); 
    const cat = loc.pathname.substring(1); 
    
    return (
        <>
            <div className="projects">
                {projects.filter(project => {
                    return project.cat[cat]; 
                }).map((project, index) => {
                    return <Project 
                        key={ index }
                        slug= { project.slug }
                        title={ project.title } 
                        pdf={ project.pdf }
                        link={ project.link }
                        description={ project.description } 
                        img={ project.img }
                    />
                })}
            </div>
        </>
    )
}

export default Portfolio; 