/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Featured from './Featured';
import Body from './Body';
import Author from './Author';
import Comments from './Comments';
import NextPrev from './NextPrev';
import Loading from '../../Common/Loading';

export default class index extends Component {
  state = {
    background: '',
    title: '',
    date: '',
    description: '',
    user: '',
    commentsResult: [],
    id: '',
    name: '',
    email: '',
    body: '',
    loading: true,
  };

  onClick = (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
    const {
      name, email, body, id,
    } = this.state;
    const data = {
      name,
      email,
      body,
      post_id: id,
    };
    axios.post('/api/v2/comments/create', data).then((result) => {
      const { data: { message } } = result;
      if (result.err) {
        return Toast.fire({
          type: 'error',
          title: message,
        });
      }
      Toast.fire({
        type: 'success',
        title: message,
      });
      this.setState({
        email: '', name: '', text: '', mobile: '',
      });
    }).catch((err) => {
      Toast.fire({
        title: 'Somthing Error',
        type: 'error',
      });
    });
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { seo },
      },
    } = this.props;
    axios.get(`/api/v2/postId/${seo}`).then((result) => {
      const { data } = result;
      const { postResult, commentsResult } = data;
      const {
        header_media: background,
        title,
        createdAt: date,
        description,
        user,
        id,
      } = postResult;
      this.setState({
        background,
        title,
        date,
        description,
        user,
        commentsResult,
        id,
      });
    });
  }

  render() {
    const {
      background,
      title,
      date,
      description,
      user,
      commentsResult,
      name,
      email,
      body,
      loading,
    } = this.state;
    return (
      loading ? <Loading /> : (
        <>
          <Header title={title} date={date} user={user} />
          <Featured background={background} />
          <section className="section-wrap pt-24 pb-72">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 blog__content mb-32">
                  <article className="entry single-post__entry">
                    <Body description={description} />
                  </article>
                  <Author user={user} />
                </div>
              </div>
            </div>
          </section>
          <Comments
            comments={commentsResult}
            onClick={this.onClick}
            onChange={this.onChange}
            name={name}
            email={email}
            body={body}
          />
          {/* <NextPrev /> */}
        </>
      )
    );
  }
}
