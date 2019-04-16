import React from 'react';

export default function index({ user }) {
  return (
    <div className="entry__author clearfix">
      <a href="#">
        <img src={`/api/v2/getFile/${user.pic}`} alt="" className="avatar avatar-64 photo entry__author-img" />
      </a>
      <div className="entry__author-info">
        <h6 className="entry__author-name" rel="author">
          <a href="#">
            <span className="entry__author-name">{user.name}</span>
          </a>
        </h6>
        <p className="mb-0">{user.bio}</p>

      </div>
    </div>
  );
}
