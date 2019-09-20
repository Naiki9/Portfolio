import React, {Component} from 'react';

import bootstrap from '../assets/img/icons/bootstrap.png';
import html from '../assets/img/icons/html.png';
import css from '../assets/img/icons/css.png';
import javascript from '../assets/img/icons/javascript.png';
import figma from '../assets/img/icons/figma.png';
import php from '../assets/img/icons/php.png';
import reacti from '../assets/img/icons/react.png';
import ionic from '../assets/img/icons/ionic.png'; 
import git from '../assets/img/icons/git.png';
import java from '../assets/img/icons/java.png';
import mdb from '../assets/img/icons/mdb.png';

class AboutBrief extends Component{
    render(){
        return(
            <div class="about-section section-padding">
    <div class="container container-wide">
        <div class="about-wrapper row">
            <div class="col-sm-12 col-lg-6">
                <div class="about-content section-title-one">
                    <div class="section-title-one-inner">
                        <h3><span>about</span> me</h3> 
                        <p>Self-motivated web developer with a high level of experience working on multiple projects. Passionate and hardworking with a penchant for meeting deadlines. Interested in a role with a company that promotes best practices and offers a wealth of customer projects.</p> 
                        <div class="btn-group"><a download="" href="assets/document/AdeniyiCV.docx" class="btn">download my cv</a></div>
                    </div>
                </div>
            </div> 
            <div class="col-sm-12 col-lg-6">
                <div><img data-toggle="tooltip" data-placement="top" title="" src={html} class="img-responsive skill-img" data-original-title="HTML 5"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={css} class="img-responsive skill-img" data-original-title="CSS 3"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={javascript} class="img-responsive skill-img" data-original-title="Javascript"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={bootstrap} class="img-responsive skill-img" data-original-title="Bootstrap"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={git} class="img-responsive skill-img" data-original-title="Git"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={php} class="img-responsive skill-img" data-original-title="PHP"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={mdb} class="img-responsive skill-img" data-original-title="Material Design Bootstrap"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={java} class="img-responsive skill-img" data-original-title="java"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={reacti} class="img-responsive skill-img" data-original-title="Angular"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={ionic} class="img-responsive skill-img" data-original-title="Ionic Framework"/>
                    <img data-toggle="tooltip" data-placement="top" title="" src={figma} class="img-responsive skill-img" data-original-title="Figma"/>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default AboutBrief;