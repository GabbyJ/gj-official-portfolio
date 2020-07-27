import React from "react";
import { DiJqueryLogo } from "react-icons/di";

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
                    <td><span><DiJqueryLogo className="jqueryLogo"/></span> jQuery</td>
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
                </tbody>
            </table>
        </div>
    );
}

export default SkillsTab;