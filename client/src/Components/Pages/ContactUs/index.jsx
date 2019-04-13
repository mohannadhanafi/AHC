import React, { Component } from 'react';
import Hero from './Hero';
import Services from '../../Common/Services';
import Form from './Form';

export default class index extends Component {
    state = {
      title: 'Let’s Create Something Together',
      services: [
        {
          icon: 'o-contact-1',
          title: 'Call Us',
          description: '+ 1 (800) 155 4561',
        },
        {
          icon: 'o-read-email-1',
          title: 'Email Us',
          description: 'themesupport@gmail.com',
        },
        {
          icon: 'o-pin-1',
          title: 'Visit Us',
          description: 'Melbourne\'s GPO 350 Bourke St.',
        },
      ],
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      const { title, services } = this.state;
      return (
        <div className="content-wrapper oh">
          <Hero />
          <Services
            title={title}
            services={services}
          />
          <Form />
          {/* <div id="google-map" className="gmap" data-address="V Tytana St, Manila, Philippines" /> */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406930702025!3d51.52873519756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2s!4v1554709514162!5m2!1sen!2s" width="100%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen />
          </div>
        </div>
      );
    }
}
