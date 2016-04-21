import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { kanban } from './reducers';
main();

function main() {
    let store = createStore();

    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(
        <Provider store={}>
            <App />
        </Provider>, app
    );
}

