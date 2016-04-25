import uuid from 'node-uuid';

export const DELETE_LIST = 'DELETE_LIST';
export function deleteList(id) {
    return {
        type: DELETE_LIST,
        id
    };
}

export const CREATE_LIST = 'CREATE_LIST';
export function createList(list) {
    return {
        type: CREATE_LIST,
        list: {
            id: uuid.v4(),
            notes: list.notes || [],
            ...list
        }
    }
}

export const ATTACH_TO_LIST = 'ATTACH_TO_LIST';
export function attachToList(listId, noteId) {
    return {
        type: ATTACH_TO_LIST,
        listId,
        noteId
    };
}