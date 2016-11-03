import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {User, LoginControl, Calculator, TodoList, ReactH1} from './User';
import FacebookLogin from './FacebookComponent';
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

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root3')
);


ReactDOM.render(
  <Calculator />,
  document.getElementById('root4')
);


const facebook_options = {
  socialId: "582584571930800",
  responseHandler: (response) => {
    console.log(response);
  }
}

ReactDOM.render(
  <FacebookLogin options={facebook_options} />,
  document.getElementById('root5')
);


ReactDOM.render(
  <TodoList />,
  document.getElementById('root6')
);

ReactDOM.render(
  <ReactH1 />,
  document.getElementById('root7')
);


