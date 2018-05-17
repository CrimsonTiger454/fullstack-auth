import {createStore, applyMiddleware} from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';
import reducer from './dux/users';

let middleware = applyMiddleware(promiseMiddleWare());

export default createStore(reducer, middleware);