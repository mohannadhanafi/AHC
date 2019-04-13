import React, { Component } from 'react';
import Hero from './Hero';
import Services from '../../Common/Services';

export default class index extends Component {
  state = {}

  render() {
    return (
      <>
        <Hero />
        <Services />
      </>
    );
  }
}
