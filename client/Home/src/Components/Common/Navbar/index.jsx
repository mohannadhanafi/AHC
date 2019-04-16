import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './style.css';

class index extends Component {
  state = {
    logo: '',
    nav: [
      {
        id: 1,
        page: 'Home',
        link: '/',
        active: true,
      },
      {
        id: 2,
        page: 'Services',
        link: '/services',
        active: false,
      },
      {
        id: 3,
        page: 'Iinsurance',
        link: '/insurance',
        active: false,
      },
      {
        id: 4,
        page: 'About Us',
        link: '/about',
        active: false,
      },
      {
        id: 5,
        page: 'Contact Us',
        link: '/contact',
        active: false,
      },
    ],
  }

  componentWillMount() {
    const path = this.props.location.pathname;
    const { nav } = this.state;
    nav.forEach((item) => {
      if (item.link === path) item.active = true;
      else item.active = false;
    });
  }

  componentDidMount() {
    axios('/api/v2/getoptions').then((result) => {
      const { data } = result;
      const { logo } = data[0];
      this.setState({ logo });
    });
  }


  render() {
    const { logo, nav } = this.state;
    return (
      <header className="nav">
        <div className="nav__holder nav--sticky">
          <div className="container-fluid container-semi-fluid nav__container">
            <div className="flex-parent">

              <form role="search" method="get" className="nav__search-form">
                <input type="search" className="nav__search-input" id="nav__search-input" placeholder="Type &amp; Hit Enter" />
                <i className="ui-close nav__search-close" id="nav__search-close" />
              </form>

              <div className="nav__header">
                <Link to="/" className="logo-container">
                  <img className="logo" src={`/api/v2/getFile/${logo}`} alt="logo" />
                </Link>

                <button type="button" className="nav__icon-toggle" id="nav__icon-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="nav__icon-toggle-bar" />
                  <span className="nav__icon-toggle-bar" />
                  <span className="nav__icon-toggle-bar" />
                </button>
              </div>

              <nav id="navbar-collapse" className="nav__wrap collapse navbar-collapse nav--align-right">
                <ul className="nav__menu">
                  {nav.map(element => (
                    element.active ? (
                      <li className="active">
                        <Link to={element.link}>{element.page}</Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          to={element.link}
                          onClick={() => {
                            nav.forEach((item) => {
                              if (item.id === element.id) item.active = true;
                              else item.active = false;
                            });
                            this.setState(nav);
                            return null;
                          }}
                        >
                          {element.page}

                        </Link>
                      </li>
                    )
                  ))}
                </ul>


                <div className="nav__phone-mobile d-lg-none">
                  <Link to="/contact" className="btn btn--lg btn--color donate-button">
                    <span>Donate</span>
                  </Link>
                </div>


                <div className="nav__search-mobile d-lg-none">
                  <form role="search" method="get" className="search-form relative">
                    <input type="search" className="search-input" placeholder="Search" />
                    <button type="submit" className="search-button" aria-label="search button"><i className="ui-search search-icon" /></button>
                  </form>
                </div>

              </nav>


              <div className="nav__right d-none d-lg-flex">
                <div className="nav__right-item">
                  <Link to="/contact" className="btn btn--lg btn--color donate-button">
                    <span>Donate</span>
                  </Link>
                </div>
                <div className="nav__right-item nav__search">
                  <a href="#" className="nav__search-trigger" id="nav__search-trigger">
                    <i className="ui-search" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </header>
    );
  }
}
export default withRouter(index);
