//Arhivo que renderiza toda la App
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './container/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Se inserta en el elemento html con id 'root' toda la App
);



