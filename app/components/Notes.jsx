import React from 'react';
import { connect } from 'react-redux';
import Note from './Note.jsx';
import Editable from './Editable.jsx';

class Notes extends React.Component {
    render() {
        const {notes, onValueClick, onEdit} = this.props;
        return (
            <ul className="notes">{notes.map((note) =>
                <Note id={note.id} key={note.id}
                editing={note.editing}>
                <Editable
                    editing={note.editing}
                    value={note.task}
                    onValueClick={onValueClick.bind(null, note.id)}
                    onEdit={onEdit.bind(null, note.id)}
                />
                </Note>
            )}</ul>
        );
    }
}

export default connect(() => ({}), {

})(Notes);