import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="post-container" style={postStyle}>
      <h1>Title: {title}</h1>
      <p>{body}</p>
    </div>
  );
};

const postStyle = {
  width: "80%",
  margin: "15px auto",
  padding: "15px",
  border: "1px solid grey",
  borderRadius: "8px",
  boxShadow: "3px 3px 8px snow"
};
export default Post;
