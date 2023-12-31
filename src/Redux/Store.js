import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';

// Create Redux store
const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
