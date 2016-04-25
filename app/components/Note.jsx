import React from 'react';

class Note extends React.Component {
    render() {
        const { ...props } = this.props;
        return (
            <li>{props.children}</li>
        );
    }
}

export default Note;