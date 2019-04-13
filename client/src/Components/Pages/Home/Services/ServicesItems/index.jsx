/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import $ from 'jquery';

export default class index extends Component {
  state = {}

  componentDidMount() {
    $(document).ready(() => {
      (function ($) {
        $('.slick-service-boxes').slick({
          arrows: false,
          dots: true,
          slidesToShow: 3,
          infinite: false,

          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }(window.jQuery));
    });
  }

  render() {
    const { services } = this.props;
    return (
      <div className="offset-top-100">
        <div className="container">
          <div className="slick-service-boxes slick-slider-row">
            {services.map(service => (
              <div key={uuid()} className="slick-slide slick-slider-col slick-service-boxes__item">
                <Link to="/" className="service box-shadow hover-line hover-down">
                  <i className={`service__icon ${service.icon}`} />
                  <h4 className="service__title">{service.title}</h4>
                  <p className="service__text">{service.description}</p>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}
