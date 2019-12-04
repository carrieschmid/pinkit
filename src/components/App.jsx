import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import PostForm from './PostForm';
import Header from './Header';
import PostList from './PostList';
import { redditReducer } from './../reducers/redditReducer.js';
import { connect } from 'react-redux';
import Splash from './Splash';



class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.masterPostList);

  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Splash}/>
          <Route path='/NewPost' component={PostForm}/>
          <Route path='/PostList' render={()=><PostList masterPostList={this.props.masterPostList}/>}/>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
    masterPostList: state
    
  };
};

export default withRouter(connect(mapStateToProps)(App));