import React from 'react';
import Title from './Title';
import ServicesItemsSlider from './ServicesItemsSlider';
import ServicesItems from './ServicesItem';

export default function index({ title, services, slider }) {
  return (
    <>
      <Title title={title} />
      {slider ? (
        <ServicesItemsSlider services={services} />
      ) : (
        <ServicesItems services={services} />
      )}
    </>
  );
}
