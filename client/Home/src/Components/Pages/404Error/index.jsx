/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-tabs */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <section className="section-wrap error404 bg-overlay bg-overlay--white" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/page_title/404.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 text-center">
            <span className="error404__number">404</span>
          </div>
          <div className="col-lg-7 text-md-center">
            <h1 className="error404__title">Sorry, this page doesn't exist.</h1>
            <p className="error404__text lead mb-24">It looks like nothing was found at this page. You can either go back to the last page or go to homepage.</p>
            <Link to="/" className="btn btn--lg btn--color">
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
