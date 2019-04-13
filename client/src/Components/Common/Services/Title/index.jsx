/* eslint-disable react/prop-types */
import React from 'react';

export default function index({ title }) {
  return (
    <section className="section-wrap bg-dark">
      <div className="container">
        <div className="title-row mb-56">
          <h2 className="section-title text-center">{title}</h2>
        </div>
      </div>
    </section>
  );
}
