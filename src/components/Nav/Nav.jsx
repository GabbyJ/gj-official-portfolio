import React, {Component} from "react";
import $ from "jquery";

class Nav extends Component{
    componentDidMount(){
        $('.nav-toggle').click(function(e) {
  
            e.preventDefault();
            $("html").toggleClass("openNav");
            $(".nav-toggle").toggleClass("active");
          
          });
    }

    render(){
        return(
            <div className="primary-nav" data-aos="fade-right" data-aos-duration="700">
                <button href="#" className="hamburger open-panel nav-toggle">
                    <span className="screen-reader-text">Menu</span>
                </button>
                <nav role="navigation" className="menu">
                    <img className="logo" src="./images/gj-logo-red-orange.png" alt="Logo saying 'GJ'" />
                    <div className="overflow-container">
                        <ul className="menu-dropdown">
                        <li><a href="#home">Home</a><span className="icon"><i className="fas fa-home" data-aos="fade-right" data-aos-duration="700"/></span></li>
                        <li><a href="#about">About</a><span className="icon"><i className="fas fa-address-card" data-aos="fade-right" data-aos-duration="700"/></span></li>
                        <li><a href="#services">Services</a><span className="icon"><i className="fas fa-laptop-code" data-aos="fade-right" data-aos-duration="700"/></span></li>
                        <li><a href="#portfolio">Portfolio</a><span className="icon"><i className="fas fa-folder-open" data-aos="fade-right" data-aos-duration="700"/></span></li>
                        <li><a href="#contact">Contact{/* / Hire */}</a><span className="icon"><i className="fa fa-handshake" data-aos="fade-right" data-aos-duration="700"/></span></li>
                        {/* If I can figure out how to link to active tabs, use these instead of Contact / Hire
                        <li><a href="#contact">Contact</a><span className="icon"><i className="fa fa-envelope" /></span></li>
                        <li><a href="#hire">Hire</a><span className="icon"><i className="fas fa-handshake" /></span></li>
                        */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;