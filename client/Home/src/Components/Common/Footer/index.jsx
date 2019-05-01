/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import './style.css';
import getOptions from '../../../Redux/actions/options';

class index extends Component {
  state = {};

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


  render() {
    const {
      copyrights,
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
    const { options } = this.props;
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__widgets">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {options.length ? (
                  <div className="widget widget-about-us">
                    {footer_logo ? (
                      <a href="/" className="logo-container flex-child">
                        <img
                          className="logo"
                          src={`/api/v2/getFile/${options[0].footer_logo}`}
                          alt="logo"
                        />
                      </a>
                    ) : (
                      <a href="/" className="logo-container flex-child">
                        <img
                          className="logo"
                          src={`/api/v2/getFile/${options[0].logo}`}
                          alt="logo"
                        />
                      </a>
                    )}
                    <div className="socials mt-32">
                      <a
                        href={options[0].twitter || null}
                        className="social social-twitter"
                        aria-label="twitter"
                        title="twitter"
                        target="_blank"
                      >
                        <i className="ui-twitter" />
                      </a>
                      <a
                        href={options[0].facebook || null}
                        className="social social-facebook"
                        aria-label="facebook"
                        title="facebook"
                        target="_blank"
                      >
                        <i className="ui-facebook" />
                        {/* <img src={facebookIcon} alt="" /> */}
                      </a>
                      <a
                        href={options[0].google || null}
                        className="social social-google-plus"
                        aria-label="google plus"
                        title="google plus"
                        target="_blank"
                      >
                        <i className="ui-google" />
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="col-lg-4 offset-lg-2 col-md-6">
                <div className="widget widget_nav_menu">
                  <h5 className="widget-title">Opening Hours</h5>
                  <ul>
                    {monday_start && monday_end && (
                      <div className="row">
                        <div className="col-sm-4">
                          <li>
                            <a>Monday: </a>
                          </li>
                        </div>
                        <div className="col-sm-8">
                          <li>
                            <a>
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
                            <a>
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
                            <a>Wednesday: </a>
                          </li>
                        </div>
                        <div className="col-sm-8">
                          <li>
                            <a>
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
                          <a>Thursday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a> {`${moment(thursday_start).format(
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
                          <a>Friday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a> {`${moment(friday_start).format(
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
                          <a>Saturday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a> {`${moment(saturday_start).format(
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
                          <a>Sunday: </a>
                        </li>
                      </div>
                      <div className="col-sm-8">
                        <li>
                          <a> {`${moment(sunday_start).format(
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
              {options.length ? (
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget-address">
                    <h5 className="widget-title">Company</h5>
                    <ul>
                      <li>
                        <address>{options[0].footer_address || null}</address>
                      </li>
                      {options[0].mobile && (
                      <li>
                        <span>Phone: </span>
                        <a>{options[0].footer_mobile}</a>
                      </li>
                      )}
                      {options[0].email && (
                      <li>
                        <span>Email: </span>
                        <a href={`mailto:${options[0].footer_email}`}>{options[0].email}</a>
                      </li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : null}
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

const mapStateToProps = ({ options }) => options;
export default connect(mapStateToProps, { getOptions })(index);
