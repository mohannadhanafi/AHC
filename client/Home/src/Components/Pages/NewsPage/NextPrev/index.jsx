import React from 'react';

export default function index() {
  return (
    <nav className="entry-navigation">
      <h5 className="screen-reader-text" />
      <div className="entry-navigation__row clearfix">
        <div className="entry-navigation__col entry-navigation--left">
          <div className="entry-navigation__img" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/blog/single/previous.jpg)' }} />
          <a href="#" className="entry-navigation__url" />
          <div className="entry-navigation__body">
            <span className="entry-navigation__label">Previous Post</span>
            <h6 className="entry-navigation__title">Offer an Outrageous or Daily Deal</h6>
          </div>
        </div>

        <div className="entry-navigation__col entry-navigation--right bg-overlay">
          <div className="entry-navigation__img" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/blog/single/next.jpg)' }} />
          <a href="#" className="entry-navigation__url" />
          <div className="entry-navigation__body">
            <span className="entry-navigation__label">Next Post</span>
            <h6 className="entry-navigation__title">Investment Update, Successful people ask better questions</h6>
          </div>
        </div>

      </div>
    </nav>
  );
}
