/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import Slider from 'react-slick';
import axios from 'axios';
import './style.css';
import Loading from '../../../Common/Loading';

export default class index extends Component {
    state= {
      hero: [],
      settings: {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        arrows: false,
      },
      loading: true,
    }

    componentWillMount() {
      axios('/api/v2/hero/getAll').then((result) => {
        const { data } = result;
        this.setState(() => ({ hero: data }));
      });
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1500);
    }

    render() {
      const { hero, settings, loading } = this.state;
      return (
        loading ? (<Loading />) : (
          <section className="hero">
            <Slider {...settings}>
              {hero.map(item => (
                <Fragment key={uuid()}>
                  <div className="row no-gutters">
                    <div className="col-lg-4 order-lg-1 order-2">
                      <div
                        className="hero__img"
                        style={{
                          backgroundImage: `url(/api/v2/getFile/${item.image})`,
                        }}
                      />
                    </div>
                    <div className="col-lg-8 order-1 order-lg-2">
                      <div className="hero__text-holder">
                        <h3>{item.title}</h3>
                        <h1>{item.description}
                          <span className="hero__dot">.</span>
                        </h1>
                        <Link to="/contact" className="btn btn--lg btn--color">
                          <span>{item.cta}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </Slider>
          </section>
        )
      );
    }
}
