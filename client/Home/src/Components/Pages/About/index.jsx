import React, { Component } from 'react';
import axios from 'axios';
import PageTitle from '../../Common/PageTitle';
import Team from './Team';
import Promo from '../../Common/Promo';
import Statistcs from '../../Common/Statistics';
import CallToAction from '../../Common/CallToAction';

export default class index extends Component {
  state = {
    title: '',
    coverImage: '',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    axios.get('/api/v2/about').then((result) => {
      const { data } = result;
      const { title, image } = data;
      this.setState({ title, coverImage: image });
    });
  }

  render() {
    const { title, coverImage } = this.state;
    return (
      <>
        <PageTitle cover={coverImage} title={title} />
        <Promo />
        <Team />
        <Statistcs />
        <CallToAction />
      </>
    );
  }
}
