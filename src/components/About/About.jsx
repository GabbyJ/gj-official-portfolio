import React from "react";

function AboutSection(){
    return(
        <section className="about" id="about">
        <h2>About Me</h2>
        <p className="summary">Born and raised Pittsburgher who now lives in Dallas, TX.
          I'm a self taught web developer who loves learning as much as I can. In 
          my free time, I'm usually playing an instrument, watching movies,
          or traveling the world. Keep scrolling down to find out more about me!
        </p>
        <a href="./images/Gabrielle_Jacobs_Resume.pdf" target="_blank" rel="noreferrer noopener"><button>View Resume</button></a>
        <a href="#portfolio"><button>View Portfolio</button></a>
      </section>
    );
}

export default AboutSection;