import React from 'react';

import { BrowserRouter, Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';

import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </BrowserRouter>
    </Router>
  );
};
export default App;
