import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import TaijiApp from "./taiji/TaijiApp1.js"

var taijiApp = ReactDOM.render(
    <TaijiApp/>,
    document.getElementById('root')
);
