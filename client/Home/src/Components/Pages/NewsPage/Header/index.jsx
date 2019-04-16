import React from 'react';
import moment from 'moment';

export default function index({ title, date, user }) {
  return (
    <section className="section-wrap blog-page-title single-post__entry-header bg-dark" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/pattern.png)' }}>
      <div className="container">
        <div className="blog-page-title__holder">
          <h1 className="blog-page-title__title">{title}</h1>
          <div className="entry__meta">
            <span className="entry__meta-item entry__meta-author">
              <img src={`/api/v2/getFile/${user.pic}`} className="entry__meta-author-img" alt="" />
              <a href="#"><span className="entry__meta-author-name">{user.name}</span></a>
            </span>
            <span className="entry__meta-item entry__meta-date">{moment(date).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
