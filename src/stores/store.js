import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk  from 'redux-thunk'
import initialValue from '../utils/InitialValue';
const initialState = initialValue;
const middleware = [thunk];


const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);


export default store;