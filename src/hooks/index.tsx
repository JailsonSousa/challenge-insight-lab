import React from 'react';

import { JobProvider } from './job';

export const AppProvider: React.FC = ({ children }) => (
  <JobProvider>{children}</JobProvider>
);
