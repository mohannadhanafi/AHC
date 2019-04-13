/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import uuid from 'uuid';

export default class index extends Component {
    state = {
      title: 'Behind the Story',
      description: 'By helping millions of businesses learn more about their customers, we like to think we know a thing or two about customer satisfaction.',
      statistcs: [
        {
          icon: 'o-edit-folder-1',
          number: '499+',
          title: 'Sucessfully Completed Cases',
        },
        {
          icon: 'o-handshake-1',
          number: '100%',
          title: 'Satisfaction of our customers',
        },
        {
          icon: 'o-certificate-1',
          number: '550',
          title: 'Highly specialised consultants',
        },
        {
          icon: 'o-dollar-bill-1',
          number: '3x',
          title: 'Increased Profits',
        },
      ],
    }

    render() {
      const { title, description, statistcs } = this.state;
      return (
        <section className=" pb-40 pb-md-24" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/pattern.png)' }}>
          <div className="container">
            <div className="row title-row">
              <div className="col-lg-5">
                <h2 className="section-title mb-40 mb-sm-24">{title}</h2>
                <p className="subtitle lead">{description}</p>
              </div>
            </div>

            <div className="row statistic-row">
              {statistcs.map(statistc => (
                <div className="col-lg-3 col-sm-6" key={uuid()}>
                  <div className="statistic">
                    <i className={`statistic__icon ${statistc.icon}`} />
                    <span className="statistic__number">{statistc.number}</span>
                    <h5 className="statistic__title">{statistc.title}</h5>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      );
    }
}
