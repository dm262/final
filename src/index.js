import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {createStore} from "redux";
import reducers from "./reducers";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);