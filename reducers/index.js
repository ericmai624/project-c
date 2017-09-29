import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import updateMonth from './switchMonth';

const reducers = combineReducers({
  date: updateMonth
});

export const makeStore = initState => {
  return createStore(reducers, initState, applyMiddleware(thunk));
};