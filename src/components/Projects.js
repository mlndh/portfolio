import React from 'react';

import githubicon from "../img/github.svg"
import mailicon from "../img/envelope.svg"
import linkedinicon from "../img/linkedin.svg"

const Projects = () => {
    return (
       <div className="Projects">
               <img src={githubicon} className="icon" alt="Github" />
    <img src={mailicon} className="icon" alt="MAil" /> 
    <img src={linkedinicon} className="icon" alt="Linkedin" />


       </div>
    );
}
 
export default Projects;