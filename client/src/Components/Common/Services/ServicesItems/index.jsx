/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

export default function index({ services }) {
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
