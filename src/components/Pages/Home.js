import React, {Component} from 'react';
import Header from '../Common/Header';

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
               />
            </div>
        )
    }
}

export default Home;