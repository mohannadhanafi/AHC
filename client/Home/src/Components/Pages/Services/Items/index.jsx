import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class index extends Component {
    state = {
      items: [
        {
          icon: 'o-business-report-1',
          title: 'Strategy & Planning',
          CTA: 'Read More',
        },
        {
          icon: 'o-sales-performance-up-1',
          title: 'Finance Services',
          CTA: 'Read More',
        },
        {
          icon: 'o-social-1',
          title: 'Management',
          CTA: 'Read More',
        },
        {
          icon: 'o-synced-book-1',
          title: 'Audit and Evaluation',
          CTA: 'Read More',
        },
        {
          icon: 'o-special-price-1',
          title: 'Taxes Management',
          CTA: 'Read More',
        },
        {
          icon: 'o-health-1',
          title: 'Insurance Services',
          CTA: 'Read More',
        },
      ],
    }

    render() {
      const { items } = this.state;
      return (
        <div className="section-wrap pt-80 pb-0 services--page">
          <div className="container">
            <div className="row">
              {items.map(item => (
                <div className="col-lg-4">
                  <Link to="/" className="service box-shadow hover-line hover-down spec--service">
                    <i className={`service__icon ${item.icon}`} />
                    <h4 className="service__title">{item.title}</h4>
                    <Link to="/" className="btn btn--lg btn--color service--cta">
                      <span>{item.CTA}</span>
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
