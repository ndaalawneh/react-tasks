import React from "react";

const PostList = props => (
  <ul>
    {props.posts.map((post, i) => (
      <li key={i}>{post.title}</li>
    ))}
  </ul>
);

export default PostList;
