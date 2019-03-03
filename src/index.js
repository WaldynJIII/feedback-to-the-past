import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {feeling: '', support: '', understanding: '', comments: '',}, action) => {
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            feeling: action.payload,
        }
    }
    if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: action.payload,
        }
    }
    if (action.type === 'ADD_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload,
        }
    }
    if (action.type === 'ADD_COMMENTS') {
        return {
            ...state,
            comments: action.payload,
        }
    }
    if (action.type === 'CLEAR_CART') {
        return {
            feeling: '',
            support: '',
            understanding: '',
            comments: '',
        }
    }
    console.log(state)
   return {}
};

const storeInstance = createStore(
    combineReducers({
       
        feedbackReducer
    }), applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
