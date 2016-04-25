import React from 'react';
import ItemTypes from '../constants/itemTypes';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import * as listActions from '../actions/lists';
import * as noteActions from '../actions/notes';
import Notes from './Notes.jsx';


const noteTarget = {
    hover(targetProps, monitor) {
        const sourceProps = monitor.getItem();
        const sourceId = sourceProps.id;

        if(!targetProps.list.notes.length) {
            targetProps.attachToList(
                targetProps.list.id,
                sourceId
            );
        }
    }
};

class List extends React.Component {
    render() {
        const {list, listNotes, ...props} = this.props;
        const listId = list.id;

        return <div>
            <div className="lane-add-note">
                <button onClick={this.addNote.bind(this, listId)}>+</button>
            </div>
            <Notes
                notes={listNotes}
            />
        </div>
    }
    addNote(listId, e) {
        e.stopPropagation();

        const o = this.props.createNote({
            task: 'New task'
        });
        this.props.attachToList(listId, o.note.id);
    }
}

export default compose(
    connect((state, props) => ({
        listNotes: props.list.notes.map(id => state.notes[
            state.notes.findIndex(note => note.id === id)
            ]).filter(note => note)
    }), {
        ...listActions,
        ...noteActions
    }))(List);