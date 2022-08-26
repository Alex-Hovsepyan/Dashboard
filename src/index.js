import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { reducers } from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
