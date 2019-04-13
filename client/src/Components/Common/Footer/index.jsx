/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class index extends Component {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__widgets">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget widget-about-us">
                  <a href="index.html" className="logo-container flex-child">
                    <img
                      className="logo"
                      src="https://i.ibb.co/R7C00gt/logo.png"
                      alt="logo"
                    />
                  </a>
                  <div className="socials mt-32">
                    <a
                      href="#"
                      className="social social-twitter"
                      aria-label="twitter"
                      title="twitter"
                      target="_blank"
                    >
                      <i className="ui-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social social-facebook"
                      aria-label="facebook"
                      title="facebook"
                      target="_blank"
                    >
                      <i className="ui-facebook" />
                    </a>
                    <a
                      href="#"
                      className="social social-google-plus"
                      aria-label="google plus"
                      title="google plus"
                      target="_blank"
                    >
                      <i className="ui-google" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 offset-lg-2 col-md-6">
                <div className="widget widget_nav_menu">
                  <h5 className="widget-title">Opening Hours</h5>
                  <ul>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Monday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Tuesday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Wednesday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Thursday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Friday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Saturday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Sunday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#">08 AM - 06 PM</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget-address">
                  <h5 className="widget-title">Company</h5>
                  <ul>
                    <li>
                      <address>
                        8910 University Center Lane Suite 620 San Diego, CA
                        92102
                      </address>
                    </li>
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
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/insurance">Insurance</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-right text-md-center">
                <span className="copyright">
                  &copy; 2019 Casumi, Made by
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
