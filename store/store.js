import { createStore, combineReducers } from 'redux';
import buses from './../reducers/buses';
import search from './../reducers/search';

const reducers = combineReducers({ search, buses });
export const store = createStore(reducers);
