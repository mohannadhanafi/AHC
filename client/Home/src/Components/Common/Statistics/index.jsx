/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import './style.css';

export default class index extends Component {
    state = {
      title: '',
      description: '',
      statistcs: [],
    }

    componentWillMount() {
      axios('/api/v2/statistics').then((result) => {
        const { data } = result;
        console.log(data);
        this.setState({ statistcs: data });
      });
    }

    componentDidMount() {
      axios('/api/v2/getTitle').then((result) => {
        const { data } = result;
        const { statisticstitle, statisticsdesc } = data[0];
        this.setState({ title: statisticstitle, description: statisticsdesc });
      });
    }


    render() {
      const { title, description, statistcs } = this.state;
      const { background } = this.props;
      return (
        <section className="pb-40 pt-40 pb-md-24 section-wrap" style={background ? ({ background: 'url(https://deothemes.com/envato/casumi/html/img/pattern.png)', backgroundColor: ' #16133E' }) : ({ background: '#F7F9FA' })}>
          <div className="container">
            <div className="row title-row">
              <div className="col-lg-5">
                <h2 className="section-title mb-40 mb-sm-24">{title}</h2>
                <p className="subtitle lead">{description}</p>
              </div>
            </div>

            <div className="row statistic-row">
              {statistcs.slice(0, 4).map(statistc => (
                <div className="col-lg-3 col-sm-6" key={uuid()}>
                  <div className="statistic">
                    <i className="statistic__icon o-edit-folder-1" />
                    {/* <img className="statistic__icon" src={`/api/v2/getFile/${statistc.icon}`} alt="" /> */}
                    <span className="statistic__number">{statistc.count}</span>
                    <h5 className="statistic__title">{statistc.title}</h5>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      );
    }
}
