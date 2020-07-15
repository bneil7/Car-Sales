import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import App from './App';

import {reducer, initialState} from './reducers/Reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer, initialState);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement);
