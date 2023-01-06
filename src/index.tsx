import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'assets/styles/reseter.scss'
import 'assets/styles/scroll.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

reportWebVitals();