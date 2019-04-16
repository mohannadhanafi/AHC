import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class index extends Component {
    state = {
      title: 'Latest News',
      news: [],
    }

    componentDidMount() {
      axios('/api/v2/posts/getAll').then((result) => {
        const { data } = result;
        this.setState({ news: data });
      });
    }

    render() {
      const { title, news } = this.state;
      return (
        <section className="section-wrap  pb-0">
          <div className="container">
            <div className="title-row text-center">
              <h2 className="section-title">{title}</h2>
            </div>
            <div className="row">
              {news.length && (
                news.slice(0, 3).map(item => (
                  <div key={uuid()} className="col-lg-4">
                    <article className="entry entry-card">
                      <div className="entry__header">
                        <Link to="/">
                          <img src={`/api/v2/getFile/${item.header_media[0]}`} className="entry__img" alt="" />
                        </Link>
                        <div className="entry__category">
                          {/* {item.tags.map(element => (
                            <Link key={uuid()} to="/" className="entry__category-item">{element}</Link>
                          ))} */}
                        </div>
                      </div>
                      <div className="entry__body">
                        <h4 className="entry__title">
                          <Link to="/">{item.title}</Link>
                        </h4>
                        <div className="entry__meta">
                          <span className="entry__meta-item entry__meta-author">
                            <Link to="/" className="entry__meta-author-url">
                              <img src={`/api/v2/getFile/${item.user.pic}`} className="entry__meta-author-img" alt="" />
                              <span className="entry__meta-author-name">{item.user.name}</span>
                            </Link>
                          </span>
                          <span className="entry__meta-item entry__meta-date">{moment(item.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                      </div>
                    </article>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      );
    }
}
