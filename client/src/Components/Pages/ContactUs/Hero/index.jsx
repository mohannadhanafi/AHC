import React, { Component } from 'react';

export default class index extends Component {
    state = {
      background: 'https://deothemes.com/envato/casumi/html/img/page_title/contact.jpg',
      title: 'Contact',
      subTitle: 'Feel Free to get in Touch with us.',
    }

    render() {
      const { background, title, subTitle } = this.state;
      return (
        <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(${background})` }}>
          <div className="container">
            <div className="page-title__holder">
              <h1 className="page-title__title">{title}</h1>
              <p className="subtitle">{subTitle}</p>
            </div>
          </div>
        </section>
      );
    }
}
