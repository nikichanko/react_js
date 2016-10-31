import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './User';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
ReactDOM.render(
  <User
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root2')
);