import React from "react";
import TypingEffect from "./Typing";

function HomeSection(){
    return(
      <header className="header">
        <img className="profilepic" src= "./images/orange-Avatar3.svg" alt="Avatar of Gabrielle Jacobs" />
        <TypingEffect/>
        <div className="socials">
          <a href="https://github.com/GabbyJ" target="_blank" rel="noreferrer noopener"><i className="fab fa-github" /></a>
          <a href="https://www.linkedin.com/in/gabrielle-jacobs-9a890473" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in" /></a>
          <a href="sms:+1412-266-1336" target="_blank" rel="noreferrer noopener"><i className="fas fa-mobile-alt" /></a>
          <a href="mailto:GabbyJ424@gmail.com" target="_blank" rel="noreferrer noopener"><i className="fas fa-envelope" /></a>
        </div>
      </header>
    );
  }

export default HomeSection;