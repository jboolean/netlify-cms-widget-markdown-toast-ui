import ReactDOM from 'react-dom';
import React from 'react';

import 'core-js/stable';

import NetlifyCmsMarkdownToastWidget from './NetlifyCmsWidgetMarkdownToastUi';
import stylesheet from './demo.css';

const containerEl = document.getElementById('app-container');

ReactDOM.render(
  React.createElement(NetlifyCmsMarkdownToastWidget, {
    value: '# Hello World',
    field: {},
    forID: 'foo',
    classNameWrapper: stylesheet.wrapper,
    onChange: (...args) => {
      console.log('change called', args);
    },
    options: {},
  }),
  containerEl
);
