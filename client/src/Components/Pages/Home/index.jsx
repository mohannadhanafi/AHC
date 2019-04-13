import React, { Component } from 'react';
import Hero from './Hero';
import Services from './Services';
import Promo from '../../Common/Promo';
import Plan from './Plan';
import Testimonials from './Testimonials';
import LatestNews from './LatestNews';
import CallToAction from '../../Common/CallToAction';
import Statistcs from '../../Common/Statistics';

export default class index extends Component {
  state = {}

  render() {
    return (
      <>
        <Hero />
        <Services />
        <Promo />
        <Plan />
        <Testimonials />
        <Statistcs />
        <LatestNews />
        <CallToAction />
      </>
    );
  }
}
