import React from 'react';

export default function index({ data: { image, title, sub_title } }) {
  return (
    <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(/api/v2/getFile/${image})` }}>
      <div className="container">
        <div className="page-title__holder">
          <h1 className="page-title__title">{title}</h1>
          <p className="subtitle">{sub_title}</p>
        </div>
      </div>
    </section>
  );
}
