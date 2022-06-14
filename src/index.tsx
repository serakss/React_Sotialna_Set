import React from 'react';
import App from './App';

import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/redux-store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


/*
export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App store={store} />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}
*/


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


/*export let rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost}/>,
    document.getElementById('root'));
}*/

//rerenderEntireTree();
//store.subscribe(rerenderEntireTree)


