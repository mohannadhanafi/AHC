import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
      title: 'Latest News',
      news: [
        {
          image: 'https://deothemes.com/envato/casumi/html/img/blog/masonry/blog_post_1.jpg',
          tags: ['Finance', 'Management'],
          title: 'Business Mistakes to Avoid When Starting a Business',
          user: 'Alexander Samokhin',
          avatar: 'https://deothemes.com/envato/casumi/html/img/blog/author.png',
          date: 'July 06, 2019',
        },
        {
          image: 'https://deothemes.com/envato/casumi/html/img/blog/masonry/blog_post_2.jpg',
          tags: ['Taxes'],
          title: 'Utilize these nine resources to help you take the stress out of preparing your taxes',
          user: 'Alexander Samokhin',
          avatar: 'https://deothemes.com/envato/casumi/html/img/blog/author.png',
          date: 'July 06, 2019',
        },
        {
          image: 'https://deothemes.com/envato/casumi/html/img/blog/masonry/blog_post_3.jpg',
          tags: ['Productivity'],
          title: 'Investment Update, Successful people ask better questions',
          user: 'Alexander Samokhin',
          avatar: 'https://deothemes.com/envato/casumi/html/img/blog/author.png',
          date: 'July 06, 2019',
        },
      ],
    }

    render() {
      const { title, news } = this.state;
      return (
        <section className="section-wrap pt-0 pb-0">
          <div className="container">
            <div className="title-row text-center">
              <h2 className="section-title">{title}</h2>
            </div>
            <div className="row">
              {news.map(item => (
                <div key={uuid()} className="col-lg-4">
                  <article className="entry entry-card">
                    <div className="entry__header">
                      <Link to="/">
                        <img src={item.image} className="entry__img" alt="" />
                      </Link>
                      <div className="entry__category">
                        {item.tags.map(element => (
                          <Link key={uuid()} to="/" className="entry__category-item">{element}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="entry__body">
                      <h4 className="entry__title">
                        <Link to="/">{item.title}</Link>
                      </h4>
                      <div className="entry__meta">
                        <span className="entry__meta-item entry__meta-author">
                          <Link to="/" className="entry__meta-author-url">
                            <img src={item.avatar} className="entry__meta-author-img" alt="" />
                            <span className="entry__meta-author-name">{item.user}</span>
                          </Link>
                        </span>
                        <span className="entry__meta-item entry__meta-date">{item.date}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
}
