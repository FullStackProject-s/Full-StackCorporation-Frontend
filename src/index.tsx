import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'assets/styles/reseter.scss'
import 'assets/styles/scroll.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)

reportWebVitals();