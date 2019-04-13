import React, { Component } from 'react';
import Team from './TeamItem';

export default class index extends Component {
    state = {
      title: 'World class teams',
      description: 'The combination of exceptional talent and exciting people creates a competitive but informal environment – and a great platform for you to develop.',
      team: [
        {
          img: 'https://deothemes.com/envato/casumi/html/img/team/team_1.jpg',
          name: 'Kelly Green',
          bio: 'We also provide tangible results and measurable long-term value business.',
        },
        {
            img: 'https://deothemes.com/envato/casumi/html/img/team/team_2.jpg',
            name: 'Joeby Ragpa',
            bio: 'We also provide tangible results and measurable long-term value business.',
        },
        {
            img: 'https://deothemes.com/envato/casumi/html/img/team/team_3.jpg',
            name: 'Alexander Samokhin',
            bio: 'We also provide tangible results and measurable long-term value business.',
        },
        {
            img: 'https://deothemes.com/envato/casumi/html/img/team/team_4.jpg',
            name: 'Martha Smith',
            bio: 'We also provide tangible results and measurable long-term value business.',
        }
      ],
    }

    render() {
      const { title, description, team } = this.state;
      return (
        <>          
        <section class="section-wrap bg-light">
        <div class="container">        
            <div class="row title-row">
            <div class="col-lg-4">
                <h2 class="section-title">{title}</h2>
            </div>
            <div class="col-lg-7 offset-lg-1">
                <p class="lead mb-0">{description}</p>
            </div>
            </div> 
            <Team team={team}/>
        </div>
        </section>
        </>
      );
    }
}
