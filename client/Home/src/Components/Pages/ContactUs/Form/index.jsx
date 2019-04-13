/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-multiple-empty-lines */
import React, { Component } from 'react';

export default class index extends Component {
    state ={}

    render() {
      return (
        <section className="section-wrap bg-light">
          <div className="container">

            <div className="title-row text-center">
              <h2 className="section-title">Send us a message</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-5">
                <form id="contact-form" className="contact-form" method="post" action="#">

                  <div className="form-group">
                    <input name="name" className="form-group__input" id="name" type="text" placeholder="Name *" required />
                  </div>

                  <div className="form-group">
                    <input name="email" id="email" type="email" placeholder="Email *" required />
                  </div>

                  <div className="form-group">
                    <input name="phone" id="phone" type="text" placeholder="Phone Number" />
                  </div>

                  <div className="contact-message">
                    <textarea id="message" name="message" rows="5" placeholder="Message" />
                  </div>

                  <div className="consent-checkbox">
                    <label>
                      <input className="consent-checkbox__input" type="checkbox" name="your-consent" required />
                      <span className="consent-checkbox__label">I agree to the
                        <a href="#">privacy policy</a>
                      </span>
                    </label>
                  </div>
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
