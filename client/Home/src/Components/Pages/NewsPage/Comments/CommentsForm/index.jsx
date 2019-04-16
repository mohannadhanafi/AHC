import React from 'react';

export default function index({
  onChange, onClick, name, email, body,
}) {
  return (
    <div className="comment-respond">
      <h5 className="comment-respond__title">Leave your comment</h5>
      <form onSubmit={onClick} method="post" className="comment-form" noValidate="">
        <div className="row row-16">
          <div className="col-lg-6">
            <input onChange={onChange} name="name" type="text" value={name} placeholder="Name" required />
          </div>
          <div className="col-lg-6">
            <input onChange={onChange} name="email" type="email" value={email} placeholder="Email" required />
          </div>
        </div>
        <textarea onChange={onChange} className="form-control" name="body" value={body} rows="6" placeholder="Comment" required="required" />
        <p className="form-submit">
          <input name="submit" type="submit" id="submit" className="btn btn--lg btn--color btn--button" value="Post Comment" />
          {' '}
          <input type="hidden" name="comment_post_ID" value="220" id="comment_post_ID" />
        </p>
      </form>
    </div>
  );
}
