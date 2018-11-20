import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/index.css';
import App from './components/lib/App';
import * as serviceWorker from './components/serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { UpdateNav } from './components/reducers/cutNav'

const store = createStore(UpdateNav);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
