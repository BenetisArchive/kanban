import uuid from 'node-uuid';

export const CREATE_NOTE = 'CREATE_NOTE';
export function createNote(note) {
    return {
        type: CREATE_NOTE,
        note: {
            id: uuid.v4(),
            ...note
        }
    }
}

export const UPDATE_NOTE = 'UPDATE_NOTE';
export function updateNote(updatedNote) {
    return {
        type: UPDATE_NOTE,
        ...updatedNote
    };
}
