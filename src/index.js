//DEPENDENCIAS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import generateStore from './redux/store'

//APP
import App from './pages/App';


//ESTILOS

import './components/styles/style.css';
import './components/styles/login_style.css';
import './components/styles/registerStyles.css';
import './components/styles/modalStyles.css';

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


