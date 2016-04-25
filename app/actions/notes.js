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