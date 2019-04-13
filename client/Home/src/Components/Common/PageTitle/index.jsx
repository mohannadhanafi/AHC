import React, { Component } from 'react';
import Header from '../Navbar'

function pageTitle(props) {
    const {
        title, cover,
    } = props;
    return (
      <>
        <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(${cover})` }}>
        <div className="container">
          <div className="page-title__holder">
            <h1 className="page-title__title">{title}</h1>
          </div>
        </div>
      </section>
      </>
    );
  }
  export default pageTitle;