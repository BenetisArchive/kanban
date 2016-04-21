import update from 'react-addons-update';
import * as types from '../actions/lists';

const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_LIST:
            return [...state, action.list];

        case types.DELETE_LIST:
            return state.filter((list) => list.id !== action.id);

        default:
            return state;
    }
}
