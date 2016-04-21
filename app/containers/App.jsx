import React from 'react';
import { connect } from 'react-redux';
import Lists from '../components/lists.jsx';
import { createList } from '../actions/lists';
@connect((state) => ({
    lists: state.lists
}), {
    createList
})

export default class App extends React.Component {
    render() {
        const {lists, createList} = this.props;
        return (
            <div>
                <button className="add-list"
                        onClick={createList.bind(null, {
                        name: 'New list'
          })}>+</button>
                <Lists lists={lists} />
            </div>
        );
    }
}
