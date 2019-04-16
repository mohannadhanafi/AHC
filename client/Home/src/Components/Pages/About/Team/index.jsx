import React, { Component } from 'react';
import axios from 'axios';
import Team from './TeamItem';

export default class index extends Component {
    state = {
      title: '',
      description: '',
      team: [],
    }

    componentWillMount() {
      axios.get('/api/v2/getTitle').then((result) => {
        const { data } = result;
        const { teamtitle, teamsub } = data[0];
        this.setState({ title: teamtitle, description: teamsub });
      });
    }

    componentDidMount() {
      axios.get('/api/v2/team/getAll').then((result) => {
        const { data } = result;
        this.setState({ team: data });
      });
    }

    render() {
      const { title, description, team } = this.state;
      return (
        <>
          <section className="section-wrap bg-light">
            <div className="container">
              <div className="row title-row">
                <div className="col-lg-4">
                  <h2 className="section-title">{title}</h2>
                </div>
                <div className="col-lg-7 offset-lg-1">
                  <p className="lead mb-0">{description}</p>
                </div>
              </div>
              <Team team={team} />
            </div>
          </section>
        </>
      );
    }
}
