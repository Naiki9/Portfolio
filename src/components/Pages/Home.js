import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Reusable Component
import Services from '../Common/Services';
class Home extends Component{
  
    render(){
        return(
            <div>
               <Header
                title="Welcome To My World!"
                subtitle="I Look Forward To Working With You"
                buttonText="Tell me More"
                link="/services"
                showButton={true}
                image={image}
               />
               <Services />
            </div>
        )
    }
}

export default Home;