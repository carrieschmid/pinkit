import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import redditReducer from './reducers/redditReducer';
import { Provider } from 'react-redux';

const store = createStore(redditReducer);
console.log(createStore(redditReducer));
console.log(store);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

/*eslint-enable */