import React from 'react';

export default function next({ onClick }) {
  return (
    <button onClick={onClick} className="slick-custom-nav__prev slick-prev slick-arrow" type="button" aria-label="prev">Prev ></button>

  );
}
