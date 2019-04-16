import React from 'react';
import moment from 'moment';
import CommentsForm from './CommentsForm';

export default function index({
  comments,
  onChange,
  onClick,
  name,
  email,
  body,
}) {
  return (
    <section className="section-wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="comments" className="entry__comments">
              <h5 className="entry__comments-title">
                {`${comments.length} comments` || '0 comment'}
              </h5>
              <ul className="comment-list">
                {comments.length
                  && comments.map(comment => (
                    <li className="comment even thread-even depth-1 parent">
                      <article className="comment-body">
                        <div className="comment-avatar vcard">
                          <img
                            alt=""
                            src="https://deothemes.com/envato/casumi/html/img/blog/single/comment_1.png"
                            className="avatar avatar-46 photo"
                          />
                        </div>
                        <div className="comment-text">
                          <h6 className="comment-author">{comment.name}</h6>
                          <span className="says">says:</span>
                          <div className="comment-metadata">
                            <a href="#" className="comment-date">
                              <time dateTime={comment.createdAt}>
                                {moment(comment.createdAt).calendar()}
                              </time>
                            </a>
                          </div>
                          <div className="comment-content">
                            <p>{comment.body}</p>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
              </ul>
              <CommentsForm
                onClick={onClick}
                onChange={onChange}
                name={name}
                email={email}
                body={body}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
