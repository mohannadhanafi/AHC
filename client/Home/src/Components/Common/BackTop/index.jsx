import React, { Component } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import './style.css';

export default class index extends Component {
  state = {}

  componentDidMount() {
    // here will be code
  }

  render() {
    return (
      <ScrollUpButton
        AnimationDuration={1300}
      />
      // <div id="back-to-top">
      //   <a href="#top"><i className="ui-arrow-up" /></a>
      // </div>
    );
  }
}
