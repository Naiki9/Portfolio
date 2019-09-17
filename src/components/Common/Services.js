import React, {Component} from 'react';

import SingleService from './SingleService';
const services = [
    {title: 'Playful', description: 'While deliberating on how to meet your demands Isometimes Play in-between in order to put my head straight to avoid brain drain.', icon: 'fa-shopping-cart'},
    {title: 'Responsive', description: 'All Aplication built by Us are all responsive on both mobile and desktop', icon: 'fa-shopping-cart'},
    {title: 'Mobile Apps', description: 'I build Mobile apps with Java. Currently I do not have any Mobile App to my name but soon I will put up a link to one of my projects that I am currently working on.', icon: 'fa-mobile'}
]
class Services extends Component{
    render(){
        return(
            <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">List of services we offer</h3>
                </div>
              </div>
              <div className="row text-center">
                {services.map((service, index) => {
                    return <SingleService {...service} key={index} />
                })}
                
             </div>    
            </div>
          </section>
        )
    }
}
export default Services;