import React from 'react';
import './style.css';

export default function index({ background }) {
  return (
    <div className="container">
      <figure className="blog-featured-img-container blog-featured-img-container--offset">
        <img src={`/api/v2/getFile/${background}`} className="blog-featured-img featured--image" alt="" />
      </figure>
    </div>
  );
}
