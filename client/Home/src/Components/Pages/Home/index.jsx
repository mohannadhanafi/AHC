import React, { Component, Fragment } from 'react';
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
    loading: true,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    // )
    );
  }
}
