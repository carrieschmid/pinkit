import React from 'react';
import { connect } from 'react-redux';

const Post = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.date}</h3>
      <h3>{props.topic}</h3>
      <h3>{props.post}</h3>
      <h3>{props.id}</h3>
    </div>
  );
};
 
export default Post;