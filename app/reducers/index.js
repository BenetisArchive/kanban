import { combineReducers } from 'redux';
import lists from './lists';
import notes from './notes';

export default combineReducers({
    lists,
    notes
});