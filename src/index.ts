import ReactDOM from 'react-dom';
import React from 'react';

import 'normalize.css';
import 'core-js/stable';

import App from './App';

const containerEl = document.getElementById('app-container');

ReactDOM.render(React.createElement(App), containerEl);
