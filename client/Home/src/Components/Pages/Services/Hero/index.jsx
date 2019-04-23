import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../../Common/Loading';

export default class index extends Component {
    state = {
      backgoround: 'https://deothemes.com/envato/casumi/html/img/page_title/services.jpg',
      title: '',
      loading: true,
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1500);
    }

    componentDidMount() {
      axios.get('/api/v2/getTitle').then((result) => {
        const { data } = result;
        const { servicestitile, servicesimage } = data[0];
        this.setState({ title: servicestitile, backgoround: servicesimage });
      });
    }

    render() {
      const { backgoround, title, loading } = this.state;
      return (
        loading ? <Loading /> : (
          <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(/api/v2/getFile/${backgoround})` }}>
            <div className="container">
              <div className="page-title__holder">
                <h1 className="page-title__title">{title}</h1>
              </div>
            </div>
          </section>
        )
      );
    }
}
