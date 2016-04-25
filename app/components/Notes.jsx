import React from 'react';
import { connect } from 'react-redux';
import Note from './Note.jsx';

class Notes extends React.Component {
    render() {
        const { notes } = this.props;
        console.log(notes);
        return (
            <ul className="notes">{notes.map((note) =>
                <Note></Note>
            )}</ul>
        );
    }
}

export default connect(() => ({}), {

})(Notes);