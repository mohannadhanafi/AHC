import React from 'react';
import { connect } from 'react-redux';
import getOptions from '../../../Redux/actions/options';
import './style.css';

function index({ options }) {
  return (
    <div className="layout-minimal main--div" style={{ background: 'url(https://i.ibb.co/BPnN55B/image-13.jpg) no-repeat' }}>
      <div className="site-container">

        <header className="site-header">
          {/* {options && (
          <a href="/" className="logo mx-auto">
            <img src={`/api/v2/getFile/${options[0].logo}`} alt="" />
          </a>
          )} */}
        </header>

        <div className="home-block">
          <div className="home-block-inner">

            <div id="home" className="d-flex min-vh--100 section">
              <div className="container align-self-center">
                <h1 className="mb-3 h1">We bulid beautiful digital experiences.</h1>
                <p className="lead mb-5 p">Our website is under construction. We`ll be here soon with our new awesome site, subscribe to be notified.</p>
                <div className="row">
                  <div className="col-12 col-md-8 col-lg-7" />
                </div>
              </div>
            </div>

            <nav className="usefull-nav usefull-nav-pinned d-none d-xl-flex">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                <li><a href="#"><i className="fab fa-pinterest" /></a></li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
      {/* </> */}

    </div>
  );
}

const mapStateToProps = ({ options }) => options;
export default connect(mapStateToProps, { getOptions })(index);
