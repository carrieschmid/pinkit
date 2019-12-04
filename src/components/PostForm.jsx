import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const PostForm = (props) => {
  let _name = null;
  let _date = null;
  let _topic = null;
  let _post = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      id: v4(),
      name: _name.value,
      date: _date.value,
      topic: _topic.value,
      post: _post.value
    };

    dispatch(action);
    _name.value = '';
    _date.value = '';
    _topic.value ='';
    _post.value = '';

  }
  return (  
    <div className="container">
      <h3>Make a Post</h3>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type='text' id='name' placeholder='name' ref={(input)=> {_name = input;}}/>
        <input type='text' id='date' placeholder='date' ref={(input)=> {_date = input;}}/>
        <input type='text' id='topic' placeholder='topic' ref={(input) => {_topic = input;}}/>
        <input type='text' id='post' placeholder='post body' ref={(input) => {_post = input;}}/>
        <button className='btn button btn-large' type='submit'>Post</button>
      </form>
    </div>
  );
};
 
export default connect()(PostForm);