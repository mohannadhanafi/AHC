/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class index extends Component {
    state = {
      CTA: 'Contact Us',
      background: 'https://deothemes.com/envato/casumi/html/img/cta/cta_img_1.jpg',
      title: '',
      description: '',
    }

componentDidMount= async () => {
  const result = await axios.get('/api/v2/getoptions');
  const { data } = result;
  const { ctatitle, ctasub } = data[0];
  this.setState({ title: ctatitle, description: ctasub });
}

render() {
  const {
    CTA, background, title, description,
  } = this.state;
  return (
    <section className="section-wrap call-to-action text-center section-wrap--pb-140 bg-white-gradient" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h3 className="call-to-action__title">{title}</h3>
            <p className="call-to-action__text lead">{description}</p>
            <Link to="/contact" className="btn btn--lg btn--color">
              <span>{CTA}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
}
