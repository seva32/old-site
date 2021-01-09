import React from 'react';
import MainPage from './views/mainPage';
import { Provider } from 'react-redux';
import { GlobalStyle } from './utils/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/styles/theme';
import store from './store';
import './app.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <MainPage />
    </Provider>
  </ThemeProvider>
);

export default App;
