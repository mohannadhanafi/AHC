/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getTitles from '../../../Redux/actions/titles';
import Title from './Title';
import ServicesItemsSlider from './ServicesItemsSlider';
import ServicesItems from './ServicesItem';

class index extends Component {
  state = {
    services: [],
  }


  componentDidMount() {
    axios('/api/v2/core').then((result) => {
      const { data } = result;
      this.setState({ services: data });
    });
  }

  render() {
    const { slider, contacts, titles } = this.props;
    const { services } = this.state;
    return (
      <>
        <Title title={titles.length && titles[0].coreTitle} />
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

const mapStateToProps = ({ titles }) => titles;
export default connect(mapStateToProps, { getTitles })(index);
