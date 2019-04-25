/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getTitles from '../../../../Redux/actions/titles';
import Team from './TeamItem';

class index extends Component {
    state = {
      team: [],
    }

    componentDidMount() {
      axios.get('/api/v2/team/getAll').then((result) => {
        const { data } = result;
        this.setState({ team: data });
      });
    }

    render() {
      const { team } = this.state;
      const { titles } = this.props;
      return (
        <>
          <section className="section-wrap bg-light">
            <div className="container">
              <div className="row title-row">
                <div className="col-lg-4">
                  <h2 className="section-title">{titles.length && titles[0].teamtitle}</h2>
                </div>
                <div className="col-lg-7 offset-lg-1">
                  <p className="lead mb-0">{titles.length && titles[0].teamsub}</p>
                </div>
              </div>
              <Team team={team} />
            </div>
          </section>
        </>
      );
    }
}

const mapStateToProps = ({ titles }) => titles;
export default connect(mapStateToProps, { getTitles })(index);
