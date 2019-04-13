/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import uuid from 'uuid';

export default class index extends Component {
    state = {
      testimonials: [
        {
          image: 'https://deothemes.com/envato/casumi/html/img/testimonials/testimonial_1.jpg',
          title: 'Service Is Top-notch',
          desc: 'Every detail has been taken care these team are realy amazing and talented! They can help me with fast and accurate solutions to all kinds of issues. Love it! Five stars for them.',
          name: 'Joeby Ragpa',
          jobTitle: 'DeoThemes',
        },
        {
          image: 'https://deothemes.com/envato/casumi/html/img/testimonials/testimonial_2.jpg',
          title: 'They Are The Best',
          desc: 'Every detail has been taken care these team are realy amazing and talented! They can help me with fast and accurate solutions to all kinds of issues. Love it! Five stars for them.',
          name: 'Mick Jagger',
          jobTitle: 'Google',
        },
        {
          image: 'https://deothemes.com/envato/casumi/html/img/testimonials/testimonial_3.jpg',
          title: '100% Satisfied',
          desc: 'Every detail has been taken care these team are realy amazing and talented! They can help me with fast and accurate solutions to all kinds of issues. Love it! Five stars for them.',
          name: 'Jessica Lopez',
          jobTitle: 'Apple',
        },
      ],
    }

    render() {
      const { testimonials } = this.state;
      return (
        <section className="section-wrap pt-48">
          <div className="slick-custom-arrows">
          {testimonials.map(testimonial => (
            <div className="slick-slide ">
            <div className="testimonial">
              <div className="testimonial__img-holder" style={{ backgroundImage: `url(${testimonial.image})` }}>
                <img src="img/testimonials/testimonial_1.jpg" className="testimonial__img d-none" alt="" />
                <div className="slick-custom-nav">
                  <button className="slick-custom-nav__prev slick-prev slick-arrow" type="button" aria-label="prev">Prev ></button>
                  <button className="slick-custom-nav__next slick-next slick-arrow" type="button" aria-label="next">Next ></button>
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__info-container">
                  <h2 className="section-title">{testimonial.title}</h2>
                  <p className="testimonial__text">{testimonial.desc}</p>
                  <span className="testimonial__author">{testimonial.name}</span>
                  <span className="testimonial__company">{testimonial.jobTitle}</span>
                </div>
              </div>
            </div>
          </div>
          ))}
          </div>
        </section>
      );
    }
}
