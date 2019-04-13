import React, { Component } from 'react';
import Title from './Title';
import Services from './ServicesItems';

export default class index extends Component {
    state = {
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
      const { title, services } = this.state;
      return (
        <>
          <Title title={title} />
          <Services services={services} />
        </>
      );
    }
}
