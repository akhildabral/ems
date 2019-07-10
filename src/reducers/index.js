import { combineReducers } from 'redux';
import settings from './settings';
import expenses from './expenses';
export default combineReducers({
 settings,
 expenses
});