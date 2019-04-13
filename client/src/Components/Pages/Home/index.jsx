import React, { Component } from 'react';
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
    services: [
      {
        icon: 'o-business-report-1',
        title: 'Strategy & Planning',
        description: 'We also provide tangible results and measurable long-term value business.',
      },
      {
        icon: 'o-sales-performance-up-1',
        title: 'Finance Services',
        description: 'We also provide tangible results and measurable long-term value business.',
      },
      {
        icon: 'o-social-1',
        title: 'Management',
        description: 'We also provide tangible results and measurable long-term value business.',
      },
      {
        icon: 'o-strategy-1',
        title: 'Sales growth',
        description: 'We also provide tangible results and measurable long-term value business.',
      },
    ],
  }

  render() {
    const { title, services, slider } = this.state;
    return (
      <>
        <Hero />
        <Services
          title={title}
          services={services}
          slider={slider}
        />
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
