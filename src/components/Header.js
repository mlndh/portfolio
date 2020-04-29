import React from 'react';

import selfie from "../img/selfie.png"

function Header() {
  return (
    <div className="Header">
      <header className="Header">
      <h1> Malin DH</h1>
      <img src={selfie} className="selfie" alt="selfie" />

 
      </header>
    </div>
  );
}

export default Header;
