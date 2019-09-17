import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img1 from '../assets/img/portfolio/01-thumbnail.jpg';

const portfolio =[
    {title: 'Threads', subtitle: 'Illustration', image: ''},
    {title: 'Explore', subtitle: 'Open to new experencies and learning new technologies', image: ''},
    {title: 'UI/UX', subtitle: 'Curently Learning to design UI using figma', image: ''},
    {title: 'Wordpress', subtitle: 'Knowledge of building wordpress themes.', image: ''},
    {title: 'voluntary Service', subtitle: 'I dedicate a part of my Sundays to mobilizing worshippers into church.', image: ''},
    {title: 'Lifestyle', subtitle: 'Less is more', image: ''},
    
]
class Portfolio extends Component{
    render(){
        return(
            <div>
                <section class="bg-light page-section" id="portfolio">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                            <h2 class="section-heading text-uppercase">Portfolio</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div class="row">
                            {portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index}/>
                            })}
                            
                            
                           
                           
                            
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;