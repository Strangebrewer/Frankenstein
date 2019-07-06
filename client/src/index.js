import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';
import store from './store';
import App from './App';

const render = (
     <Provider store={store}>
       <GlobalStyle />
       <App />
     </Provider>
 )

ReactDOM.render(render, document.getElementById('root'));