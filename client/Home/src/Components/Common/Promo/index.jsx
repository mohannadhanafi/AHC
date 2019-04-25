/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getTitles from '../../../Redux/actions/titles';

class index extends Component {
    state = {
      title: 'We bring the right people together',
      description: `As you may already know, there are an infinite number of things you can test on your site to help you increase sales. 
      From layout to copy to design, there are limitless combinations of changes that may improve your visitor-to-sale conversion rate.`,
      first_image: 'https://deothemes.com/envato/casumi/html/img/promo/promo_img_1.jpg',
      second_image: 'https://deothemes.com/envato/casumi/html/img/promo/promo_img_2.jpg',
    }

    render() {
      const {
        first_image, second_image, 
      } = this.state;
      const { titles } = this.props;
      return (
        <section className="section-wrap promo section-wrap--pt-180">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-md-72">
                <h2 className="promo__title">{titles.length && titles[0].promotitle}</h2>
                <p className="promo__text lead">
                  {titles.length && titles[0].promodesc}
                </p>
                <Link to="/contact" className="btn btn--lg btn--color">
                  <span>Contact Us</span>
                </Link>
              </div>
              <div className="col-lg-7 offset-lg-1 mt-md-72">
                <img src={first_image} className="promo__img promo__img-1" alt="" />
                <img src={second_image} className="promo__img promo__img-2" alt="" />
              </div>
            </div>
          </div>
        </section>
      );
    }
}

const mapStateToProps = ({ titles }) => titles;
export default connect(mapStateToProps, { getTitles })(index);
