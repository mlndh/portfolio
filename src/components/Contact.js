import React from 'react';
import githubicon from "../img/github.svg"
import mailicon from "../img/envelope.svg"
import linkedinicon from "../img/linkedin.svg"


const Contact = () => {
    return (
    <div className="Contact">
     <a href="https://github.com/mlndh/Malin-DH.git"> <img src={githubicon} className="icon" alt="Github" /> <p> mlndh </p></a>
     <a href="https://github.com/mlndh/Malin-DH.git"> <img src={mailicon} className="icon" alt="MAil" /><p> malin.dufvahjerpe@student.kyh.se </p></a>
 <a href="https://www.linkedin.com/in/malin-dh-178972194">    <img src={linkedinicon} className="icon" alt="Linkedin" /> <p> Malin DH </p></a>

        
       </div>
    );
}
 
export default Contact;