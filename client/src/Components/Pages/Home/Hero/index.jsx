/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

export default class index extends Component {
    state= {
      hero: [
        {
          image: 'https://deothemes.com/envato/casumi/html/img/hero/hero_slide_2.jpg',
          title: 'Business Solution Experts',
        },
        {
          image: 'https://deothemes.com/envato/casumi/html/img/hero/hero_slide_3.jpg',
          title: 'Invest In Your Future',
        },
      ],
    }

    render() {
      const { hero } = this.state;
      return (
        <section className="hero">
          <div className="slick-custom-arrows">
            {hero.map(item => (
              <div className="hero__item slick-slide" key={uuid()}>
                <div className="row no-gutters">
                  <div className="col-lg-4 order-lg-1 order-2">
                    <div className="hero__img" style={{ backgroundImage: `url(${item.image})` }}>
                      <img src="img/hero/hero_slide_1.jpg" alt="" className="d-none" />
                    </div>


                    <div className="slick-custom-nav">
                      <button className="slick-custom-nav__prev slick-prev slick-arrow" type="button" aria-label="prev">Prev ></button>
                      <button className="slick-custom-nav__next slick-next slick-arrow" type="button" aria-label="next">Next ></button>
                    </div>

                  </div>
                  <div className="col-lg-8 order-1 order-lg-2">
                    <div className="hero__text-holder">
                      <h3 className="hero__subtitle">Advanced Consulting Services</h3>
                      <h1 className="hero__title hero__title--boxed">{item.title}
                        <span className="hero__dot">.</span>
                      </h1>
                      <Link to="/contact" className="btn btn--lg btn--color">
                        <span>Contact Us</span>
                      </Link>
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
