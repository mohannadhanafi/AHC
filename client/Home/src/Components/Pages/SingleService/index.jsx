import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Loading from '../../Common/Loading';

export default class index extends Component {
    state = {
      title: '',
      desc: '',
      date: '',
      loading: true,
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1500);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      const { match: { params: { id } } } = this.props;
      axios.get(`/api/v2/core/${id}`).then((result) => {
        const { data } = result;
        const { title, desc, createdAt } = data[0];
        this.setState({ title, desc, date: createdAt });
      });
    }

    render() {
      const {
        title, desc, date, loading,
      } = this.state;
      return (
        loading ? <Loading /> : (
          <>
            <section className="section-wrap blog-page-title single-post__entry-header bg-dark" style={{ backgroundImage: 'url(https://deothemes.com/envato/casumi/html/img/pattern.png)' }}>
              <div className="container">
                <div className="blog-page-title__holder">
                  <h1 className="blog-page-title__title">{title}</h1>
                  <div className="entry__meta">
                    <span className="entry__meta-item entry__meta-date">{moment(date).format('MMM DD, YYYY')}</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="section-wrap pt-24 pb-72">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 blog__content mb-32">
                    <article className="entry single-post__entry">
                      {desc}
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      );
    }
}
