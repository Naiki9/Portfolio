import React, {Component} from 'react';
import uiux from '../assets/img/uiux.jpeg';
import webdesign from '../assets/img/webdesign.jpeg';
import webdev from '../assets/img/webdev.jpeg';

class AboutMe extends Component{
    render(){
        return(
            <section>
                {/* <!-- service section start --> */}
        <div className="service-section section-padding">
            <div className="container container-wide">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="sidebar">
                            <div className="section-title-one sidebar__inner">
                                <div className="section-title-one-inner">
                                    <h3><span>My</span> services</h3>
                                    <p>Business is all about the customer: what the customer wants and what they get. Generally, every customer wants a product or service that solves their problem, worth their money, and is delivered with amazing customer service.</p>
                                    <div className="btn-group">
                                        <a className="btn" href="#">Hire me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- col end --> */}
                    <div className="col-lg-7 col-12">
                        <div className="service-wrapper row">
                            <div className="service col-12">
                                <div className="service-inner">
                                    <div className="service-image">
                                        <img src={uiux} alt="service img"/>
                                    </div>
                                    <div className="service-content">
                                        <h4>UI/UX design</h4>
                                        <span className="service-bar"></span>
                                        <p>I design an effective and usable User Experience and User Interface for your web and mobile applications.   Do you have an initial idea or sketch of your amazing product in your mind ? Do share it with me i will turn your idea into the next level of realization and will make it happen.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- service-item --> */}
                            <div className="service col-12">
                                <div className="service-inner">
                                    <div className="service-image">
                                        <img src={webdesign} alt="service img"/>
                                    </div>
                                    <div className="service-content">
                                        <h4>web design</h4>
                                        <span className="service-bar"></span>
                                        <p>I create and design a unique, stunning, professional and modern looking WebApp UI  for any resolution as per your demand and Specification.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- service-item --> */}
                            <div className="service col-12">
                                <div className="service-inner">
                                    <div className="service-image">
                                        <img src={webdev} alt="service img"/>
                                    </div>
                                    <div className="service-content">
                                        <h4>web development</h4>
                                        <span className="service-bar"></span>
                                        <p>If you want to integrate your website or any Third-Party API. I can help you in API Integration.Integration of any WEB API as per your requirement. Personally I have worked and experience with 10+ Web, REST APIs. </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- service-item --> */}
                        </div>
                    </div>
                    {/* <!-- col end --> */}
                </div>
                {/* <!-- row end --> */}
            </div>
            {/* <!-- container end --> */}
        </div>
        {/* <!-- service section end --> */}

            </section>
        )
    }
}
export default AboutMe;



