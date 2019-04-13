import React, { Component } from 'react';
import PageTitle from '../../Common/PageTitle';
import Team from './Team';
import Promo from '../../Common/Promo';
import CallToAction from '../../Common/CallToAction';
import Statistcs from '../../Common/Statistics';

export default class index extends Component {
  state = {
    title: 'We’re Casumi Business Consulting Agency',
    coverImage: 'https://deothemes.com/envato/casumi/html/img/page_title/about_us.jpg',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
