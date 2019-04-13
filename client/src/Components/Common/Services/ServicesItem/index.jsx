import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {}

    render() {
      const { services } = this.props;
      return (
        <div className="section-wrap offset-top-100 pt-0">
          <div className="container">
            <div className="row">
              {services.map(service => (
                <div key={uuid()} className="col-lg-4">
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
