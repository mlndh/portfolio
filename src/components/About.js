import React from 'react';

import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import react from "../img/react.png"
import node from "../img/nodejs.png"
import git from "../img/git.png"


        
const About = () => {
    return (
        <React.Fragment> 
       <div className="About">
           <p> Mitt namn är Malin och jag är bosatt i Stockholm, jag pluggar front end developer på KYH sedan augusti 2019. <br>
           </br>
           Tidigare har jag arbetat inom trafikledning samt administration men har nu sadlat om till webbutveckling <br>
           </br>
           På fritiden sysslar jag med geocaching och gillar att träna, löpning och boxning är det som gäller då.
               </p>
               <div className="about-row">    
       <div className="about-icon"><img src={html} className="icon" alt="MAil" /></div>
       <div className="about-icon"><img src={css} className="icon" alt="MAil" /> </div>
       <div className="about-icon"> <img src={js} className="icon" alt="MAil" /></div>
       <div className="about-icon"> <img src={react} className="icon" alt="MAil" /></div>
       <div className="about-icon"> <img src={node} className="icon" alt="MAil" /></div>
       <div className="about-icon"><img src={git} className="icon" alt="MAil" /> </div>
       </div>
  
     






       </div>
       </React.Fragment>
    );
}
 
export default About;