import React, { Component } from 'react';
import axios from 'axios';
import PageTitle from '../../Common/PageTitle';
import Team from './Team';
import Promo from '../../Common/Promo';
import Statistcs from '../../Common/Statistics';
import CallToAction from '../../Common/CallToAction';
import Loading from '../../Common/Loading';

export default class index extends Component {
  state = {
    title: '',
    coverImage: '',
    loading: true,
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
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
    const { title, coverImage, loading } = this.state;
    return (
      loading ? <Loading /> : (
        <>
          <PageTitle cover={coverImage} title={title} />
          <Promo />
          <Team />
          <Statistcs />
          <CallToAction />
        </>
      )
    );
  }
}
