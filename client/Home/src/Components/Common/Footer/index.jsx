/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './style.css';

export default class index extends Component {
  state = {
    logo: '',
    address: '',
    copyrights: '',
    email: '',
    mobile: '',
    facebook: '',
    twitter: '',
    google: '',
    monday_start: '',
    monday_end: '',
  };

  componentWillMount() {
    axios('/api/v2/hours/getAll').then((result) => {
      const { data } = result;
      const {
        monday_start,
        monday_end,
        tuesday_start,
        tuesday_end,
        wednesday_start,
        wednesday_end,
        thursday_start,
        thursday_end,
        friday_start,
        friday_end,
        saturday_start,
        saturday_end,
        sunday_start,
        sunday_end,
      } = data[0];
      this.setState({
        monday_start,
        monday_end,
        tuesday_start,
        tuesday_end,
        wednesday_start,
        wednesday_end,
        thursday_start,
        thursday_end,
        friday_start,
        friday_end,
        saturday_start,
        saturday_end,
        sunday_start,
        sunday_end,
      });
    });
  }

  componentDidMount() {
    axios('/api/v2/getoptions').then((result) => {
      const { data } = result;
      const {
        logo,
        address,
        copyrights,
        email,
        mobile,
        facebook,
        twitter,
        google,
        footer_logo,
      } = data[0];
      this.setState({
        logo,
        address,
        copyrights,
        email,
        mobile,
        facebook,
        twitter,
        google,
        footer_logo,
      });
    });
  }

  render() {
    const {
      logo,
      address,
      copyrights,
      email,
      mobile,
      facebook,
      twitter,
      google,
      footer_logo,
      monday_start,
      monday_end,
      tuesday_start,
      tuesday_end,
      wednesday_start,
      wednesday_end,
      thursday_start,
      thursday_end,
      friday_start,
      friday_end,
      saturday_start,
      saturday_end,
      sunday_start,
      sunday_end,
    } = this.state;
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__widgets">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget widget-about-us">
                  {footer_logo ? (
                    <Link to="/" className="logo-container flex-child">
                      <img
                        className="logo"
                        src={`/api/v2/getFile/${footer_logo}`}
                        alt="logo"
                      />
                    </Link>
                  ) : (
                    <Link to="/" className="logo-container flex-child">
                      <img
                        className="logo"
                        src={`/api/v2/getFile/${logo}`}
                        alt="logo"
                      />
                    </Link>
                  )}
                  <div className="socials mt-32">
                    <a
                      href={twitter || null}
                      className="social social-twitter"
                      aria-label="twitter"
                      title="twitter"
                      target="_blank"
                    >
                      <i className="ui-twitter" />
                    </a>
                    <a
                      href={facebook || null}
                      className="social social-facebook"
                      aria-label="facebook"
                      title="facebook"
                      target="_blank"
                    >
                      <i className="ui-facebook" />
                    </a>
                    <a
                      href={google || null}
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
                    {monday_start && monday_end && (
                      <div className="row">
                        <div className="col-sm-4">
                          <li>
                            <a href="#">Monday: </a>
                          </li>
                        </div>
                        <div className="col-sm-8">
                          <li>
                            <a href="#">
                              {`${moment(monday_start).format(
                                'HH A',
                              )} - ${moment(monday_end).format('HH A')}`}
                            </a>
                          </li>
                        </div>
                      </div>
                    )}
                    {tuesday_start && tuesday_end && (
                      <div className="row">
                        <div className="col-sm-4">
                          <li>Tuesday:</li>
                        </div>
                        <div className="col-sm-8">
                          <li>
                            <a href="#">
                              {`${moment(tuesday_start).format(
                                'HH A',
                              )} - ${moment(tuesday_end).format('HH A')}`}
                            </a>
                          </li>
                        </div>
                      </div>
                    )}
                    {wednesday_start && wednesday_end && (
                      <div className="row">
                        <div className="col-sm-4">
                          <li>
                            <a href="#">Wednesday: </a>
                          </li>
                        </div>
                        <div className="col-sm-8">
                          <li>
                            <a href="#">
                              {`${moment(wednesday_start).format(
                                'HH A',
                              )} - ${moment(wednesday_end).format('HH A')}`}
                            </a>
                          </li>
                        </div>
                      </div>
                    )}
                    {thursday_start && thursday_end && (
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Thursday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#"> {`${moment(thursday_start).format(
                            'HH A',
                          )} - ${moment(thursday_end).format('HH A')}`}
                          </a>
                        </li>
                      </div>
                    </div>
                    )}
                    {friday_start && friday_end && (
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Friday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#"> {`${moment(friday_start).format(
                            'HH A',
                          )} - ${moment(friday_end).format('HH A')}`}
                          </a>
                        </li>
                      </div>
                    </div>
                    )}
                    {saturday_start && saturday_end && (
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Saturday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#"> {`${moment(saturday_start).format(
                            'HH A',
                          )} - ${moment(saturday_end).format('HH A')}`}
                          </a>
                        </li>
                      </div>
                    </div>
                    )}
                    {sunday_start && sunday_end && (
                    <div className="row">
                      <div className="col-sm-4">
                        <li>
                          <a href="#">Sunday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a href="#"> {`${moment(sunday_start).format(
                            'HH A',
                          )} - ${moment(sunday_end).format('HH A')}`}
                          </a>
                        </li>
                      </div>
                    </div>
                    )}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="widget widget-address">
                  <h5 className="widget-title">Company</h5>
                  <ul>
                    <li>
                      <address>{address || null}</address>
                    </li>
                    {mobile && (
                      <li>
                        <span>Phone: </span>
                        <a href={mobile}>{mobile}</a>
                      </li>
                    )}
                    {email && (
                      <li>
                        <span>Email: </span>
                        <a href={email}>{email}</a>
                      </li>
                    )}
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
              {copyrights && (
                <div className="col-lg-6 text-right text-md-center">
                  <span className="copyright">&copy; {copyrights}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
