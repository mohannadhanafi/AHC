/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import uuid from 'uuid';
import Next from './next';
import Prev from './prev';

export default class index extends Component {
  state = {
    testimonials: [],
    settings: {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      autoplay: true,
      arrows: false,
    },
  };

  componentWillMount() {
    axios('/api/v2/clients/getAll').then((result) => {
      const { data } = result;
      this.setState({ testimonials: data });
    });
  }

  render() {
    const { testimonials, settings } = this.state;
    return (
      <section className="section-wrap pt-48">
        <div className="container">
          <Slider {...settings}>
            {testimonials.length > 0
              ? testimonials.map(testimonial => (
                  <div key={uuid()} className="slick-slide ">
                    <div className="testimonial">
                      <div
                        className="testimonial__img-holder"
                        style={{
                          backgroundImage: `url(/api/v2/getFile/${
                            testimonial.image
                          })`,
                        }}
                      >
                        <img
                          src="img/testimonials/testimonial_1.jpg"
                          className="testimonial__img d-none"
                          alt=""
                        />
                        {/* <div className="slick-custom-nav">
                          <button
                            className="slick-custom-nav__prev slick-prev slick-arrow"
                            type="button"
                            aria-label="prev"
                          >
                            Prev >
                          </button>
                          <button
                            className="slick-custom-nav__next slick-next slick-arrow"
                            type="button"
                            aria-label="next"
                          >
                            Next >
                          </button>
                        </div> */}
                      </div>
                      <div className="testimonial__info">
                        <div className="testimonial__info-container">
                          <h2 className="section-title">{testimonial.title}</h2>
                          <p className="testimonial__text">
                            {testimonial.description}
                          </p>
                          <span className="testimonial__author">
                            {testimonial.name}
                          </span>
                          <span className="testimonial__company">
                            {testimonial.jobTitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              ))
              : null}
          </Slider>
          {/* <div className="slick-custom-arrows">
        {testimonials.length > 0 ? (
          testimonials.map(testimonial => (
            <div className="slick-slide ">
            <div className="testimonial">
              <div className="testimonial__img-holder" style={{ backgroundImage: `url(/api/v2/getFile/${testimonial.image})` }}>
                <img src="img/testimonials/testimonial_1.jpg" className="testimonial__img d-none" alt="" />
                <div className="slick-custom-nav">
                  <button className="slick-custom-nav__prev slick-prev slick-arrow" type="button" aria-label="prev">Prev ></button>
                  <button className="slick-custom-nav__next slick-next slick-arrow" type="button" aria-label="next">Next ></button>
                </div>
              </div>
              <div className="testimonial__info">
                <div className="testimonial__info-container">
                  <h2 className="section-title">{testimonial.title}</h2>
                  <p className="testimonial__text">{testimonial.description}</p>
                  <span className="testimonial__author">{testimonial.name}</span>
                  <span className="testimonial__company">{testimonial.jobTitle}</span>
                </div>
              </div>
            </div>
          </div>
          ))
        ) : null}
        </div> */}
        </div>
      </section>
    );
  }
}
