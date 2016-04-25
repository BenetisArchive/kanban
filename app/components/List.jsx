import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../actions/lists';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

class List extends React.component {
    render() {
        const {list, listNotes, ...props} = this.props;
        const listId = list.id;
    }
}
//
// export default compose(
//     connect((state, props) => ({
//         listNotes: props.list.notes.map(id => state.notes[
//             state.notes.findIndex(note => note.id === id)
//             ]).filter(note => note)
//     }), {
//         ...listActions
//     }),
//     DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
//         connectDropTarget: connect.dropTarget()
//     }))
// )(List);