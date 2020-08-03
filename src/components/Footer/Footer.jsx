import React from "react";

function Footer() {
    return(
        <div>
            {/* FOOTER HR */}
            <div className="footer-hr">
                <hr className="line-top-footer" />
                <hr className="line-bottom-footer" />
            </div>
            {/* FOOTER */}
            <footer>
                <section className="footer" data-aos="fade-up" data-aos-duration="700">
                    <div className="footer-contact">
                        <img className="logo-footer" src="../../images/gj-logo-orange.png" alt="Logo saying 'GJ'" />
                        <p>Live like no one else, so you can live like no one else.</p>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com/GabbyJ" target="_blank" rel="noreferrer noopener"><i className="fab fa-github" /></a>
                        <a href="https://www.linkedin.com/in/gabrielle-jacobs-9a890473" target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in" /></a>
                        <a href="sms:+1412-266-1336" target="_blank" rel="noreferrer noopener"><i className="fas fa-mobile-alt" /></a>
                        <a href="mailto:GabbyJ424@gmail.com" target="_blank" rel="noreferrer noopener"><i className="fas fa-envelope" /></a>
                    </div>
                    <hr />
                    <p className="copyright">© 2020 Gabrielle Jacobs</p>
                </section>
            </footer>
        </div>
    );
}

export default Footer;