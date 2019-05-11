import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/root'

ReactDOM.render(
    <Provider store={configureStore()}>
        <Root/>
    </Provider>, document.getElementById('root')
);

//serviceWorker.unregister();
