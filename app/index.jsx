import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import storage from './libs/storage';

const APP_STORAGE = 'kanban';
const store = configureStore(storage.get(APP_STORAGE) || {});

store.subscribe(() => {
    storage.set(APP_STORAGE, store.getState());
});

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, app
);