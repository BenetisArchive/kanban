import * as types from '../actions/notes';

const initialState = [];

export default function notes(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_NOTE:
            return [...state, action.note];
        default:
            return state;
    }
}
