import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <div>

                <footer class="footer-section bg-dark-gray section-padding">
                    <div class="container container-wide">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="footer-content">
                                {/* <div class="footer-logo text-center">
                                    <img src="assets/images/logo/logo.svg" alt="Adeniyi logo"/>
                                </div>  */}
                                <div class="email-box"><h4 class="text-center">
                                    <a href="#">olabisi94@gmail.com</a></h4> 
                                    <h4 class="text-center"><a href="#">+234 8163671645</a></h4>
                                </div> 
                                <div class="footer-social text-center ">
                                     <ul><li><a href="https://www.instagram.com/olabisi_aa/" target="_blank"><i class="fab fa-instagram"></i></a></li> 
                                     <li><a href="https://twitter.com/olabisi_aa" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                     <li><a href="https://fb.com/olabisi94" target="_blank"><i class="fab fa-facebook"></i></a></li> 
                                     <li><a href="mailto:olabisi94@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

                <div class="copyright bg-dark">
                    <div class="container container-wide">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright-content">
                                    <h4>Copyrights © 2018 All Rights Reserved by <span><a href="#">Naiki</a></span></h4> 
                                    <h4 class="xs-mt-10">Designed by <span><a href="#">Adeniyi Olabisi</a></span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Footer;