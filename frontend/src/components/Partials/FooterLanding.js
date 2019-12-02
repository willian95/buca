import React, { Component } from 'react';

class FooterLanding extends Component {
    render() {
        return (

            <footer className="footer-bg">
                       
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3  col-sm-6 col-xs-12">
                                
                                <div className="widget">
                                <div className="logo"> <img alt="" src="images/logo.png"/> </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dolor eget erat fringilla port.</p>
                                <ul className="apps-donwloads">
                                    <li><img src="images/googleplay.png" alt="" /></li>
                                    <li><img src="images/appstore.png" alt="" /></li>
                                </ul>
                                </div>
                                
                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                
                                <div className="widget socail-icons">
                                <h5>Follow Us</h5>
                                <ul>
                                    <li><a className="Facebook" href=""><i className="fa fa-facebook"></i></a><span>Facebook</span></li>
                                    <li><a className="Twitter" href=""><i className="fa fa-twitter"></i></a><span>Twitter</span></li>
                                    <li><a className="Linkedin" href=""><i className="fa fa-linkedin"></i></a><span>Linkedin</span></li>
                                    <li><a className="Google" href=""><i className="fa fa-google-plus"></i></a><span>Google+</span></li>
                                </ul>
                                </div>
                                
                            </div>
                            <div className="col-md-2  col-sm-6 col-xs-12">
                                
                                <div className="widget my-quicklinks">
                                <h5>Quick Links</h5>
                                <ul >
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Faqs</a></li>
                                    <li><a href="#">Packages</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                                </div>
                                
                            </div>
                            <div className="col-md-5  col-sm-6 col-xs-12">
                                
                                <div className="widget widget-newsletter">
                                <h5>Singup for Weekly Newsletter</h5>
                                <div className="fieldset">
                                    <p>We may send you information about related events, webinars, products and services which we believe.</p>
                                    <form>
                                        <input className=""  type="text" />
                                        <input className="submit-btn" name="submit"  type="submit" /> 
                                    </form>
                                </div>
                                </div>
                                <div className="copyright">
                                <p>© 2017 Carspot All rights reserved. Design by <a href="http://themeforest.net/user/scriptsbundle/portfolio" target="_blank">Scriptsbundle</a> </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default FooterLanding