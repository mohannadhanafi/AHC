import React, { Component } from 'react';

export default class index extends Component {
    state = {}

    render() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="footer__widgets">
              <div className="row">

                <div className="col-lg-3 col-md-6">
                  <div className="widget widget-about-us">

                    <a href="index.html" className="logo-container flex-child">
                      <img className="logo" src="https://i.ibb.co/R7C00gt/logo.png" alt="logo" />
                    </a>
                    <div className="socials mt-32">
                      <a href="#" className="social social-twitter" aria-label="twitter" title="twitter" target="_blank"><i className="ui-twitter" /></a>
                      <a href="#" className="social social-facebook" aria-label="facebook" title="facebook" target="_blank"><i className="ui-facebook" /></a>
                      <a href="#" className="social social-google-plus" aria-label="google plus" title="google plus" target="_blank"><i className="ui-google" /></a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3 offset-lg-3 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h5 className="widget-title">Solutions</h5>
                    <ul>
                      <li><a href="#">Finance Strategy</a></li>
                      <li><a href="#">Advertising</a></li>
                      <li><a href="#">SMM</a></li>
                      <li><a href="#">SEO</a></li>
                      <li><a href="#">Google AdWords</a></li>
                    </ul>
                  </div>
                </div>


                <div className="col-lg-3 col-md-6">
                  <div className="widget widget-address">
                    <h5 className="widget-title">Company</h5>
                    <ul>
                      <li><address>8910 University Center Lane Suite 620 San Diego, CA 92102</address></li>
                      <li>
                        <span>Phone: </span>
                        <a href="tel:+1-800-1554-456-123">+ 1 (800) 155 4561</a>
                      </li>
                      <li>
                        <span>Email: </span>
                        <a href="mailto:hi@margin.com">hi@margin.com</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="widget widget_nav_menu">
                    <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 text-right text-md-center">
                  <span className="copyright">






























                  &copy; 2019 Casumi, Made by
                    {' '}
                    <a href="https://deothemes.com">DeoThemes</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
}
