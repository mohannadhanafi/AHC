import React, { Component } from 'react';
import axios from 'axios';
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
    title: 'Competency and Quality Services',
    services: [],
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    axios('/api/v2/core').then((result) => {
      axios('/api/v2/getTitle').then((titles) => {
        const { data } = result;
        const { data: dataTitles } = titles;
        const { coreTitle } = dataTitles[0];
        this.setState({ services: data, title: coreTitle });
      });
    });
  }

  render() {
    const { title, services, slider } = this.state;

    return (
      <>
        <Hero />
        {services.length >= 1 && (
        <Services
          title={title}
          services={services}
          slider={slider}
        />
        )}
        <Promo />
        <Plan />
        {/* <Testimonials /> */}
        <Statistcs />
        <LatestNews />
        <CallToAction />
      </>
    );
  }
}
