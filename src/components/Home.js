import React from 'react';
import signinform from "../img/active-states.jpg"
import socialmedia from "../img/active-states-dark1.jpg"
import fourcards from "../img/desktop-design.jpg"

import githubicon from "../img/github.svg" 
const home = () => {
    return (
        <div className="home-flex"> 
       <div className="Home">
           <img src={socialmedia} className="project" alt="Project" /><br />
           <a href="https://github.com/mlndh/frontendmentor/tree/master/social-media-dashboard-with-theme-switcher-master"> <img src={githubicon} className="icon" alt="Github" /> <p> Se projektet på GitHub</p></a>


</div>
<div className="Home">

<img src={signinform} className="project" alt="Project" /><br />
<a href="https://github.com/mlndh/frontendmentor/tree/master/intro-component-with-signup-form-master"> <img src={githubicon} className="icon" alt="Github" /> <p> Se projektet på GitHub</p></a>

       </div>
       <div className="Home">

<img src={fourcards} className="project" alt="Project" /><br />
<a href="https://github.com/mlndh/frontendmentor/tree/master/four-card-feature-section-master"> <img src={githubicon} className="icon" alt="Github" /> <p> Se projektet på GitHub</p></a>

       </div>
       </div>
    );
}
 
export default home;