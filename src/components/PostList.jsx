import React from 'react';
import Post from './Post';

const PostList = (props) => {
    console.log(props.masterPostList);

    return ( 
        <div>
      <h3>Post List</h3>
      <hr/>
      {Object.keys(props.masterPostList).map(function(postId) {
          var post = props.masterPostList[postId];
          return <Post name={post.name}
          date={post.date}
          topic={post.topic}
          post={post.post}
          key={postId}
          postId={postId}/>;
        })}
    </div>
    
  );
};


export default PostList;