/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getOptions from '../../../Redux/actions/options';

class index extends Component {
    state = {
      CTA: 'Contact Us',
      background: 'https://deothemes.com/envato/casumi/html/img/cta/cta_img_1.jpg',
    }

    render() {
      const {
        CTA, background,
      } = this.state;
      const { options } = this.props;
      return (
        <section className="section-wrap call-to-action text-center section-wrap--pb-140 bg-white-gradient" style={{ backgroundImage: `url(${background})` }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h3 className="call-to-action__title">{options.length && (options[0].ctatitle)}</h3>
                <p className="call-to-action__text lead">{options.length && (options[0].ctasub)}</p>
                <Link to="/contact" className="btn btn--lg btn--color">
                  <span>{CTA}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

const mapStateToProps = ({ options }) => options;
export default connect(mapStateToProps, { getOptions })(index);
