/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default class index extends Component {
    state = {
      title: '',
      description: '',
      plan: ['$30 enrollment fee', '$30 per month', '$30 copay to any emergency visit or non-specialized physician visit.'],
      video: 'mov_bbb',
      image: '',
    }

    componentDidMount() {
      axios('/api/v2/getTitle').then((result) => {
        const { data } = result;
        const { plantitle, plandesc, planimage } = data[0];
        this.setState({ title: plantitle, description: plandesc, image: planimage });
      });
    }

    componentWillMount() {
      axios('/api/v2/plan/getAll').then((result) => {
        const { data } = result;
        this.setState({ plan: data });
      });
    }


    render() {
      const {
        title, description, plan, video, image,
      } = this.state;
      return (
        <section className="plan">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-md-72">
              {/* <img src={`/api/v2/getFile/${image}`} alt="" /> */}
              <video width="400" controls>
                <source src={`${video}.mp4`} type="video/mp4" />
                <source src={`${video}.ogg`} type="video/ogg" />
                Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-lg-5 offset-lg-1 mb-md-72">
                <h2 className="plan__title">{title}</h2>
                <p className="plan__text lead">{description}</p>
                <ul className="plan-ul">
                {plan.slice(0, 3).map(item => (
                    <li>{item.plan}</li>
                ))}
                </ul>
                <Link to="/" className="btn btn--lg btn--color">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
}
