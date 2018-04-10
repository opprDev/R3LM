import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import rootReducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadState } from './store/localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
