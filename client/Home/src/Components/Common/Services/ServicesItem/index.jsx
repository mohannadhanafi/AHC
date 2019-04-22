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
              {services.slice(0, 6).map(service => (
                <div key={uuid()} className="col-lg-4">
                  <Link to={`/service/${service.id}`} className="service box-shadow hover-line hover-down">
                    {/* <i className={`service__icon ${service.icon}`} /> */}
                    <img className="service__icon" src={`/api/v2/getFile/${service.icon}`} alt="icon" />
                    <h4 className="service__title">{service.title}</h4>
                    <p className="service__text">{service.desc}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
}
