import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function CoolComponent({ adjective = 'Cool' }) {
  return (
  <p>Youpi So {adjective} !</p>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <div> 
    <CoolComponent adjective="SuperCool"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
