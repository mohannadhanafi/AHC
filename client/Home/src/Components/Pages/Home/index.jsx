import React, { Component } from 'react';
import $ from 'jquery';
import Hero from './Hero';
import Services from '../../Common/Services';
import Promo from '../../Common/Promo';
import Plan from './Plan';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import CallToAction from '../../Common/CallToAction';
import Statistcs from '../../Common/Statistics';

export default class index extends Component {
  state = {
    slider: true,
  }

  componentWillMount() {
    $(document).ready(() => {
      (function ($) {
        $('.slick-custom-arrows').each(function (idx, item) {
          const carouselId = `carousel-${idx}`;
          this.id = carouselId;

          $(this).slick({
            slide: `#${carouselId} .slick-slide`,
            appendArrows: `#${carouselId} .slick-custom-nav`,
            arrows: true,
            nextArrow: `#${carouselId} .slick-custom-nav__next`,
            prevArrow: `#${carouselId} .slick-custom-nav__prev`,
            slidesToShow: 1,
            fade: true,
            adaptiveHeight: true,
            cssEase: 'linear',
          });
        });
      }(window.jQuery));
    });
  }

  render() {
    const { slider } = this.state;
    return (
      <>
        <Hero />
        <Services
          slider={slider}
        />
        <Promo />
        <Testimonials />
        <Plan />
        <Statistcs />
        <LatestNews />
        <CallToAction />

      </>
    );
  }
}
