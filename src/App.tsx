import React from 'react';

import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';
import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </Router>
  );
};
export default App;
