/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default class index extends Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    text: '',
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onClick= async (e) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,

    });
    const {
      email,
      name,
      mobile,
      text,
    } = this.state;
    const data = {
      email,
      name,
      mobile,
      text,
    };
    await axios.post('api/v2/contact', data).then((res) => {
      const { data: { message } } = res;
      if (res.err) {
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
  }

  render() {
    const { data: { quote } } = this.props;
    const {
      name, email, mobile, text,
    } = this.state;
    return (
      <section className="section-wrap bg-light">
        <div className="container">

          <div className="title-row text-center">
            <h2 className="section-title">{quote}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5">
              <form onSubmit={this.onClick} className="contact-form" method="post">

                <div className="form-group">
                  <input onChange={this.onChange} name="name" className="form-group__input" id="name" type="text" placeholder="Name *" value={name} required />
                </div>

                <div className="form-group">
                  <input onChange={this.onChange} name="email" id="email" type="email" placeholder="Email *" value={email} required />
                </div>

                <div className="form-group">
                  <input type="number" onChange={this.onChange} name="mobile" id="phone" placeholder="Phone Number" value={mobile} required />
                </div>

                <div className="contact-message">
                  <textarea onChange={this.onChange} id="message" name="text" rows="5" placeholder="Message" value={text} required />
                </div>

                {/* <div className="consent-checkbox">
                  <label>
                    <input className="consent-checkbox__input" type="checkbox" name="your-consent" required />
                    <span className="consent-checkbox__label">I agree to the
                      <a href="#">privacy policy</a>
                    </span>
                  </label>
                </div> */}
                <input type="submit" className="btn btn--lg btn--color btn--wide btn--button" value="Send Message" id="submit-message" />
                <div id="msg" className="message" />
              </form>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
