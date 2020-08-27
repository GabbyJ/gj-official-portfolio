import React from "react";
import { DiJqueryLogo, DiVisualstudio } from "react-icons/di";


function SkillsTab() {
    return(
        <div className="tab1-c">
            <table width="100%" border={0} cellSpacing={30}>
                <tbody>
                <tr>
                    <td><span><i className="fab fa-html5" /></span> HTML</td>
                    <td><span><i className="fab fa-bootstrap" /></span> Bootstrap</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-css3-alt" /></span> CSS</td>
                    <td><span><i className="fab fa-sass" /></span> SASS</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-js" /></span> Javascript</td>
                    <td><span><DiJqueryLogo className="DiLogo"/></span> jQuery</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-react" /></span> React</td>
                    <td><span><i className="fab fa-node" /></span> Node</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-python" /></span> Python</td>
                    <td><span><i className="fab fa-wordpress" /></span> WordPress</td>
                </tr>
                <tr>
                    <td><span><i className="fab fa-github" /></span> Git/Github</td>
                    <td><span><i className="fab fa-adobe" /></span> Adobe Creative Suite</td>
                </tr>
                <tr>
                    <td><span><i className="fas fa-terminal"></i></span> Command Line</td>
                    <td><span><DiVisualstudio className="DiLogo"/></span> Visual Studio Code</td>
                </tr>
                <tr>
                    <td><span><img src="./images/responsive.png" alt="phone, tablet, computer icon" className="DiLogo"/></span> Responsive Websites</td>
                    <td><span><img src="./images/w3c.png" alt="W3C icon" className="DiLogo"/></span> Web Accessibility</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SkillsTab;