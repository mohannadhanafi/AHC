/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import ServicesItemsSlider from './ServicesItemsSlider';
import ServicesItems from './ServicesItem';

export default class index extends Component {
  state = {
    title: '',
    services: [],
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    axios('/api/v2/getTitle').then((titles) => {
      const { data } = titles;
      const { coreTitle } = data[0];
      this.setState({ title: coreTitle });
    });
  }

  componentDidMount() {
    axios('/api/v2/core').then((result) => {
      const { data } = result;
      this.setState({ services: data });
    });
  }

  render() {
    const { slider, contacts } = this.props;
    const { title, services } = this.state;
    return (
      <>
        <Title title={title} />
        {services.length ? (
          slider ? (
            <ServicesItemsSlider services={services} />
          ) : (
            <ServicesItems contacts={contacts} />
          )
        ) : null}
      </>
    );
  }
}
