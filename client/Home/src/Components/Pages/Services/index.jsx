import React, { Component } from 'react';
import Hero from './Hero';
import Items from './Items';
import Statistics from '../../Common/Statistics';
import CallToAction from '../../Common/CallToAction';

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero />
        <Items />
        <Statistics
          background
        />
        <CallToAction />
      </>
    );
  }
}
