import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Themes } from './styles/Themes';
import { GlobalStyle } from './styles/GlobalStyle';
import store from './store';
import Switchboard from './Switchboard';

const render = (
   <ThemeProvider theme={Themes.daymode}>
     <Provider store={store}>
       <GlobalStyle />
       <Switchboard />
     </Provider>
   </ThemeProvider>
 )

ReactDOM.render(render, document.getElementById('root'));