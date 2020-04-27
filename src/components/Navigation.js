import React from 'react';
import { NavLink } from 'react-router-dom';
import menuicon from "../img/bars.svg"; 



const Navigation = () => {
    return (
       <div className="Navigation">
             <img src={menuicon} className="menu" alt="Menu" />

          <NavLink to="/">Start</NavLink>
          <NavLink to="/about">Om</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>

       </div>
    );
}
 
export default Navigation;