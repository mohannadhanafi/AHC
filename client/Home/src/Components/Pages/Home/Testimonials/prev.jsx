import React from 'react';

export default function next({ onClick }) {
  return (
    <button onClick={onClick} className="slick-custom-nav__next slick-next slick-arrow" type="button" aria-label="next">Next ></button>
  );
}
