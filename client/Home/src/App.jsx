import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

class App extends Component {
  state = {}

  componentDidMount() {
    axios.get('/api/v2/getoptions').then((result) => {
      const { data } = result;
      const { color } = data[0];
      document.documentElement.style.setProperty('--main-color', color);
    });
  }

  render() {
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

export default App;
