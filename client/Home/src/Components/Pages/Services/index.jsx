import React, { Component } from 'react';
import Hero from './Hero';
import Items from './Items';

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero />
        <Items />
      </>
    );
  }
}
