import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Reusable Component
import Services from '../Common/Services';
import AboutMe from '../Common/AboutMe';
import AboutBrief from '../Common/AboutBrief';
import Footer from '../Common/Footer';
class Home extends Component{
  
    render(){
        return(
            <div className="bg-grey">
               <Header
                title="Welcome To My World!"
                subtitle="I Look Forward To Working With You"
                buttonText="Tell me More"
                link="/services"
                showButton={true}
                image={image}
               />
               <AboutBrief />
               {/* <Services /> */}
               <AboutMe />
               <Footer />
            </div>
        )
    }
}

export default Home;