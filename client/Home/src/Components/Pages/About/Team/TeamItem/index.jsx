/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import $ from 'jquery';

export default class index extends Component {
  state = {}

  componentDidMount() {
    $(document).ready(() => {
      (function ($) {
        $('.slick-service-boxes').slick({
          arrows: false,
          dots: true,
          slidesToShow: 3,
          infinite: false,

          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }(window.jQuery));
    });
  }

  render() {
    const { team } = this.props;
    return (
      <div class="slick-team slick-slider-row">
       {team.map(item => (
         <div class="slick-slide slick-slider-col">
         <div class="team box-shadow hover-down">
           <div class="team__img-holder">
             <img src={item.img} alt="" class="team__img" />
           </div>
           <div class="team__body">
             <h5 class="team__name">{item.name}</h5>
             <p class="team__text">{item.bio}</p>                  
           </div>
         </div>
       </div>
          ))}
      </div>
    );
  }
}
