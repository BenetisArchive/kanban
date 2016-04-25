import update from 'react-addons-update';
import * as types from '../actions/lists';

const initialState = [];

export default function lists(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_LIST:
            return [...state, action.list];

        case types.DELETE_LIST:
            return state.filter((list) => list.id !== action.id);

        case types.ATTACH_TO_LIST:
            const laneId = action.listId;
            const noteId = action.noteId;

            return state.map((list) => {
                const index = list.notes.indexOf(noteId);

                if(index >= 0) {
                    return Object.assign({}, list, {
                        notes: list.notes.length > 1 ? list.notes.slice(0, index).concat(
                            list.notes.slice(index + 1)
                        ): []
                    });
                }
                if(list.id === laneId) {
                    return Object.assign({}, list, {
                        notes: [...list.notes, noteId]
                    });
                }

                return list;
            });

        default:
            return state;
    }
}
