/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/ContactUs';
import Services from './Components/Pages/Services';
import Error404 from './Components/Pages/404Error';
import NewsPage from './Components/Pages/NewsPage';
import SingleService from './Components/Pages/SingleService';
import Header from './Components/Common/Navbar';
import BackTop from './Components/Common/BackTop';
import Footer from './Components/Common/Footer';
import './App.css';
import getOptions from './Redux/actions/options';

class App extends Component {
  state = {}


  render() {
    const { options } = this.props;
    if (options.length) {
      const { color } = options[0];
      document.documentElement.style.setProperty('--main-color', color);
    }
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/news/:seo" component={NewsPage} />
            <Route exact path="/service/:id" component={SingleService} />
            <Route path="/*" component={Error404} />
          </Switch>
          <BackTop />
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ options }) => options;

export default connect(mapStateToProps, { getOptions })(App);
