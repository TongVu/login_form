import React from "react";

const Post = ({ title, body }) => {
  return (
    <React.Fragment>
      <h1>Title: {title}</h1>
      <p>{body}</p>
    </React.Fragment>
  );
};
export default Post;
