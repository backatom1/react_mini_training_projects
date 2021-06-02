import { combineReducers } from 'redux';

import bgReducer from './bgReducer';
import counterReducer from './counterReducer';

export default combineReducers({
	bgReducer,
	counterReducer
});