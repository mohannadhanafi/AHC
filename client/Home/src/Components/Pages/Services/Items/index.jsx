import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default class index extends Component {
    state = {
      items: [],
    }

    componentDidMount() {
      axios.get('/api/v2/core').then((result) => {
        const { data } = result;
        this.setState({ items: data });
      });
    }


    render() {
      const { items } = this.state;
      return (
        <div className="section-wrap pt-80 pb-0 services--page">
          <div className="container">
            <div className="row">
              {items.map(item => (
                <div className="col-lg-4">
                  <Link to={`/service/${item.id}`} className="service box-shadow hover-line hover-down spec--service">
                    {/* <i className={`service__icon ${item.icon}`} /> */}
                    <img className="service__icon" src={`/api/v2/getFile/${item.icon}`} alt="icon" />
                    <h4 className="service__title">{item.title}</h4>
                    <Link to={`/service/${item.id}`} className="btn btn--lg btn--color service--cta">
                      <span>Read More</span>
                    </Link>
                    {/* <p className="service__text">We also provide tangible results and measurable long-term value business.</p> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
}
