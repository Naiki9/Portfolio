import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class PageWrapper extends Component{
    
    render(){

        return(
          <div>
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">AO</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                    {/* <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/services">Services</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/team">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                    </li> */}
                    <div class="header-social text-center ">
                                     <ul><li><a href="https://www.instagram.com/olabisi_aa/" target="_blank"><i class="fab fa-instagram"></i></a></li> 
                                     <li><a href="https://twitter.com/olabisi_aa" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                     <li><a href="https://fb.com/olabisi94" target="_blank"><i class="fab fa-facebook"></i></a></li> 
                                     <li><a href="mailto:olabisi94@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li></ul>
                                </div></ul>
                </div>
                </div>
            </nav>
            {this.props.children}
          </div>  
        )
    }
}

export default PageWrapper;
