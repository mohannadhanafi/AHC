import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTitles from '../../../../Redux/actions/titles';
import Loading from '../../../Common/Loading';

class index extends Component {
    state = {
      loading: true,
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }

    render() {
      const { loading } = this.state;
      const { titles } = this.props;
      return (
        loading ? <Loading /> : (
          titles.length && (
          <section className="page-title bg-img bg-overlay" style={{ backgroundImage: `url(/api/v2/getFile/${titles[0].servicesimage})` }}>
            <div className="container">
              <div className="page-title__holder">
                <h1 className="page-title__title">{titles[0].servicestitile}</h1>
              </div>
            </div>
          </section>
          )
        )
      );
    }
}

const mapStateToProps = ({ titles }) => titles;
export default connect(mapStateToProps, { getTitles })(index);
