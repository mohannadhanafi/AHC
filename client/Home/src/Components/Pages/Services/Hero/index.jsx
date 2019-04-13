import React, { Component } from 'react';

export default class index extends Component {
    state = {
      backgoround: 'https://deothemes.com/envato/casumi/html/img/page_title/services.jpg',
    }

    render() {
      const { backgoround } = this.state;
      return (
        <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(${backgoround})` }}>
          <div className="container">
            <div className="page-title__holder">
              <h1 className="page-title__title">We Provide Professional Full-Services</h1>
            </div>
          </div>
        </section>
      );
    }
}
