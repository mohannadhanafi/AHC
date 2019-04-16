import React from 'react';
import reactHtmlParser from 'react-html-parser';

export default function index({ description }) {
  return (
    <div className="entry__article-wrap">

      <div className="entry__share">
        <div className="sticky-col">
          <div className="socials entry__share-socials">
            <a
              className="social social-facebook entry__share-social"
              href="#"
              target="_blank"
            >
              <i className="ui-facebook" />
            </a>
            <a
              className="social social-twitter entry__share-social"
              href="#"
              target="_blank"
            >
              <i className="ui-twitter" />
            </a>
            <a
              className="social social-google-plus entry__share-social"
              href="#"
              target="_blank"
            >
              <i className="ui-google" />
            </a>
          </div>
        </div>
      </div>
      {reactHtmlParser(description)}
    </div>
  );
}
